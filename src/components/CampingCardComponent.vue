<template>
  <div
    class="relative h-full overflow-hidden rounded ring-1 ring-content-light"
  >
    <div class="h-[280px]">
      <img
        :src="require('../assets/image/' + props.cardInfo.image[0])"
        :alt="name"
        :onerror="require('../assets/image/error_pic.jpg')"
        class="h-full w-full object-cover object-bottom"
      />
      <div
        :class="[
          'text-0 absolute right-9 top-6 z-10 flex h-8 w-[160px] origin-center translate-x-1/2 rotate-45 select-none items-center justify-center border-t border-b border-double border-white text-sm tracking-[8px] text-white',
          'bg-' + mark.color,
        ]"
      >
        {{ mark.title }}
      </div>
    </div>
    <div class="bg-white p-4 text-center md:px-6 md:text-left">
      <h4 class="mb-2 text-primary md:mb-3">
        <font-awesome-icon icon="fa-solid fa-location-dot" class="mr-2" />{{
          props.cardInfo.county
        }}
      </h4>
      <h3
        class="overflow-hidden text-ellipsis whitespace-nowrap text-lg tracking-wide"
        :title="name"
      >
        <router-link :to="'/info?id=' + cardInfo.id">{{ name }}</router-link>
      </h3>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  cardInfo: Object,
});

const name = computed(() =>
  props.cardInfo.name.slice(props.cardInfo.name.indexOf(" ") + 1)
);

const mark = computed(() => {
  if (props.cardInfo.want > 500) {
    return { color: "danger", title: "熱門" };
  } else if (props.cardInfo.tags.length > 6) {
    return { color: "orange-600", title: "超多特色" };
  } else {
    return { color: "primary", title: "最近新增" };
  }
});
</script>
