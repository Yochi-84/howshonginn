<template>
  <span
    :class="[
      'fixed right-4 bottom-4 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-orange-500 bg-orange-500 font-mono font-bold text-white duration-300 hover:bg-orange-600',
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
  let speed =
    document.documentElement.scrollTop / 80 > 50
      ? document.documentElement.scrollTop / 80
      : 50;
  const checkPosition = setInterval(() => {
    if (document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -speed);
    } else {
      clearInterval(checkPosition);
    }
  }, 10);
}
</script>
