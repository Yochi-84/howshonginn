<template>
  <Transition appear>
    <div
      class="backface-hidden group relative h-full cursor-pointer overflow-hidden rounded shadow-[1px_1px_0_1px_#777] ring-1 ring-content-light duration-300 after:absolute after:bottom-0 after:z-1 after:h-full after:w-1/4 after:skew-x-[35deg] after:bg-gradient-to-l after:from-white/[0.1] after:via-white/[0.4] after:to-white/[0.1] after:opacity-0 hover:after:animate-twinkle hover:after:opacity-40"
    >
      <a
        href="#"
        @click.prevent.stop="store.toggleFavorite(cardInfo.id)"
        class="absolute left-4 top-4 text-2xl text-danger-dark md:text-xl"
      >
        <font-awesome-icon
          :icon="[
            store.userInfo.status &&
            store.userInfo.favorite.indexOf(cardInfo.id) > -1
              ? 'fa-solid'
              : 'fa-regular',
            'fa-heart',
          ]"
          class="duration-300 hover:scale-125"
      /></a>
      <div class="h-[280px] overflow-hidden">
        <img
          :src="require('../assets/image/' + props.cardInfo.image[0])"
          :alt="name"
          :onerror="require('../assets/image/error_pic.jpg')"
          class="h-full w-full object-cover object-bottom"
        />
        <div
          :class="[
            'absolute right-9 top-6 z-5 flex h-8 w-[160px] origin-center translate-x-1/2 rotate-45 select-none items-center justify-center border-t-2 border-b-2 border-white text-sm tracking-[8px] text-white',
            'bg-' + mark.color,
          ]"
        >
          {{ mark.title }}
        </div>
      </div>
      <div class="bg-white p-4 text-center md:px-6 md:text-left">
        <h4 class="mb-2 text-primary-dark md:mb-3">
          <font-awesome-icon icon="fa-solid fa-location-dot" class="mr-2" />{{
            props.cardInfo.county
          }}
        </h4>
        <h3
          class="overflow-hidden text-ellipsis whitespace-nowrap text-lg tracking-wide"
          :title="name"
        >
          {{ name }}
        </h3>
      </div>
      <router-link :to="'/info?id=' + cardInfo.id" target="_blank" class="absolute inset-0" />
    </div>
  </Transition>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from '@/stores/index';

const store = useStore();
const props = defineProps({
  cardInfo: Object,
  delay: {
    type: Number,
    default: 1,
  },
});

const name = computed(() =>
  props.cardInfo.name.slice(props.cardInfo.name.indexOf(' ') + 1)
);

const mark = computed(() => {
  if (props.cardInfo.favorite > 500) {
    return { color: 'danger-dark', title: '熱門' };
  } else if (props.cardInfo.tags.length > 6) {
    return { color: 'sky-600', title: '超多特色' };
  } else {
    return { color: 'secondary-dark', title: '最近新增' };
  }
});

const transitionDelay = computed(() => props.delay + 's');
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: transform 0.5s v-bind('transitionDelay') ease;
}

.v-enter-from,
.v-leave-to {
  transform: rotateY(180deg);
}
</style>
