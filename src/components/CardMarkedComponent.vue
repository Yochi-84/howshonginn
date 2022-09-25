<template>
  <Transition appear>
    <div
      class="backface-hidden group relative h-full cursor-pointer overflow-hidden rounded shadow-[1px_1px_0_1px_#777] ring-1 ring-content-light duration-300 after:absolute after:bottom-0 after:z-1 after:h-full after:w-1/4 after:skew-x-[35deg] after:bg-gradient-to-l after:from-white/[0.1] after:via-white/[0.4] after:to-white/[0.1] after:opacity-0 hover:after:animate-twinkle hover:after:opacity-40"
      @click="router.push({ path: '/info', query: { id: cardInfo.id } })"
    >
      <a
        href="#"
        @click.prevent.stop="store.toggleFavorite(cardInfo.id)"
        class="absolute left-4 top-4 z-10 text-2xl text-danger-dark md:text-xl"
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
      <div class="h-52 overflow-hidden md:h-72 relative">
        <img
          ref="image"
          :src="
            cardInfo.image[0].includes('imgur.com')
              ? cardInfo.image[0]
              : require('../assets/image/' + cardInfo.image[0])
          "
          :alt="name"
          :class="[
            'h-full w-full object-cover object-bottom duration-500',
            imageLoaded ? 'opacity-100' : 'opacity-0',
          ]"
        />
        <img
          src="placeholder.jpg"
          alt="Loading..."
          :class="['h-full w-full object-cover blur-xl absolute inset-0 duration-500',imageLoaded ? 'opacity-0' : 'opacity-100']"
        />
        <div
          :class="[
            'absolute right-9 top-6 z-5 flex h-8 w-[160px] origin-center translate-x-1/2 rotate-45 select-none items-center justify-center border-t-2 border-b-2 border-white text-sm tracking-[8px] text-white',
            'bg-' + mark.color,
          ]"
          v-if="mark"
        >
          {{ mark.title }}
        </div>
      </div>
      <div class="bg-white p-4 text-center md:px-6 md:text-left">
        <h4 class="mb-1 text-primary-dark md:mb-3">
          <font-awesome-icon icon="fa-solid fa-location-dot" class="mr-2" />{{
            cardInfo.county
          }}
        </h4>
        <h3
          class="overflow-hidden text-ellipsis whitespace-nowrap tracking-wide md:text-lg"
          :title="name"
        >
          {{ name }}
        </h3>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { ref, computed, toRefs, onMounted } from 'vue';
import router from '@/router';
import { useStore } from '@/stores/index';

const store = useStore();
const props = defineProps({
  cardInfo: Object,
  delay: {
    type: Number,
    default: 1,
  },
});

const { cardInfo, delay } = toRefs(props);
const image = ref(null);
const imageLoaded = ref(false);
const name = computed(() =>
  cardInfo.value.name.slice(cardInfo.value.name.indexOf(' ') + 1)
);

const mark = computed(() => {
  if (cardInfo.value.favorite > 700) {
    return { color: 'danger-dark', title: '熱門' };
  } else if (cardInfo.value.tags.length > 6) {
    return { color: 'sky-600', title: '超多特色' };
  } else {
    const now = new Date();
    const createTime = new Date(cardInfo.value.createTime);
    const time = now.getTime() - createTime.getTime();
    // 7 天內新增的
    if (time / 1000 / 60 / 60 / 24 < 7) {
      return { color: 'secondary-dark', title: '最近新增' };
    }
  }
  return null;
});

const transitionDelay = computed(() => delay.value + 's');

onMounted(() => {
  image.value.onload = () => (imageLoaded.value = true);
});
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
