<template>
  <div class="hidden h-[4.5rem] bg-primary md:block"></div>
  <main class="bg-gray-300 py-20 md:py-16">
    <section class="">
      <div class="container">
        <div class="-mx-3 flex">
          <div class="w-[55%] px-3">
            <VueperSlides
              fixed-height="400px"
              lazy
              lazy-load-on-drag
              fade
              bulletsOutside
            >
              <VueperSlide
                v-for="image of info.image"
                :key="image"
                :image="require('../assets/image/' + image)"
                class="h-[400px] w-full overflow-hidden rounded-lg"
              >
                <template #loader>
                  <i class="icon icon-loader spinning"></i>
                  <span>Loading...</span>
                </template>
              </VueperSlide>
            </VueperSlides>
          </div>
          <ul class="w-[45%] px-3">
            <li>{{ info.name.slice(info.name.indexOf(" ") + 1) }}</li>
            <li>{{ info.address }}</li>
            <li>{{ info.phone }}</li>
            <li>
              <a :href="info.website" target="_blank">{{ info.website }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import axios from "axios";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const info = ref({});

onBeforeMount(() => {
  axios
    .get(`http://localhost:3000/camp/?id=${route.query.id}`)
    .then((res) => (info.value = res.data[0]))
    .catch((err) => console.log(err));
});
</script>
<style lang="scss" scoped>
:deep(.vueperslide) {
  background-position: bottom;
}

:deep(.vueperslides__arrow) {
  svg {
    width: 3em;
  }
}

:deep(.vueperslides__bullet .default) {
  width: 24px;
  height: 6px;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow: none;
  transition: 0.3s;
}

:deep(.vueperslides__bullet--active .default) {
  background-color: $primary;
}
</style>
