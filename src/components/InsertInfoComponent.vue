<template>
  <div class="flex flex-wrap gap-y-4 px-3 xl:px-20">
    <div class="w-full px-4 md:w-1/2">
      <ul class="space-y-4">
        <li>
          <label
            for="name"
            class="mb-1 block text-lg font-bold text-primary-dark"
            ><font-awesome-icon
              icon="fa-solid fa-tent"
              class="mr-2"
            />營地名稱<span class="ml-2 text-base text-danger-dark"
              >*</span
            ></label
          >
          <input
            type="text"
            id="name"
            class="w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none"
            placeholder="請輸入營地名稱"
            v-model.lazy.trim="name"
          />
        </li>
        <li>
          <label
            for="phone"
            class="mb-1 block text-lg font-bold text-primary-dark"
            ><font-awesome-icon
              icon="fa-solid fa-phone"
              class="mr-2"
            />聯絡電話</label
          >
          <input
            type="tel"
            id="phone"
            class="w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none"
            placeholder="請輸入營主的聯絡電話"
            v-model.trim="campingInfo.phone"
          />
        </li>
        <li>
          <label
            for="address"
            class="mb-1 block text-lg font-bold text-primary-dark"
            ><font-awesome-icon icon="fa-solid fa-map" class="mr-2" />地址<span
              class="ml-2 text-base text-danger-dark"
              >*</span
            ></label
          >
          <input
            type="text"
            id="address"
            class="w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none"
            placeholder="請輸入營地所在地址"
            v-model.trim="campingInfo.address"
          />
        </li>
        <li>
          <label
            for="website"
            class="mb-1 block text-lg font-bold text-primary-dark"
          >
            <font-awesome-icon
              icon="fa-solid fa-globe"
              class="mr-2"
            />網站</label
          >
          <input
            type="text"
            id="website"
            class="w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none"
            placeholder="請輸入營地網站"
            v-model.trim="campingInfo.website"
          />
        </li>
        <li class="-mx-3 flex flex-wrap gap-y-4">
          <div class="w-full px-3 xl:w-1/2">
            <label
              for="altitude"
              class="mb-1 block text-lg font-bold text-primary-dark"
              ><font-awesome-icon
                icon="fa-solid fa-location-dot"
                class="mr-2"
              />所在區域<span class="ml-2 text-base text-danger-dark"
                >*</span
              ></label
            >
            <div class="flex gap-x-3">
              <select
                name="county"
                id="county"
                class="flex-grow rounded border border-black bg-white py-1 px-2 text-center focus:shadow-around-primary focus:outline-none"
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
                class="flex-grow rounded border border-black bg-white py-1 px-2 text-center focus:shadow-around-primary focus:outline-none"
                v-model="townSelect"
                :disabled="countySelect === ''"
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
          </div>
          <div class="w-full px-3 xl:w-1/2">
            <label
              for="altitude"
              class="mb-1 block text-lg font-bold text-primary-dark"
              ><font-awesome-icon
                icon="fa-solid fa-mountain-sun"
                class="mr-2"
              />海拔高度</label
            >
            <select
              name="altitude"
              id="altitude"
              class="rounded border border-black py-1 px-2 text-center focus:shadow-around-primary focus:outline-none"
              v-model="campingInfo.height"
            >
              <option value="" disabled selected>--- 海拔高度範圍 ---</option>
              <option value="300m以下">300m以下</option>
              <option value="301~500m">301~500m</option>
              <option value="501~800m">501~800m</option>
              <option value="801~1000m">801~1000m</option>
              <option value="1001~1500m">1001~1500m</option>
              <option value="1501m以上">1501m以上</option>
              <option value="0">不清楚</option>
            </select>
          </div>
        </li>
      </ul>
    </div>
    <div class="w-full px-4 md:w-1/2">
      <div>
        <label
          for="intro"
          class="mb-1 block text-lg font-bold text-primary-dark"
          ><font-awesome-icon
            icon="fa-solid fa-pen-to-square"
            class="mr-2"
          />簡介<span class="ml-2 text-base text-danger-dark">*</span></label
        >
        <textarea
          class="h-[359px] w-full resize-none rounded border border-black p-4 focus:shadow-around-primary focus:outline-none"
          v-model="campingInfo.intro"
          placeholder="簡單介紹一下這個營地吧"
        ></textarea>
      </div>
    </div>
    <div class="w-full px-4">
      <div class="flex items-center justify-between gap-x-4">
        <label
          for="price"
          class="mb-1 block text-lg font-bold text-primary-dark"
        >
          <font-awesome-icon icon="fa-solid fa-coins" class="mr-2" />區域/價位
        </label>
        <div class="flex">
          <button
            @click="addRow"
            class="block -skew-x-6 rounded-l bg-primary px-4 py-1 duration-300 hover:bg-primary-dark hover:text-white"
          >
            <font-awesome-icon icon="fa-solid fa-plus" />
          </button>
          <button
            @click="removeRow"
            class="disabled: block -skew-x-6 rounded-r bg-danger px-4 py-1 duration-300 enabled:hover:bg-danger-dark enabled:hover:text-white"
            :disabled="areaPrice.length <= 0"
          >
            <font-awesome-icon icon="fa-solid fa-minus" />
          </button>
        </div>
      </div>
      <!-- TODO:RWD -->
      <div class="mb-1 flex border-b border-primary-dark py-1 font-bold">
        <span class="flex-grow basis-1/4 px-1">區域名稱</span>
        <span class="basis-1/4 px-1 md:basis-1/8">帳/區數</span>
        <span class="basis-1/12 md:hidden"></span>
        <span class="hidden basis-1/8 px-1 md:block">平日</span>
        <span class="hidden basis-1/8 px-1 md:block">週末</span>
        <span class="hidden basis-1/8 px-1 md:block">連假</span>
        <span class="hidden basis-1/8 px-1 md:block">年假</span>
      </div>
      <transition-group tag="ul" name="move-up">
        <li v-for="area of areaPrice" :key="area" class="flex flex-wrap">
          <div class="flex-grow basis-1/4 p-1">
            <input
              type="text"
              class="w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none"
              v-model.trim="area.name"
              placeholder="Ex: 碎石雨棚區"
            />
          </div>
          <div class="basis-1/4 p-1 md:basis-1/8">
            <input
              type="number"
              class="w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none"
              v-model.number.trim="area.number"
              placeholder="Ex: 5"
            />
          </div>
          <div
            class="flex basis-1/12 items-center justify-center px-1 md:hidden"
          >
            <a
              href="#"
              class="after:absolute after:inset-x-0 after:top-0 after:z-1 after:h-10"
              @click.prevent="area.collapse = !area.collapse"
              ><font-awesome-icon
                icon="fa-solid fa-caret-up"
                :class="['duration-300', { 'rotate-180': area.collapse }]"
            /></a>
          </div>
          <div
            :class="[
              'w-full overflow-hidden bg-primary-dark text-white transition-all duration-300 md:hidden',
              area.collapse ? 'max-h-0' : 'max-h-screen',
            ]"
          >
            <ul class="-mx-4 flex flex-wrap gap-y-2 py-2 px-2 text-center">
              <li class="w-1/2 px-4">
                平日
                <input
                  type="number"
                  class="w-full rounded border border-black py-1 px-2 text-black focus:shadow-around-primary focus:outline-none"
                  placeholder="元/晚"
                  v-model.number.trim="area.normalPrice"
                />
              </li>
              <li class="w-1/2 px-4">
                週末
                <input
                  type="number"
                  class="w-full rounded border border-black py-1 px-2 text-black focus:shadow-around-primary focus:outline-none"
                  placeholder="元/晚"
                  v-model.number.trim="area.weekendPrice"
                />
              </li>
              <li class="w-1/2 px-4">
                <div class="mb-1">連假</div>
                <input
                  type="number"
                  class="w-full rounded border border-black py-1 px-2 text-black focus:shadow-around-primary focus:outline-none"
                  placeholder="元/晚"
                  v-model.number.trim="area.holidayPrice"
                />
              </li>
              <li class="w-1/2 px-4">
                <div class="mb-1">年假</div>
                <input
                  type="number"
                  class="w-full appearance-none rounded border border-black py-1 px-2 text-black focus:shadow-around-primary focus:outline-none"
                  placeholder="元/晚"
                  v-model.trim="area.newYearPrice"
                />
              </li>
            </ul>
          </div>
          <div class="hidden basis-1/8 p-1 md:block">
            <input
              type="number"
              class="w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none"
              placeholder="元/晚"
              v-model.number.trim="area.normalPrice"
            />
          </div>
          <div class="hidden basis-1/8 p-1 md:block">
            <input
              type="number"
              class="w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none"
              placeholder="元/晚"
              v-model.number.trim="area.weekendPrice"
            />
          </div>
          <div class="hidden basis-1/8 p-1 md:block">
            <input
              type="number"
              class="w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none"
              placeholder="元/晚"
              v-model.number.trim="area.holidayPrice"
            />
          </div>
          <div class="hidden basis-1/8 p-1 md:block">
            <input
              type="number"
              class="w-full appearance-none rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none"
              placeholder="元/晚"
              v-model.trim="area.newYearPrice"
            />
          </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref,toRefs, computed, onMounted, onDeactivated } from 'vue';

const props = defineProps({
  existedInfo: {
    type: Object,
    default: () => ({})
  },
});

const emits = defineEmits(['campInfo']);
const {existedInfo} = toRefs(props);
const countyCity = ref([]);
const townList = computed(
  () => Array.from(countyCity.value)[countySelect.value]?.AreaList
);

const areaPrice = ref([]);

// 資料格式重整區
const name = ref('');
const countySelect = ref('');
const townSelect = ref('');
const formatName = computed(() => {
  let tempName = '';
  if (countySelect.value !== '') {
    tempName += countyCity.value[countySelect.value].CityName.slice(0, -1);

    townSelect.value.length > 2
      ? (tempName += townSelect.value.slice(0, -1))
      : (tempName += townSelect.value);

    tempName += ' ';
  }

  tempName += name.value;

  return tempName;
});
const formatCounty = computed(
  () => countyCity.value[countySelect.value]?.CityName + townSelect.value
);
const formatPrice = computed(() => {
  let obj = {};
  areaPrice.value.forEach((item) => (obj[item.name] = item));
  return obj;
});

const campingInfo = ref({
  name: formatName,
  phone: '',
  address: '',
  website: '',
  height: '',
  county: formatCounty,
  intro: '',
  price: formatPrice,
});

function addRow() {
  areaPrice.value.push({
    name: '',
    number: '',
    normalPrice: '',
    weekendPrice: '',
    holidayPrice: '',
    newYearPrice: '',
    collapse: false,
  });
}

function removeRow() {
  areaPrice.value.pop();
}

// 抓取鄉鎮資料
onMounted(() => {
  axios
    .get(
      'https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/CityCountyData.json'
    )
    .then((res) => {
      countyCity.value = res.data;
      getExistedInfo();
    })
    .catch((err) => console.error(err));

  // 編輯時將已存在的資料寫入
  function getExistedInfo() {
    if (Object.keys(existedInfo.value)?.length) {
      name.value = existedInfo.value.name.slice(
        existedInfo.value.name.indexOf(' ') + 1
      );
      campingInfo.value.phone = existedInfo.value.phone;
      campingInfo.value.address = existedInfo.value.address;
      campingInfo.value.website = existedInfo.value.website;
      campingInfo.value.height = existedInfo.value.height;
      campingInfo.value.intro = existedInfo.value.intro;
      areaPrice.value = Object.values(existedInfo.value.price);
      let county = existedInfo.value.county.match(/.{2}[縣市]/g)[0];
      for (let item in countyCity.value) {
        if (countyCity.value[item].CityName === county) {
          countySelect.value = item;
          break;
        }
      }
      townSelect.value = existedInfo.value.county.replace(county, '');
    }
  }
});

// 離開元件時將資料傳給父層
onDeactivated(() => {
  emits('campInfo', campingInfo.value);
});
</script>
<style scoped>
.move-up-enter-from,
.move-up-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.move-up-leave-active,
.move-up-enter-active {
  transition: 0.5s ease-in-out;
}
</style>
