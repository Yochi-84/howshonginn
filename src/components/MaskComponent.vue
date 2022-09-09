<template>
  <div
    :class="[
      'fixed inset-0 bg-black bg-opacity-60',
      props.show.status ? 'block' : 'hidden',
      props.show['z-index'] === 40 ? 'z-40' : 'z-20',
      { 'lg:hidden': props.show['lg-hidden'] },
    ]"
    id="mask"
  ></div>
</template>
<script setup>
import { onMounted } from "vue";

const props = defineProps({
  show: {
    type: Object,
    default: () => {
      return {
        status: false,
        "z-index": 20,
        "lg-hidden": false,
      };
    },
  },
});

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries.some((item) => item.isIntersecting)) {
      document
        .querySelector("body")
        .classList.add("overflow-y-hidden", "max-h-screen");
    } else {
      document.querySelector("#mask").classList.remove("block");
      document.querySelector("#mask").classList.add("hidden");
      document
        .querySelector("body")
        .classList.remove("overflow-y-hidden", "max-h-screen");
    }
  });

  observer.observe(document.querySelector("#mask"));
});
</script>
