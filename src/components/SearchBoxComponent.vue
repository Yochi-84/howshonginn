<template>
  <div class="relative rounded bg-white">
    <input
      type="text"
      placeholder="請輸入關鍵字搜尋"
      :class="[
        'bg-transparent py-3 pl-2 pr-8  md:pr-12 text-base focus:outline-none md:pl-4 lg:placeholder:text-content-light w-full',
      ]"
      v-model="keyword"
      @keydown.enter.exact="search"
    />
    <a
      href="#"
      class="absolute block cursor-pointer text-content-light duration-300 hover:text-primary-dark px-2 md:px-4 py-3 right-0 top-0"
      @click.prevent="search"
      ><font-awesome-icon icon="fa-solid fa-search"
    /></a>
  </div>
</template>
<script setup>
import { ref,computed } from 'vue';
import router from '@/router';
import { useStore } from '@/stores/index';

const store = useStore();
const keyword = ref('');
defineExpose({
  clearInput
})

const formatKeyword = computed(() => keyword.value.replaceAll("台","臺"))
function search() {
  store.toggleFilterMode('keyword');
  router.push({
    name: 'list',
    query: {
      q: formatKeyword.value,
    },
  });
}

function clearInput() {
  keyword.value = "";
}
</script>
