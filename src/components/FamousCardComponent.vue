<template>
  <div class="overflow-hidden rounded shadow-[0_2px_4px_#333]">
    <div class="h-[280px]">
      <img
        :src="cardInfo.image"
        :alt="cardInfo.name"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="p-4 text-center md:px-6 md:text-left">
      <h4 class="mb-2 text-primary md:mb-4 md:text-lg">
        <font-awesome-icon icon="fa-solid fa-location-dot" class="mr-2" />{{
          cardInfo.county
        }}
      </h4>
      <h3 class="text-xl">{{ cardInfo.name }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cardInfo: {
      type: Object,
    },
  },
};
</script>
