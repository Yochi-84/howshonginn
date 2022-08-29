<template>
  <Carousel
    :settings="settings"
    :breakpoints="breakpoints"
    v-model="currentSlide"
  >
    <Slide v-for="(info, index) of cardInfo" :key="info.name">
      <div class="carousel__item relative w-full overflow-hidden rounded">
        <div
          :class="[
            'before:content-normal h-[350px] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-[rgba(0,0,0,0.1)] before:to-[rgba(0,0,0,0.5)] before:opacity-0 before:duration-700',
            { 'before:opacity-100': currentSlide === index },
          ]"
        >
          <img
            :src="info.image"
            :alt="info.name"
            class="h-full w-full object-cover object-bottom"
          />
        </div>
        <div
          :class="[
            'absolute right-0 bottom-6 left-0 text-center text-white opacity-0 duration-700',
            { 'opacity-100': currentSlide === index },
          ]"
        >
          <h3 class="lg:text-xl">{{ info.name }}</h3>
          <h4 class="text-sm lg:text-base">
            <font-awesome-icon icon="fa-solid fa-location-dot" class="mr-2" />{{
              info.county
            }}
          </h4>
        </div>
        <!-- TODO: 連結 -->
        <router-link
          to="/"
          class="after:content-normal after:absolute after:inset-0"
        />
      </div>
    </Slide>

    <template #addons>
      <navigation />
    </template>
  </Carousel>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref } from "vue";
export default {
  props: {
    cardInfo: {
      type: Object,
    },
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const settings = {
      itemsToShow: 2.5,
      snapAlign: "center",
      wrapAround: true,
      autoplay: 4000,
      pauseAutoplayOnHover: true,
      transition: 700,
    };

    const breakpoints = {
      992: {
        itemsToShow: 4,
      },
    };

    const currentSlide = ref(0);

    return {
      settings,
      breakpoints,
      currentSlide,
    };
  },
};
</script>
<style lang="scss" scoped>
.carousel__slide {
  padding: 20px 0;
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

:deep(.carousel__prev) {
  width: auto;
  height: auto;
  background-color: transparent;
  transform: translate(50%, -50%);

  .carousel__icon {
    width: 48px;
    height: 48px;
    fill: $primary;
  }
}

:deep(.carousel__next) {
  width: auto;
  height: auto;
  background-color: transparent;
  transform: translate(-50%, -50%);

  .carousel__icon {
    width: 48px;
    height: 48px;
    fill: $primary;
  }
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
  transform: scale(1.1);
}
</style>
