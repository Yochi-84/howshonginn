<template>
  <div class="py-20 md:py-34">
    <div class="container">
      <BreadCrumb class="mb-6"></BreadCrumb>
      <div class="-mx-3 mb-4 flex flex-col items-center gap-y-4 md:flex-row">
        <div
          :class="[
            'flex-grow px-3 transition-[top] duration-500 lg:static lg:w-1/3 lg:translate-x-0 xl:w-1/4',
            { 'fixed left-1/2 z-20 -translate-x-1/2': scrollStatus !== 'top' },
            { 'top-[72px]': scrollStatus === 'up' },
            { 'top-8': scrollStatus === 'down' },
          ]"
        >
          <SearchBox
            :class="[
              'border lg:border-black',
              scrollStatus !== 'top'
                ? 'border-primary bg-transparent text-primary duration-300 focus-within:bg-white focus-within:text-black focus-within:drop-shadow-[0_0_8px_#408560] lg:focus-within:drop-shadow-none'
                : 'border-black',
            ]"
            ref="searchbox"
          ></SearchBox>
        </div>
        <div class="self-end px-3 text-right lg:w-2/3 xl:w-3/4">
          <select
            name="sort"
            id="sort"
            class="cursor-pointer rounded border border-black py-2.5 px-4 focus:outline-none"
            v-model="sortMethod"
          >
            <option value="id">預設排序</option>
            <option value="favorite">人氣排序</option>
            <option value="new">最新排序</option>
            <option value="random">隨機排序</option>
          </select>
        </div>
      </div>
      <div class="-mx-3 flex flex-wrap justify-center">
        <aside class="w-full px-3 lg:w-1/3 xl:w-1/4">
          <ListFilter @filterParameter="filterResult" ref="filter"></ListFilter>
        </aside>
        <LoadingNormal
          class="px-3 lg:w-2/3 xl:w-3/4"
          v-if="loadingShow"
        ></LoadingNormal>
        <section
          class="px-3 lg:w-2/3 xl:w-3/4"
          v-else-if="!loadingShow && hasResult"
        >
          <ul class="-mx-2 mb-8 flex flex-wrap gap-y-4">
            <li
              class="w-1/2 px-2 xl:w-1/3"
              v-for="(item, index) of showList.slice(0, 12 * currentPage)"
              :key="item.name"
            >
              <CardMarked
                :cardInfo="item"
                :delay="(index % 12) * 0.05"
              ></CardMarked>
            </li>
          </ul>
          <div class="text-center" v-show="currentPage < totalPage">
            <a
              href="#"
              class="inline-block border border-black px-6 py-2 duration-300 hover:border-primary-dark hover:bg-primary-dark hover:text-primary-light"
              @click.prevent="currentPage++"
              >載入更多...({{ currentPage }} / {{ totalPage }})</a
            >
          </div>
        </section>
        <div class="px-3 text-center lg:w-2/3 xl:w-3/4" v-else>
          <font-awesome-icon
            icon="fa-regular fa-face-sad-cry"
            class="my-4 text-4xl text-primary-dark md:text-[80px]"
          />
          <h3 class="text-xl font-bold text-primary-dark md:text-3xl">
            沒有符合的搜尋結果，請重新搜尋
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import BreadCrumb from '@/components/BreadCrumbComponent';
import SearchBox from '@/components/SearchBoxComponent';
import ListFilter from '@/components/ListFilterComponent';
import CardMarked from '@/components/CardMarkedComponent';
import LoadingNormal from '@/components/LoadingNormalComponent';
import { ref, onMounted, watch, computed, inject } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router';
import { useStore } from '@/stores/index';
import axios from 'axios';

const loadingShow = ref(true);
const place = ref([]);
const currentPage = ref(1);
const sortMethod = ref('id');
const scrollStatus = inject('scrollStatus');
const route = useRoute();
const store = useStore();
let routeQuery = computed(() => route.query);
const filterParameter = ref({});
const searchbox = ref(null);
const filter = ref(null);

const showList = computed(() => {
  let list = [...place.value];
  if (!route.query.mode) {
    if (store.filterMode === 'keyword') {
      if (Object.entries(filterParameter.value).length > 0) {
        // 清空 filterParameter 並清除篩選區已選擇的項目
        filterResult({});
        filter.value.clearFilter();
      }
      // 關鍵字搜尋
      if (route.query.q) {
        list = place.value.filter((item) =>
          item.name.toLowerCase().includes(route.query.q.toLowerCase())
        );
      } else {
        list = [...place.value];
      }
    } else if (
      store.filterMode === 'filter' &&
      Object.entries(filterParameter.value).length > 0
    ) {
      // 清空 searchbox
      searchbox.value.clearInput();
      // 條件篩選。2 種都沒選就不管，所以不用 else
      if (typeof filterParameter.value.filterArea === 'string') {
        // 下拉選單縣市鄉鎮篩選
        list = place.value.filter((item) =>
          item.county.includes(filterParameter.value.filterArea)
        );
      } else if (filterParameter.value.filterArea.length) {
        // 區域篩選
        list = place.value.filter((item) =>
          filterParameter.value.filterArea.some((ele) =>
            item.county.includes(ele)
          )
        );
      }

      if (filterParameter.value.filterTag.length > 0) {
        if (!filterParameter.value.tagFilterMode) {
          // 一般模式
          list = list.filter((item) =>
            filterParameter.value.filterTag.some(
              (ele) => item.tags.indexOf(ele) > -1
            )
          );
        } else {
          //嚴格模式
          list = list.filter((item) =>
            filterParameter.value.filterTag.every(
              (ele) => item.tags.indexOf(ele) > -1
            )
          );
        }
      }
    }

    switch (sortMethod.value) {
      case 'favorite':
        return list.sort((prev, next) => next.favorite - prev.favorite);
      case 'new':
        return list.sort((prev, next) => next.id - prev.id);
      case 'random':
        return list.sort(() => 0.5 - Math.random());
      default:
        return list;
    }
  } else {
    // footer 連結跳轉處理
    if (route.query.mode === 'area') {
      const area = {
        北部: ['臺北', '新北', '基隆', '桃園', '新竹', '宜蘭'],
        中部: ['苗栗', '臺中', '彰化', '南投', '雲林'],
        南部: ['嘉義', '臺南', '高雄', '屏東'],
        東部: ['花蓮', '臺東'],
        離島: ['連江', '金門', '澎湖'],
      };
      return list.filter((item) =>
        area[route.query.area].some((ele) =>
          item.county.includes(ele)
        )
      );
    } else if (route.query.mode === 'tag') {
      return list.filter(item => item.tags.includes(route.query.tag));
    } else {
      router.replace({ query: null });
      return list;
    }
  }
});

const hasResult = computed(() => showList.value.length > 0);
const totalPage = computed(() => Math.ceil(showList.value.length / 12));

// 接收 filter 傳來的參數或要清空時呼叫
function filterResult(filterObj) {
  filterParameter.value = filterObj;
}

onMounted(() => {
  axios
    .get(`${process.env.VUE_APP_API_PATH}/campingPlace`)
    .then((res) => {
      place.value = res.data;
      loadingShow.value = false;
    })
    .catch((err) => console.error(err));
});

watch(routeQuery, () => {
  currentPage.value = 1;
});
</script>
