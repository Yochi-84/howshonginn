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
            />營地名稱:</label
          >
          <input
            type="text"
            id="name"
            class="w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none"
            placeholder="請輸入營地名稱"
          />
        </li>
        <li>
          <label
            for="phone"
            class="mb-1 block text-lg font-bold text-primary-dark"
            ><font-awesome-icon
              icon="fa-solid fa-phone"
              class="mr-2"
            />聯絡電話:</label
          >
          <input
            type="tel"
            id="phone"
            class="w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none"
            placeholder="請輸入營主的聯絡電話"
          />
        </li>
        <li>
          <label
            for="address"
            class="mb-1 block text-lg font-bold text-primary-dark"
            ><font-awesome-icon
              icon="fa-solid fa-map"
              class="mr-2"
            />地址:</label
          >
          <input
            type="text"
            id="address"
            class="w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none"
            placeholder="請輸入營地所在地址"
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
            />網站:</label
          >
          <input
            type="text"
            id="website"
            class="w-full rounded border border-black py-1 px-4 focus:shadow-around-primary focus:outline-none"
            placeholder="請輸入營地網站"
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
              />所在區域</label
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
            >
              <option value="" disabled selected>--- 海拔高度範圍 ---</option>
              <option value="300m以下">300m以下</option>
              <option value="301~500m">301~500m</option>
              <option value="501~800m">501~800m</option>
              <option value="801~1000m">801~1000m</option>
              <option value="1001~1500m">1001~1500m</option>
              <option value="1501m以上">1501m以上</option>
              <option value="unknown">不清楚</option>
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
          />簡介:</label
        >
        <ckeditor
          :editor="editor"
          :config="editorConfig"
          tag-name="textarea"
          v-model="commentContent"
          placeholder="簡單介紹一下這個營地吧"
        ></ckeditor>
      </div>
    </div>
    <div class="w-full px-4">
      <div class="flex items-center justify-between gap-x-4">
        <label
          for="price"
          class="mb-1 block text-lg font-bold text-primary-dark"
        >
          <font-awesome-icon icon="fa-solid fa-coins" class="mr-2" />區域/價位:
        </label>
        <div class="flex">
          <a
            href="#"
            @click.prevent="addRow"
            class="block -skew-x-6 rounded-l bg-primary px-4 py-1 duration-300 hover:bg-primary-dark hover:text-white"
            ><font-awesome-icon icon="fa-solid fa-plus"
          /></a>
          <a
            href="#"
            @click.prevent="removeRow"
            class="block -skew-x-6 rounded-r bg-danger px-4 py-1 duration-300 hover:bg-danger-dark hover:text-white"
            ><font-awesome-icon icon="fa-solid fa-minus"
          /></a>
        </div>
      </div>
      <div class="flex border-b border-primary-dark py-1 font-bold">
        <span class="basis-1/4 px-1">區域名稱</span>
        <span class="basis-1/12 px-1">帳/區數</span>
        <span class="basis-1/6 px-1">平日</span>
        <span class="basis-1/6 px-1">週末</span>
        <span class="basis-1/6 px-1">連假</span>
        <span class="basis-1/6 px-1">年假</span>
      </div>
      <ul v-if="areaPrice.length">
        <li v-for="area of areaPrice" :key="area.name" class="flex">
          <div class="basis-1/4 p-1">
            <input
              type="text"
              class="w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none"
              v-model="area.name"
            />
          </div>
          <div class="basis-1/12 p-1">
            <input
              type="text"
              class="w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none"
              v-model="area.number"
            />
          </div>
          <div class="basis-1/6 p-1">
            <input
              type="text"
              class="w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none"
              placeholder="單位:元/晚"
              v-model="area.normalPrice"
            />
          </div>
          <div class="basis-1/6 p-1">
            <input
              type="text"
              class="w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none"
              placeholder="單位:元/晚"
              v-model="area.weekendPrice"
            />
          </div>
          <div class="basis-1/6 p-1">
            <input
              type="text"
              class="w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none"
              placeholder="單位:元/晚"
              v-model="area.holidayPrice"
            />
          </div>
          <div class="basis-1/6 p-1">
            <input
              type="text"
              class="w-full rounded border border-black py-1 px-2 focus:shadow-around-primary focus:outline-none"
              placeholder="單位:元/晚"
              v-model="area.newYearPrice"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/zh.js';
import { ref, computed, onMounted, defineComponent } from 'vue';

const ckeditor = defineComponent(CKEditor.component);
const editor = ClassicEditor;
const commentContent = ref('');
const editorConfig = {
  language: 'zh',
  allowedContent: true,
  toolbar: {
    items: ['selectAll', '|', 'bold', 'italic'],
    shouldNotGroupWhenFull: true,
  },
};
const countyCity = ref([]);
const countySelect = ref('');
const townList = computed(
  () => Array.from(countyCity.value)[countySelect.value]?.AreaList
);
const townSelect = ref('');
// 除了 name ，最後記得轉 Number
const areaPrice = ref([]);

function addRow() {
  areaPrice.value.push({
    name: '',
    number: '',
    normalPrice: '',
    weekendPrice: '',
    holidayPrice: '',
    newYearPrice: '',
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
    .then((res) => (countyCity.value = res.data))
    .catch((err) => console.error(err));
});
</script>
<style>
.ck-editor__editable {
  height: 310px;
}

.ck-content p {
  font-size: revert;
}

.ck-content ul,
.ck-content ol {
  list-style: revert;
  margin: revert;
  padding: revert;
}
:root {
  /* Overrides the border radius setting in the theme. */
  --ck-border-radius: 4px;

  /* Overrides the default font size in the theme. */
  --ck-font-size-base: 16px;

  /* Helper variables to avoid duplication in the colors. */
  --ck-custom-background: #e9f4ee;
  --ck-custom-foreground: #e3a864;
  --ck-color-base-border: black;

  /* -- Overrides generic colors. ------------------------------------------------------------- */

  --ck-color-base-foreground: var(--ck-custom-background);
  --ck-color-focus-border: black;
  --ck-color-text: #408560;

  /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

  --ck-color-button-default-background: var(--ck-custom-background);
  --ck-color-button-default-hover-background: #88c6a5;
  --ck-color-button-default-active-background: #d28226;
  --ck-color-button-default-active-shadow: hsl(270, 2%, 23%);

  --ck-color-button-on-background: var(--ck-custom-foreground);
  --ck-color-button-on-hover-background: #d28226;
  --ck-color-button-on-active-background: #d28226;
  --ck-color-button-on-active-shadow: #d28226;
  --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

  /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

  --ck-color-toolbar-background: var(--ck-custom-background);
}
</style>
