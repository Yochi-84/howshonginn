<template>
  <Carousel :settings="settings" v-model="currentSlide">
    <Slide v-for="(info, index) of props.cardInfo" :key="info.name">
      <div class="carousel__item group relative w-full overflow-hidden rounded">
        <div
          :class="[
            'h-[400px] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-[rgba(0,0,0,0.1)] before:to-[rgba(0,0,0,0.5)] before:duration-700',
            currentSlide === index ? 'before:opacity-100' : 'before:opacity-0',
          ]"
        >
          <img
            :src="
              info.image.includes('imgur.com')
                ? info.image
                : require('../assets/image/' + info.image)
            "
            :alt="info.name"
            class="h-full w-full object-cover object-bottom"
          />
        </div>
        <div
          :class="[
            'absolute right-0 bottom-6 left-0 flex flex-col items-center px-6 text-center text-white duration-700 md:px-4',
            currentSlide === index ? 'opacity-100' : 'opacity-0',
          ]"
        >
          <h3 class="lg:text-lg">{{ info.name }}</h3>
          <h4 class="mb-2 text-sm lg:text-base">
            <font-awesome-icon icon="fa-solid fa-location-dot" class="mr-2" />{{
              info.county
            }}
          </h4>
          <ul
            :class="[
              'flex flex-wrap gap-y-2 gap-x-2 text-sm text-white duration-700 lg:max-h-0 lg:overflow-hidden',
              { 'lg:group-hover:max-h-screen': currentSlide === index },
            ]"
          >
            <li
              v-for="tag of info.tags"
              :key="tag"
              class="rounded bg-secondary-dark px-1 py-px"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
        <router-link
          :to="'/info?id=' + info.id"
          :class="[
            'after:absolute after:inset-0',
            { hidden: currentSlide !== index },
          ]"
        />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { ref } from 'vue';

const props = defineProps({
  cardInfo: Object,
});
const currentSlide = ref(1);
const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
  wrapAround: true,
  autoplay: 4000,
  pauseAutoplayOnHover: true,
  mouseDrag: false,
  transition: 700,
  breakpoints: {
    576: {
      itemsToShow: 2.5,
    },
    992: {
      itemsToShow: 4,
    },
  },
};
</script>
<style lang="scss" scoped>
.carousel__slide {
  padding: 40px 0;
}

.carousel__slide--active {
  position: relative;
  z-index: 2;
}

.carousel__slide > .carousel__item {
  position: relative;
  z-index: 1;
  transition: 0.5s;
  transform: scale(1);
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  width: auto;
  height: auto;
  background-color: transparent;

  .carousel__icon {
    width: 48px;
    height: 48px;
    fill: $primary-dark;
  }
}

:deep(.carousel__prev) {
  transform: translate(50%, -50%);
}

:deep(.carousel__next) {
  transform: translate(-50%, -50%);
}

.carousel__slide--next > .carousel__item {
  z-index: 0;
  filter: blur(3px);
  transform: scaleY(0.9) translate(-10px);
}

.carousel__slide--prev > .carousel__item {
  z-index: 0;
  filter: blur(3px);
  transform: scaleY(0.9) translate(10px);
}

.carousel__slide--active > .carousel__item {
  transform: scaleY(1);
}

@media screen and (min-width: 576px) {
  .carousel__slide--active > .carousel__item {
    transform: scale(1.2);
  }
}
</style>
