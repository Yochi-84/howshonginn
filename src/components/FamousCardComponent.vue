<template>
  <div class="relative h-full overflow-hidden rounded shadow-[0_2px_4px_#333]">
    <div class="h-[280px]">
      <img
        :src="require('../assets/image/' + props.cardInfo.image[0])"
        :alt="props.cardInfo.name"
        class="h-full w-full object-cover object-bottom"
      />
    </div>
    <div class="p-4 text-center md:px-6 md:text-left">
      <h4 class="mb-2 text-primary-dark md:mb-3">
        <font-awesome-icon icon="fa-solid fa-location-dot" class="mr-2" />{{
          props.cardInfo.county
        }}
      </h4>
      <h3 class="text-lg">{{ name }}</h3>
    </div>
    <router-link
      :to="'/info?id=' + props.cardInfo.id"
      class="after:absolute after:inset-0"
    />
  </div>
</template>
<script setup>
import { computed } from 'vue';
const props = defineProps({ cardInfo: Object });

const name = computed(() =>
  props.cardInfo.name.slice(props.cardInfo.name.indexOf(' ') + 1)
);
</script>
