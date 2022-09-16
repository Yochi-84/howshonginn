<template>
  <main class="py-20 md:py-34" v-if="infoExist">
    <!-- 輪播 & 基本資訊 -->
    <section class="mb-[120px]">
      <div class="container">
        <BreadCrumb class="mb-10" v-if="routeChange"></BreadCrumb>
        <div class="flex flex-wrap gap-y-8 lg:-mx-4">
          <div class="w-full lg:w-[55%] lg:px-4">
            <VueperSlides :breakpoints="breakpoints">
              <VueperSlide
                v-for="image of info.image"
                :key="image"
                :image="require('../assets/image/' + image)"
                class="overflow-hidden rounded-lg"
              >
              </VueperSlide>
            </VueperSlides>
          </div>
          <div
            class="relative w-full py-8 px-3 before:absolute before:top-0 before:right-0 before:-z-10 before:h-full before:w-full before:rounded-lg before:bg-gradient-to-b before:from-primary-light before:via-primary before:to-primary-dark md:px-6 lg:w-[45%] lg:px-4 lg:py-0 lg:before:right-4 lg:before:-top-[5%] lg:before:h-[110%] lg:before:w-[120%]"
          >
            <div class="flex items-center justify-between pr-8">
              <h3
                class="mb-2 inline-block cursor-default rounded border border-secondary-dark px-4 py-1 text-secondary-dark"
              >
                <font-awesome-icon
                  icon="fa-solid fa-location-dot"
                  class="mr-2"
                />{{ info.county }}
              </h3>
              <a href="#" @click.prevent="store.toggleFavorite(info.id)">
                <font-awesome-icon
                  :icon="[
                    store.userInfo.status &&
                    store.userInfo.favorite.indexOf(info.id) > -1
                      ? 'fa-solid'
                      : 'fa-regular',
                    'fa-heart',
                  ]"
                  class="text-2xl text-danger-dark duration-300 hover:scale-125"
                  :title="
                    (store.userInfo.status &&
                    store.userInfo.favorite.indexOf(info.id) > -1
                      ? '移除'
                      : '加入') + '收藏'
                  "
                />
              </a>
            </div>
            <h2 class="mb-6 text-2xl font-bold md:text-3xl">
              {{ info.name }}
            </h2>
            <ul class="space-y-6 md:text-lg">
              <li class="space-y-2">
                <div>
                  <font-awesome-icon icon="fa-solid fa-map" class="mr-2" /><span
                    class="font-bold"
                    >地址</span
                  >
                </div>
                <p class="text-base">{{ info.address }}</p>
              </li>
              <li class="space-y-2">
                <div>
                  <font-awesome-icon
                    icon="fa-solid fa-phone"
                    class="mr-2"
                  /><span class="font-bold">聯絡電話</span>
                </div>
                <span class="mr-4 inline-block align-middle text-base">{{
                  info.phone
                }}</span>
                <a
                  :href="'tel:' + info.phone"
                  class="btn btn-secondary btn-small align-middle"
                  ><font-awesome-icon
                    icon="fa-solid fa-phone-volume"
                    class="mr-2"
                  />聯絡營主</a
                >
              </li>
              <li class="space-y-2">
                <div>
                  <font-awesome-icon
                    icon="fa-solid fa-globe"
                    class="mr-2"
                  /><span class="font-bold">網站</span>
                </div>
                <a
                  :href="info.website"
                  target="_blank"
                  class="block overflow-hidden text-ellipsis whitespace-nowrap text-left text-base text-blue-700 duration-300 hover:text-blue-800"
                  >{{ info.website }}</a
                >
              </li>
              <li class="space-y-2 md:inline-block md:align-top md:w-1/3">
                <div>
                  <font-awesome-icon
                    icon="fa-solid fa-mountain-sun"
                    class="mr-2"
                  /><span class="font-bold">海拔</span>
                </div>
                <span
                  class="mr-4 inline-block cursor-default rounded border border-danger-dark py-1 px-3 text-base text-danger-dark"
                  >{{ info.height }}</span
                >
              </li>
              <li class="space-y-2 md:inline-block md:align-top md:w-2/3">
                <div>
                  <font-awesome-icon
                    icon="fa-solid fa-tags"
                    class="mr-2"
                  /><span class="font-bold">特色</span>
                </div>
                <ul class="flex flex-wrap gap-y-2 gap-x-2 pr-4 text-base">
                  <li
                    class="cursor-default rounded border border-primary-light bg-primary-light py-0.5 px-1.5 text-primary-dark"
                    v-for="tag of info.tags"
                    :key="tag"
                  >
                    {{ tag }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- 簡介 & GoogleMap & 價格 -->
    <section class="mb-16 bg-secondary-light">
      <div class="container">
        <div class="-mx-3 flex -translate-y-8 flex-wrap items-start">
          <div class="w-full px-3 lg:w-2/5">
            <div class="relative rounded-lg bg-primary-light py-8 px-4 lg:px-6">
              <h2
                class="absolute -top-1 left-4 -translate-y-1/2 border-b-4 border-double border-b-primary-dark pr-6 text-2xl font-bold text-primary-dark lg:left-6"
              >
                簡單介紹
              </h2>
              <p
                v-for="(paragraph, index) of info.intro"
                :key="paragraph"
                :class="{ 'mb-4': index !== info.intro.length - 1 }"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>
          <div class="w-full px-3 lg:w-3/5">
            <iframe
              :src="`https://www.google.com/maps?q=${info.gps}(${info.name})&hl=zh-TW&z=16&output=embed`"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="mx-auto h-full min-h-[300px] w-full rounded-b-lg border-none lg:rounded-lg"
            ></iframe>
          </div>
        </div>
        <div class="mb-4 translate-y-4">
          <div class="relative rounded-lg bg-primary-light py-8 px-4 lg:px-6">
            <h2
              class="absolute -top-1 left-4 -translate-y-1/2 border-b-4 border-double border-b-primary-dark pr-6 text-2xl font-bold text-primary-dark lg:left-6"
            >
              區域 / 價格
            </h2>
            <div class="w-full">
              <div class="flex border-b border-b-primary-dark py-1 text-right">
                <div class="flex-grow basis-1/3 pl-2 text-left">區域</div>
                <div
                  class="flex-shrink-0 basis-1/5 whitespace-nowrap text-center md:basis-1/8"
                >
                  帳/區數
                </div>
                <div class="basis-1/12 md:hidden"></div>
                <div class="hidden basis-1/8 md:block">平日</div>
                <div class="hidden basis-1/8 md:block">週末</div>
                <div class="hidden basis-1/8 md:block">連假</div>
                <div class="hidden basis-1/8 pr-2 md:block">年假</div>
              </div>
              <ul>
                <li
                  v-for="kind of info.price"
                  :key="kind[0]"
                  class="relative flex cursor-default flex-wrap border-b border-b-gray-300 text-right md:border-b-0 lg:hover:bg-primary lg:hover:text-white"
                >
                  <div
                    class="flex-grow basis-1/3 overflow-hidden text-ellipsis whitespace-nowrap py-2 pl-2 text-left"
                    :title="kind[0]"
                  >
                    {{ kind[0] }}
                  </div>
                  <div
                    class="flex-shrink-0 basis-1/5 py-2 text-center md:basis-1/8"
                  >
                    {{ kind[1].number }}
                  </div>
                  <div class="flex basis-1/12 items-center md:hidden">
                    <a
                      href="#"
                      class="after:absolute after:inset-x-0 after:top-0 after:z-1 after:h-10"
                      @click.prevent="kind[1].collapse = !kind[1].collapse"
                      ><font-awesome-icon
                        icon="fa-solid fa-caret-up"
                        :class="[
                          'duration-300',
                          { 'rotate-180': kind[1].collapse },
                        ]"
                    /></a>
                  </div>
                  <!-- 手機版收合 -->
                  <div
                    :class="[
                      'w-full overflow-hidden bg-primary-dark text-white transition-all duration-300 md:hidden',
                      kind[1].collapse ? 'max-h-0' : 'max-h-screen',
                    ]"
                  >
                    <ul class="-mx-4 flex flex-wrap gap-y-2 py-2 text-center">
                      <li class="w-1/2 px-4" v-if="kind[1].normalPrice">
                        平日: {{ kind[1].normalPrice }}
                      </li>
                      <li class="w-1/2 px-4" v-if="kind[1].weekendPrice">
                        週末: {{ kind[1].weekendPrice }}
                      </li>
                      <li class="w-1/2 px-4" v-if="kind[1].holidayPrice">
                        連假: {{ kind[1].holidayPrice }}
                      </li>
                      <li class="w-1/2 px-4" v-if="kind[1].newYearPrice">
                        年假: {{ kind[1].newYearPrice }}
                      </li>
                    </ul>
                  </div>
                  <!-- 桌機版 -->
                  <div class="hidden basis-1/8 py-2 md:block">
                    {{ kind[1].normalPrice ? kind[1].normalPrice : '' }}
                    <span class="hidden lmd:inline" v-if="kind[1].normalPrice"
                      >元/晚</span
                    >
                  </div>
                  <div class="hidden basis-1/8 py-2 md:block">
                    {{ kind[1].weekendPrice ? kind[1].weekendPrice : '' }}
                    <span class="hidden lmd:inline" v-if="kind[1].weekendPrice"
                      >元/晚</span
                    >
                  </div>
                  <div class="hidden basis-1/8 py-2 md:block">
                    {{ kind[1].holidayPrice ? kind[1].holidayPrice : '' }}
                    <span class="hidden lmd:inline" v-if="kind[1].holidayPrice"
                      >元/晚</span
                    >
                  </div>
                  <div class="hidden basis-1/8 py-2 pr-2 md:block">
                    {{ kind[1].newYearPrice ? kind[1].newYearPrice : '' }}
                    <span class="hidden lmd:inline" v-if="kind[1].newYearPrice">
                      元/晚</span
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 評論 -->
    <section>
      <Comment :id="route.query.id"></Comment>
    </section>
  </main>
  <Loading v-else></Loading>
</template>
<script setup>
import axios from 'axios';
import BreadCrumb from '@/components/BreadCrumbComponent';
import Comment from '@/container/CommentComponent';
import Loading from '@/components/LoadingComponent';
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import { ref, computed, onMounted, inject } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '@/stores/index';

const baseURL = inject("baseURL");
const store = useStore();
const route = useRoute();
const info = ref({});
const routeChange = ref(false);
const infoOperated = ref(false);

const breakpoints = ref({
  1026: {
    fixedHeight: '350px',
    bulletsOutside: false,
  },
  9999: {
    fixedHeight: '100%',
    bulletsOutside: true,
  },
});

const infoExist = computed(
  () => Object.keys(info.value).length > 0 && infoOperated.value
);

onMounted(() => {
  axios
    .get(`${baseURL.value}campingPlace?id=${route.query.id}`)
    .then((res) => (info.value = res.data[0]))
    .then(() => {
      info.value.name = info.value.name.slice(info.value.name.indexOf(' ') + 1);

      route.meta.breadcrumb[route.meta.breadcrumb.length - 1].name =
        info.value.name;
      routeChange.value = true;

      info.value.intro = info.value.intro.split('\n');

      info.value.price = Object.entries(info.value.price);
      info.value.price.forEach((item) => (item[1].collapse = true));

      infoOperated.value = true;
    })
    .catch((err) => console.error(err));
});
</script>
<style lang="scss" scoped>
:deep(.vueperslide) {
  background-position: bottom;
}

:deep(.vueperslides__parallax-wrapper) {
  border-radius: 0.5rem;
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
