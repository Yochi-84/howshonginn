<template>
  <div
    class="relative h-full cursor-pointer overflow-hidden rounded shadow-[0_2px_4px_#333]"
    @click="router.push({ path: '/info', query: { id: cardInfo.id } })"
  >
    <div class="h-72 overflow-hidden">
      <img
        :src="
          cardInfo.image[0].includes('imgur.com')
            ? cardInfo.image[0]
            : require('../assets/image/' + cardInfo.image[0])
        "
        :alt="cardInfo.name"
        class="h-full w-full object-cover object-bottom"
      />
    </div>
    <div class="p-4 text-center md:px-6 md:text-left">
      <h4 class="mb-2 text-primary-dark md:mb-3">
        <font-awesome-icon icon="fa-solid fa-location-dot" class="mr-2" />{{
          cardInfo.county
        }}
      </h4>
      <h3 class="text-lg">{{ name }}</h3>
    </div>
  </div>
</template>
<script setup>
import { computed, toRef } from 'vue';
import router from '@/router';
const props = defineProps({ cardInfo: Object });
const cardInfo = toRef(props, 'cardInfo');

const name = computed(() =>
  cardInfo.value.name.slice(cardInfo.value.name.indexOf(' ') + 1)
);
</script>
