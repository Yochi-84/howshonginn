<template>
  <div class="py-20 md:py-34">
    <div class="container">
      <BreadCrumb class="mb-6"></BreadCrumb>
      <ul
        class="-mx-2 flex flex-row flex-wrap items-center gap-y-4 md:gap-y-6 md:-mx-3"
      >
        <li
          v-for="(item, index) of info"
          :key="item.id"
          class="w-1/2 px-2 md:w-1/3 md:px-3 lg:w-1/4"
        >
          <CardMarked
            :cardInfo="item"
            :delay="(index % 12) * 0.05"
          ></CardMarked>
        </li>
      </ul>
      <Loading v-if="loadingStatus"></Loading>
    </div>
  </div>
</template>
<script setup>
import BreadCrumb from '@/components/BreadCrumbComponent';
import CardMarked from '@/components/CardMarkedComponent';
import Loading from '@/components/LoadingComponent';
import { ref, onMounted } from 'vue';
import { useStore } from '@/stores/index';
import axios from 'axios';

const store = useStore();
const info = ref();
const loadingStatus = ref(false);

onMounted(() => {
  loadingStatus.value = true;
  const list = store.userInfo.favorite.join('&id=');
  axios
    .get(`${process.env.VUE_APP_API_PATH}/campingPlace?id=${list}`)
    .then((res) => {
      info.value = res.data;
      loadingStatus.value = false;
    })
    .catch(() => console.error('API 好像掛了，真是抱歉!!'));
});
</script>
