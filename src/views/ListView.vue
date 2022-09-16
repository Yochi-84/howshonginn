<template>
  <main class="py-20 md:py-34">
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
            <option value="random">隨機排序</option>
          </select>
        </div>
      </div>
      <div class="-mx-3 flex flex-wrap justify-center">
        <aside class="w-full px-3 lg:w-1/3 xl:w-1/4">
          <Filter @filterParameter="filterResult" ref="filter"></Filter>
        </aside>
        <Loading class="px-3 lg:w-2/3 xl:w-3/4" v-if="loadingShow"></Loading>
        <section
          class="px-3 lg:w-2/3 xl:w-3/4"
          v-else-if="!loadingShow && hasResult"
        >
          <ul class="-mx-2 mb-8 flex flex-wrap gap-y-4">
            <li
              class="w-full px-2 md:w-1/2 xl:w-1/3"
              v-for="(item, index) of showList.slice(0, 12 * currentPage)"
              :key="item.name"
            >
              <CampingCard
                :cardInfo="item"
                :delay="(index % 12) * 0.05"
              ></CampingCard>
            </li>
          </ul>
          <div class="text-center" v-show="currentPage < totalPage">
            <a
              href="#"
              class="inline-block border border-black px-6 py-2 duration-300 hover:border-primary-dark hover:bg-primary-dark hover:text-primary-light"
              @click.prevent="currentPage++"
              >載入更多...</a
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
  </main>
</template>
<script setup>
import BreadCrumb from '@/components/BreadCrumbComponent';
import SearchBox from '@/components/SearchBoxComponent';
import Filter from '@/components/FilterComponent';
import CampingCard from '@/components/CampingCardComponent';
import Loading from '@/components/LoadingComponent';
import { ref, onMounted, watch, computed, inject } from 'vue';
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
    // 條件篩選
    if (typeof filterParameter.value.filterArea === 'string') {
      // 下拉選單縣市鄉鎮篩選
      list = place.value.filter((item) =>
        item.county.includes(filterParameter.value.filterArea)
      );
    } else {
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
    case 'random':
      return list.sort(() => 0.5 - Math.random());
    default:
      return list;
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
