<template>
  <!-- 手機版篩選鈕 -->
  <label
    for="filterController"
    class="fixed bottom-4 right-4 z-40 flex h-12 w-12 cursor-pointer select-none items-center justify-center rounded-full border border-primary bg-gray-300 lg:hidden"
    ><font-awesome-icon icon="fa-solid fa-filter" class="text-primary"
  /></label>
  <input
    type="checkbox"
    id="filterController"
    class="peer hidden"
    v-model="filterStatus"
  />
  <!-- Filter Bar -->
  <div
    class="fixed top-1/2 left-1/2 z-50 hidden max-h-[95vh] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border border-primary bg-white peer-checked:block lg:static lg:z-0 lg:block lg:max-h-max lg:translate-x-0 lg:translate-y-0"
  >
    <h2
      class="border-b border-b-primary py-2 pb-2 text-center text-xl font-bold text-primary"
    >
      <font-awesome-icon icon="fa-solid fa-filter" class="mr-2" />條件篩選
    </h2>
    <span
      class="absolute right-3 top-3 cursor-pointer lg:hidden"
      @click="filterStatus = false"
      ><font-awesome-icon icon="fa-solid fa-xmark"
    /></span>
    <div class="max-h-[calc(95vh-97px)] overflow-y-auto px-4 py-6 lg:max-h-max">
      <div class="mb-4 border-b border-b-primary pb-4">
        <h3 class="mb-4 border-l-4 border-l-primary pl-2 text-lg">搜尋</h3>
        <SearchBox class="border border-black"></SearchBox>
      </div>
      <div class="mb-4 border-b border-b-primary pb-4">
        <h3 class="mb-4 border-l-4 border-l-primary pl-2 text-lg">縣市</h3>
        <div class="mb-3 flex gap-x-2">
          <select
            name="county"
            id="county"
            class="flex-grow rounded border border-black py-1 text-center focus:outline-primary"
            v-model="countySelect"
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
            class="flex-grow rounded border border-black py-1 text-center focus:outline-primary"
            ref="town"
            disabled
          >
            <option value="" selected disabled>--- 鄉鎮 ---</option>
            <option
              :value="town.AreaEngName"
              v-for="town of townList"
              :key="town.AreaName"
            >
              {{ town.AreaName }}
            </option>
          </select>
        </div>
        <span class="mb-3 block text-center text-primary">或者</span>
        <h3 class="mb-4 border-l-4 border-l-primary pl-2 text-lg">地區</h3>
        <ul class="-mx-1 flex flex-wrap gap-y-2">
          <li class="w-1/2 px-1" v-for="area of areaList" :key="area.area">
            <a
              href="#"
              :class="[
                'block rounded-lg border py-1 text-center duration-300 hover:border-black hover:bg-black hover:text-white ',
                area.selected
                  ? 'border-primary bg-primary text-white'
                  : 'border-black',
              ]"
              @click.prevent="area.selected = !area.selected"
              >{{ area.area }}</a
            >
          </li>
        </ul>
      </div>
      <div>
        <h3 class="mb-4 border-l-4 border-l-primary pl-2 text-lg">標籤</h3>
        <ul class="flex flex-wrap gap-x-2 gap-y-2">
          <li v-for="tags of tagList" :key="tags.tag">
            <a
              href="#"
              :class="[
                'block rounded-xl border py-px px-2 text-content hover:border-black hover:bg-black hover:text-white',
                tags.selected
                  ? 'border-primary bg-primary text-white'
                  : 'border-content',
              ]"
              @click.prevent="tags.selected = !tags.selected"
              >#{{ tags.tag }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <a
      href="#"
      class="btn btn-fluid btn-primary w-full lg:hidden"
      @click.prevent="filterSubmit"
      >確認篩選</a
    >
  </div>
</template>
<script>
import SearchBox from "@/components/SearchBoxComponent";
import { onMounted, ref, watch, computed } from "vue";
import axios from "axios";
export default {
  components: {
    SearchBox,
  },
  emits: ["showMask"],
  setup(props, { emit }) {
    const countyCity = ref({});
    const countySelect = ref("");
    const town = ref(null);
    const filterStatus = ref(false);
    // const area = {
    //   北部: [],
    // };
    const areaList = ref([
      {
        area: "北部",
        selected: false,
      },
      {
        area: "中部",
        selected: false,
      },
      {
        area: "南部",
        selected: false,
      },
      {
        area: "東部",
        selected: false,
      },
      {
        area: "離島",
        selected: false,
      },
    ]);

    const tagList = ref([
      {
        tag: "賞花",
        selected: false,
      },
      {
        tag: "寵物友善",
        selected: false,
      },
      {
        tag: "有雨棚",
        selected: false,
      },
      {
        tag: "少帳包區",
        selected: false,
      },
      {
        tag: "近市區",
        selected: false,
      },
      {
        tag: "五星級衛浴",
        selected: false,
      },
      {
        tag: "網路暢通",
        selected: false,
      },
      {
        tag: "大草皮",
        selected: false,
      },
      {
        tag: "高海拔",
        selected: false,
      },
      {
        tag: "百萬夜景",
        selected: false,
      },
      {
        tag: "狩獵帳",
        selected: false,
      },
      {
        tag: "免裝備",
        selected: false,
      },
    ]);

    function filterSubmit() {
      filterStatus.value = false;
    }

    // 抓取鄉鎮資料
    onMounted(() => {
      axios
        .get(
          "https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/CityCountyData.json"
        )
        .then((res) => (countyCity.value = res.data))
        .catch((err) => console.log(err));
    });

    // 縣市下拉選單
    const townList = computed(
      () => Array.from(countyCity.value)[countySelect.value]?.AreaList
    );

    watch(countySelect, (newV) => {
      if (newV) {
        town.value.disabled = false;
        town.value.value = "";
      }
    });

    watch(filterStatus, (newV) => {
      emit("showMask", newV);
    });

    return {
      countyCity,
      countySelect,
      areaList,
      tagList,
      town,
      townList,
      filterStatus,
      filterSubmit,
    };
  },
};
</script>
