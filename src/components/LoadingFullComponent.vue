<template>
  <Teleport to="#app">
    <div
      class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-y-20"
      id="loading_full"
    >
      <div
        class="fixed inset-0 z-1 bg-primary-light"
        :style="'opacity:' + props.bgOpacity"
      ></div>
      <img
        src="../assets/image/logo_primary.svg"
        width="250"
        height="250"
        class="z-5"
        alt="LOADING ICON"
      />
      <ul
        class="z-5 flex w-[232px] origin-left -translate-y-20 translate-x-1/2 rotate-45 items-end gap-x-6"
      >
        <li
          v-for="step of footprint"
          :key="step"
          class="odd:translate-y-4 even:-translate-y-4 even:-scale-y-100"
        >
          <img
            src="../assets/image/footprint.svg"
            width="40"
            height="30"
            alt="Footprint"
          />
        </li>
      </ul>
      <slot name="title"></slot>
    </div>
  </Teleport>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  bgOpacity: {
    type: Number,
    default: 1,
    validator: (value) => value <= 1 && value >= 0,
  },
});

const footprint = ref(1);
const timer = ref(null);

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

  observer.observe(document.querySelector('#loading_full'));

  timer.value = window.setInterval(() => {
    footprint.value = ((footprint.value + 4) % 4) + 1;
  }, 500);
});

onUnmounted(() => {
  window.clearInterval(timer.value);
});
</script>

