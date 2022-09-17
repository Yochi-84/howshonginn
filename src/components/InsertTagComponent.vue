<template>
  <section class="px-3 xl:px-24" v-if="!loadingStatus">
    <!-- TODO: 新增標籤??? -->
    <div
      v-for="(block, b_index) of Object.entries(tags)"
      :key="block[0]"
      class="mb-6"
    >
      <h3
        class="mb-4 border-l-4 border-l-primary-dark pl-4 text-xl font-bold lg:text-2xl"
      >
        {{ block[0] }}
      </h3>
      <ul class="flex flex-wrap items-center gap-x-4 gap-y-4 lg:gap-x-6">
        <li v-for="(item, i_index) of block[1]" :key="item">
          <input
            type="checkbox"
            :id="'block' + b_index + '_item' + i_index"
            v-model="item.checked"
            class="mr-2 accent-primary-dark focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
          />
          <label :for="'block' + b_index + '_item' + i_index">{{
            item.tag
          }}</label>
        </li>
      </ul>
    </div>
  </section>
  <Loading v-else></Loading>
</template>
<script setup>
import axios from 'axios';
import Loading from '@/components/LoadingComponent';
import { ref, onDeactivated, onMounted } from 'vue';

const emits = defineEmits(['campTags']);
const tags = ref({});
const loadingStatus = ref(true);

onMounted(() => {
  axios
    .get(`${process.env.VUE_APP_API_PATH}/tags`)
    .then((res) => {
      let temp = {};
      Object.entries(res.data[0]).forEach((item) => {
        temp[item[0]] = item[1].map((ele) => {
          return {
            tag: ele,
            checked: false,
          };
        });
      });
      tags.value = temp;
      loadingStatus.value = false;
    })
    .catch((err) => console.error(err));
});

// 離開元件時將資料傳給父層
onDeactivated(() => {
  let checkedList = Object.values(tags.value)
      .reduce((acc, cur) => [...acc, ...cur], [])
      .filter((item) => item.checked)
      .map((ele) => ele.tag);
    emits('campTags', checkedList);
})
</script>
