<template>
  <div>
    <!-- Banner -->
    <section
      class="clip-triangle flex h-[500px] items-center justify-center bg-[url('../image/banner.jpg')] bg-cover bg-bottom bg-no-repeat md:h-screen lg:bg-fixed"
    >
      <div class="md:flex md:w-4/5 md:flex-col md:items-center lg:w-1/2">
        <h2
          class="md:text-shadow hidden md:mb-6 md:block md:w-[14em] md:animate-typing md:overflow-hidden md:whitespace-nowrap md:border-r-2 md:border-r-white md:text-3xl md:font-bold md:text-white lg:text-4xl"
        >
          與你分享的快樂，勝過獨自擁有
        </h2>
        <SearchBox class="md:w-4/5"></SearchBox>
      </div>
    </section>

    <!-- Famous -->
    <section class="container py-6 md:py-16" v-if="famous.length > 1">
      <h2
        class="mb-4 items-center text-center text-2xl font-bold text-primary-dark before:mr-4 before:w-4 before:flex-grow before:border-t-8 before:border-double before:border-t-primary-dark after:ml-4 after:w-4 after:flex-grow after:border-t-8 after:border-double after:border-t-primary-dark md:mb-8 md:flex md:text-3xl"
      >
        最近熱門
      </h2>
      <ul class="flex flex-wrap gap-y-6 md:-mx-3">
        <li
          v-for="info of famous"
          :key="info.name"
          class="w-full px-3 md:w-1/2 lg:w-1/4"
        >
          <FamousCard :cardInfo="info" />
        </li>
      </ul>
    </section>

    <!-- Feature -->
    <section class="relative py-6 md:pb-16 lg:pt-[5.5rem]">
      <div
        class="hidden lg:absolute lg:inset-0 lg:-z-10 lg:block lg:bg-[url('https://images.unsplash.com/photo-1470582891830-22e103e72deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80')] lg:bg-cover lg:bg-fixed lg:bg-bottom lg:bg-no-repeat lg:opacity-80"
      ></div>
      <div class="lg:container">
        <ul class="lg:mx-auto lg:w-5/6">
          <li class="relative mb-6 flex items-center lg:mb-10">
            <div
              class="group relative h-[400px] w-full after:absolute after:inset-0 after:bg-black after:bg-opacity-40 lg:mr-6 lg:h-[300px] lg:w-1/2 lg:overflow-hidden lg:rounded lg:drop-shadow-[-1.5rem_-1.5rem_rgba(255,255,255,0.6)] lg:after:hidden"
            >
              <img
                src="../assets/image/pic1.jpg"
                alt="住過露過，一定不能沒分享過"
                class="h-full w-full rounded object-cover object-bottom duration-300 group-hover:scale-110"
              />
            </div>
            <div
              class="absolute inset-0 flex flex-col items-center justify-center lg:static lg:block"
            >
              <h3
                class="mb-3 text-2xl font-bold text-white md:text-[30px] lg:mb-4"
              >
                住過露過，一定不能沒分享過
              </h3>
              <p class="mb-3 text-base text-white lg:mb-6 lg:text-lg">
                挖到寶？<br />踩到雷？<br />快來和大家分享你的露營體驗吧！
              </p>
              <router-link to="/share" class="btn btn-secondary"
                >馬上分享</router-link
              >
            </div>
          </li>
          <li
            class="relative flex items-center lg:flex-row-reverse lg:text-right"
          >
            <div
              class="group relative h-[400px] w-full after:absolute after:inset-0 after:bg-black after:bg-opacity-40 lg:ml-6 lg:h-[300px] lg:w-1/2 lg:overflow-hidden lg:rounded lg:drop-shadow-[1.5rem_-1.5rem_rgba(255,255,255,0.6)] lg:after:hidden"
            >
              <img
                src="../assets/image/pic7.jpg"
                alt="每天的驚喜從新的發現開始"
                class="h-full w-full rounded object-cover object-bottom duration-300 group-hover:scale-110"
              />
            </div>
            <div
              class="absolute inset-0 flex flex-col items-center justify-center lg:static lg:block"
            >
              <h3
                class="mb-3 text-2xl font-bold text-white md:text-[30px] lg:mb-4"
              >
                每天的驚喜從新的發現開始
              </h3>
              <p class="mb-3 text-base text-white lg:mb-6 lg:text-lg">
                連假又快到了嗎？<br />還沒找到符合心意的營地嗎？<br />還有更多的寶藏營地等你來發現。
              </p>
              <router-link to="/list" class="btn btn-secondary"
                >發現更多</router-link
              >
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Share -->
    <section class="mb-10 py-6 md:mb-6 md:py-16" v-if="share.length > 1">
      <div class="md:container">
        <h2
          class="mb-4 items-center text-center text-2xl font-bold text-primary-dark before:mr-4 before:w-4 before:flex-grow before:border-t-8 before:border-double before:border-t-primary-dark after:ml-4 after:w-4 after:flex-grow after:border-t-8 after:border-double after:border-t-primary-dark md:mb-8 md:flex md:text-3xl"
        >
          與你分享
        </h2>
        <ShareCard :cardInfo="share" />
      </div>
    </section>
  </div>
  <LoadingFull bgOpacity="1" v-if="loadingStatus"></LoadingFull>
</template>

<script setup>
import axios from 'axios';
import SearchBox from '@/components/SearchBoxComponent';
import FamousCard from '@/components/FamousCardComponent';
import ShareCard from '@/components/ShareCardComponent';
import LoadingFull from '@/components/LoadingFullComponent';
import { ref, onMounted } from 'vue';

const loadingStatus = ref(false);
const famous = ref([]);
const share = ref([]);

const famousIndexList = [27, 63, 192, 273];
const shareIndexList = [60, 97, 128, 146, 242, 272];

const api = axios.create({
  baseURL: `${process.env.VUE_APP_API_PATH}/campingPlace`,
});
const getFamous = () => api.get(`?id=${famousIndexList.join('&id=')}`);
const getShare = () => api.get(`?id=${shareIndexList.join('&id=')}`);

onMounted(() => {
  loadingStatus.value = true;
  axios
    .all([getFamous(), getShare()])
    .then(
      axios.spread((acct, perms) => {
        famous.value = acct.data;

        share.value = perms.data.map((item) => {
          item.name = item.name.slice(item.name.indexOf(' ') + 1);
          item.image = item.image[0];
          return item;
        });
      })
    )
    .then(() => {
      window.setTimeout(() => {
        loadingStatus.value = false;
      }, 2000);
    })
    .catch((err) => console.error(err));
});
</script>
<style scoped>
.loading-full-enter-from,
.loading-full-leave-to {
  opacity: 0;
}

.loading-full-enter-active {
  transition: opacity 2s ease-in;
}
.loading-full-leave-active {
  transition: opacity 2s ease-out;
}
</style>
