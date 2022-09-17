<template>
  <Teleport to="#app">
    <div
      :class="[
        'fixed inset-0 bg-black bg-opacity-60',
        store.mask.status ? 'block' : 'hidden',
        store.mask['z-index'] === 40 ? 'z-40' : 'z-20',
        { 'lg:hidden': store.mask['lg-hidden'] },
      ]"
      id="mask"
    ></div>
  </Teleport>
</template>
<script setup>
import { onMounted } from 'vue';
import { useStore } from '@/stores/index';

const store = useStore();

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries.some((item) => item.isIntersecting)) {
      document
        .querySelector('body')
        .classList.add('overflow-y-hidden', 'max-h-screen');
    } else {
      document.querySelector('#mask').classList.remove('block');
      document.querySelector('#mask').classList.add('hidden');
      document
        .querySelector('body')
        .classList.remove('overflow-y-hidden', 'max-h-screen');
    }
  });

  observer.observe(document.querySelector('#mask'));
});
</script>
