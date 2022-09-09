<template>
  <div class="overflow-hidden rounded shadow-[0_2px_4px_#333]">
    <div class="h-[280px]">
      <img
        :src="props.cardInfo.image"
        :alt="props.cardInfo.name"
        class="h-full w-full object-cover object-bottom"
      />
    </div>
    <div class="p-4 text-center md:px-6 md:text-left">
      <h4 class="mb-2 text-primary-dark md:mb-3 md:text-lg">
        <font-awesome-icon icon="fa-solid fa-location-dot" class="mr-2" />{{
          props.cardInfo.county
        }}
      </h4>
      <h3 class="text-xl">{{ cardInfo.name }}</h3>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ cardInfo: Object });
</script>
