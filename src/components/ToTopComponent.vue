<template>
  <span
    :class="[
      'fixed right-4 bottom-4 z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-orange-500 bg-orange-500 font-mono font-bold text-white duration-300 hover:bg-orange-600',
      scrollStatus !== 'top' ? 'opacity-100' : 'invisible opacity-0',
    ]"
    @click="toTop"
  >
    Top
  </span>
</template>
<script setup>
import { inject } from "vue";
const scrollStatus = inject("scrollStatus");
function toTop() {
  const checkPosition = setInterval(() => {
    if (document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -50);
    } else {
      clearInterval(checkPosition);
    }
  }, 10);
}
</script>
