<template>
  <!-- 手機版篩選鈕 -->
  <label
    for="filterController"
    :class="[
      'fixed right-4 z-10 flex h-12 w-12 cursor-pointer select-none items-center justify-center rounded-full border border-primary-dark bg-gray-300 duration-500 lg:hidden',
      scrollStatus === 'top' ? 'bottom-4' : 'bottom-[4.5rem]',
    ]"
    ><font-awesome-icon icon="fa-solid fa-filter" class="text-primary-dark"
  /></label>
  <input
    type="checkbox"
    id="filterController"
    class="peer hidden"
    v-model="filterStatus"
  />
  <!-- Filter Bar -->
  <div
    class="fixed top-1/2 left-1/2 z-50 hidden max-h-[95vh] min-w-[80%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border border-primary-dark bg-white peer-checked:block lg:static lg:z-0 lg:block lg:max-h-max lg:translate-x-0 lg:translate-y-0"
  >
    <h2
      class="border-b border-b-primary-dark py-2 pb-2 text-center text-xl font-bold text-primary-dark"
    >
      <font-awesome-icon icon="fa-solid fa-filter" class="mr-2" />條件篩選
    </h2>
    <span
      class="absolute right-3 top-3 cursor-pointer lg:hidden"
      @click="filterStatus = false"
      ><font-awesome-icon icon="fa-solid fa-xmark"
    /></span>
    <div
      class="max-h-[calc(95vh-111px)] overflow-y-auto overflow-x-hidden px-4 py-6 lg:max-h-max"
    >
      <div class="mb-4 border-b border-b-primary-dark pb-4">
        <h3 class="mb-4 border-l-4 border-l-primary-dark pl-2 text-lg">縣市</h3>
        <div class="mb-3 flex gap-x-2">
          <select
            name="county"
            id="county"
            class="flex-grow rounded border border-black bg-white py-1 text-center focus:outline-primary-dark"
            v-model="filterItem.countySelect"
          >
            <option value="" selected disabled>--- 縣市 ---</option>
            <option
              :value="index"
              v-for="(county, index) of countyCity"
              :key="county.CityName"
            >
              {{ county.CityName }}
            </option>
          </select>
          <select
            name="town"
            id="town"
            class="flex-grow rounded border border-black bg-white py-1 text-center focus:outline-primary-dark"
            ref="town"
            v-model="filterItem.townSelect"
            :disabled="filterItem.countySelect === ''"
          >
            <option value="" selected disabled>--- 鄉鎮區 ---</option>
            <option
              :value="town.AreaName"
              v-for="town of townList"
              :key="town.AreaName"
            >
              {{ town.AreaName }}
            </option>
          </select>
        </div>
        <span class="mb-3 block text-center text-primary-dark">或者</span>
        <h3 class="mb-4 border-l-4 border-l-primary-dark pl-2 text-lg">地區</h3>
        <ul class="-mx-1 flex flex-wrap gap-y-2">
          <li
            class="w-1/2 px-1"
            v-for="area of filterItem.areaList"
            :key="area.area"
          >
            <a
              href="#"
              :class="[
                'block rounded-lg border py-1 text-center duration-300 hover:border-primary hover:bg-primary hover:text-white',
                area.selected
                  ? 'border-primary-dark bg-primary-dark text-white'
                  : 'border-black',
              ]"
              @click.prevent="areaSelect(area)"
              >{{ area.area }}</a
            >
          </li>
        </ul>
      </div>
      <div>
        <div class="mb-4 flex items-center justify-between">
          <h3 class="border-l-4 border-l-primary-dark pl-2 text-lg">標籤</h3>
          <div class="flex items-center">
            <input
              type="checkbox"
              class="peer hidden"
              id="modeSwitcher"
              v-model="filterItem.tagFilterMode"
            />
            <label
              for="modeSwitcher"
              class="mr-2 inline-block h-5 w-10 cursor-pointer rounded-huge bg-primary-light shadow-inner shadow-primary-dark ring-1 ring-primary duration-300 peer-checked:bg-secondary-light peer-checked:shadow-secondary-dark peer-checked:ring-secondary"
            >
              <span
                :class="[
                  'inline-block h-5 w-5 rounded-full duration-300',
                  filterItem.tagFilterMode
                    ? 'ml-5 bg-secondary-dark'
                    : 'bg-primary-dark',
                ]"
              ></span>
            </label>
            <!-- 點擊不做動作，只是要 stopPropagation 而已 -->
            <label
              class="relative flex h-4 w-4 cursor-pointer select-none items-center justify-center rounded-full bg-gray-200 text-sm text-gray-600 ring-1 ring-black"
              for="filterModeDirection"
              @click.stop=""
            >
              <font-awesome-icon icon="fa-solid fa-question" />
              <input
                type="checkbox"
                id="filterModeDirection"
                class="peer hidden"
                v-model="filterModeDirection"
              />
              <div
                class="invisible absolute right-0 -bottom-2 z-1 w-[220px] translate-y-full rounded-lg border border-primary-dark bg-primary-light p-2 text-base opacity-0 shadow duration-300 peer-checked:visible peer-checked:opacity-100 md:p-4"
              >
                <p class="mb-4 text-primary-dark">
                  一般模式：只需符合任意一個選擇標籤。
                </p>
                <p class="text-secondary-dark">
                  嚴格模式：須符合所有選擇標籤。
                </p>
              </div>
            </label>
          </div>
        </div>
        <ul class="flex flex-wrap gap-x-2 gap-y-2">
          <li v-for="tags of filterItem.tagList" :key="tags.tag">
            <a
              href="#"
              :class="[
                'block rounded-xl border py-px px-2  hover:border-primary hover:bg-primary hover:text-white',
                tags.selected
                  ? 'border-primary-dark bg-primary-dark text-white'
                  : 'border-content text-content',
              ]"
              @click.prevent="tags.selected = !tags.selected"
              >#{{ tags.tag }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="-mx-1 flex justify-between border-t border-t-primary-dark p-4">
      <div class="w-1/2 px-1">
        <a
          href="#"
          class="btn btn-danger w-full text-center"
          @click.prevent="clearFilter"
          >重置</a
        >
      </div>
      <div class="w-1/2 px-1">
        <a
          href="#"
          class="btn btn-primary w-full text-center"
          @click.prevent="filterSubmit"
          >確認</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch, computed, inject } from 'vue';
import { useStore } from '@/stores/index';
import axios from 'axios';

const emits = defineEmits(['filterParameter']);
const store = useStore();
const countyCity = ref({}); //全台區域資料
const filterStatus = ref(false); //filter 是否顯示
const filterModeDirection = ref(false); // 標籤篩選模式說明是否顯示
const scrollStatus = inject('scrollStatus');
const filterItem = ref({
  countySelect: '', //縣市選擇項目
  townSelect: '', //鄉鎮選擇項目
  areaList: [
    {
      area: '北部',
      selected: false,
    },
    {
      area: '中部',
      selected: false,
    },
    {
      area: '南部',
      selected: false,
    },
    {
      area: '東部',
      selected: false,
    },
    {
      area: '離島',
      selected: false,
    },
  ],
  tagList: [
    {
      tag: '有夜景',
      selected: false,
    },
    {
      tag: '裝備出租',
      selected: false,
    },
    {
      tag: '有雨棚',
      selected: false,
    },
    {
      tag: '小包區',
      selected: false,
    },
    {
      tag: '少帳包場',
      selected: false,
    },
    {
      tag: '近溪流',
      selected: false,
    },
    {
      tag: '有雲海',
      selected: false,
    },
    {
      tag: '免裝備露營',
      selected: false,
    },
    {
      tag: '有遊戲設施',
      selected: false,
    },
    {
      tag: '螢火蟲季',
      selected: false,
    },
    {
      tag: '團露大草皮',
      selected: false,
    },
    {
      tag: '可停露營車',
      selected: false,
    },
  ],
  tagFilterMode: false, //標籤篩選模式，false 為一般模式
});
// 暴露方法讓父元件可以呼叫
defineExpose({
  clearFilter,
});

function filterSubmit() {
  store.toggleFilterMode('filter');
  let filterParameter = {};
  if (filterItem.value.countySelect !== '') {
    let filterArea = countyCity.value[filterItem.value.countySelect].CityName;
    filterItem.value.townSelect !== ''
      ? (filterArea += filterItem.value.townSelect)
      : null;

    filterParameter.filterArea = filterArea;
  } else {
    const area = {
      北部: ['台北', '新北', '基隆', '桃園', '新竹', '宜蘭'],
      中部: ['苗栗', '台中', '彰化', '南投', '雲林'],
      南部: ['嘉義', '台南', '高雄', '屏東'],
      東部: ['花蓮', '台東'],
      離島: ['連江', '金門', '澎湖'],
    };

    // 篩選出所選區域的縣市
    filterParameter.filterArea = filterItem.value.areaList.reduce(
      (acc, cur) => {
        if (cur.selected) {
          return [...acc, ...area[cur.area]];
        } else {
          return acc;
        }
      },
      []
    );
  }

  let filterTag = [];
  filterItem.value.tagList.forEach((item) => {
    if (item.selected) filterTag.push(item.tag);
  });
  filterParameter.filterTag = filterTag;
  filterParameter.tagFilterMode = filterItem.value.tagFilterMode;
  emits('filterParameter', filterParameter);
  filterStatus.value = false;
}

// 選擇區域則清空下拉式選單
function areaSelect(area) {
  if (filterItem.value.countySelect !== '') filterItem.value.countySelect = '';
  area.selected = !area.selected;
}

function clearFilter() {
  filterItem.value.countySelect = '';
  for (let item of filterItem.value.areaList) {
    item.selected = false;
  }
  for (let item of filterItem.value.tagList) {
    item.selected = false;
  }
}

// 縣市下拉選單
const townList = computed(
  () => Array.from(countyCity.value)[filterItem.value.countySelect]?.AreaList
);

// 監聽全部用 deep，只監聽其中一樣先 computed
const countySelect = computed(() => filterItem.value.countySelect);
watch(countySelect, (newV) => {
  // 清空時為 ""(string)，選擇時為 number
  if (typeof newV !== 'string') {
    for (let item of filterItem.value.areaList) {
      item.selected = false;
    }
  }
  filterItem.value.townSelect = '';
});

// 點擊區域外關閉
watch(filterModeDirection, (newV) => {
  if (newV) {
    document.body.addEventListener('click', closeDirection);
  } else {
    document.body.removeEventListener('click', closeDirection);
  }
});

// 遮罩
watch(filterStatus, (newV) => {
  store.toggleMask(newV, true, true);
});

// 不能寫在 watch 裡面，每次 watch 執行會重新宣告一次 function，會被判定跟上次執行是不同函式，removeEventListener 會失敗
function closeDirection() {
  filterModeDirection.value = false;
}

// 抓取鄉鎮資料
onMounted(() => {
  axios
    .get(
      'https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/CityCountyData.json'
    )
    .then((res) => (countyCity.value = res.data))
    .catch((err) => console.error(err));
});
</script>
