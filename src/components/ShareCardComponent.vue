<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="info of cardInfo" :key="info.name">
      <div class="card carousel__item">
        <div class="card-image">
          <img :src="info.image" :alt="info.name" />
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ info.name }}</h3>
          <h4 class="card-subtitle">
            <font-awesome-icon icon="fa-solid fa-location-dot" class="mr-2" />{{
              info.county
            }}
          </h4>
        </div>
        <!-- TODO: 連結 -->
        <router-link to="/" class="card-link" />
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

    return {
      settings,
      breakpoints,
    };
  },
};
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: 5px;

  &-image {
    height: 350px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: bottom center;
    }

    &::before {
      position: absolute;

      // eslint-disable-next-line
      background-image: linear-gradient(
        transparent,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.5)
      );
      opacity: 0;
      content: "";
      inset: 0;
      transition: 0.7s;
    }
  }

  &-content {
    position: absolute;
    right: 0;
    bottom: 1.5rem;
    left: 0;
    text-align: center;
    color: $white;
    opacity: 0;
    transition: 0.7s;
  }

  &-title {
    @include lg {
      font-size: 20px;
    }
  }

  &-subtitle {
    font-size: 14px;

    @include lg {
      font-size: 16px;
    }
  }

  &-link::after {
    content: "";
    position: absolute;
    inset: 0;
  }
}

.carousel__slide {
  padding: 20px 0;
}

.carousel__slide--active {
  position: relative;
  z-index: 2;

  .card-image::before {
    opacity: 1;
  }

  .card-content {
    opacity: 1;
  }
}

.carousel__slide > .carousel__item {
  position: relative;
  z-index: 1;
  transition: 0.5s;
  transform: scale(1);
}

:deep .carousel__prev {
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

:deep .carousel__next {
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
