<template>
  <div class="hidden h-[4.5rem] bg-primary-dark md:block"></div>
  <main class="py-20 md:py-16">
    <div class="container">
      <BreadCrumb class="mb-6"></BreadCrumb>
      <div class="items-center -mx-3 mb-4 flex gap-y-4">
        <div
          :class="[
            'px-3 transition-[top] duration-500 flex-grow lg:static lg:w-1/3 lg:translate-x-0 xl:w-1/4',
            { 'fixed left-1/2 z-20 -translate-x-1/2': scrollStatus !== 'top' },
            { 'top-[72px]': scrollStatus === 'up' },
            { 'top-8': scrollStatus === 'down' },
          ]"
        >
          <SearchBox
            :class="[
              'border lg:border-black',
              scrollStatus !== 'top'
                ? 'border-primary bg-transparent text-primary duration-300 focus-within:bg-white focus-within:text-black focus-within:drop-shadow-[0_0_10px_#b3c648] lg:focus-within:drop-shadow-none'
                : 'border-black',
            ]"
          ></SearchBox>
        </div>
        <div class="px-3 text-right lg:w-2/3 xl:w-3/4">
          <select
            name="sort"
            id="sort"
            class="rounded border border-black py-2.5 px-4 focus:outline-none cursor-pointer"
            v-model="sortMethod"
          >
            <option value="id">預設排序</option>
            <option value="favorite">人氣排序</option>
            <option value="random">隨機排序</option>
          </select>
        </div>
      </div>
      <div class="-mx-3 flex flex-wrap justify-center">
        <aside class="w-full px-3 lg:w-1/3 xl:w-1/4">
          <Filter @showHigherMask="showHigherMask"></Filter>
        </aside>
        <section class="px-3 lg:w-2/3 xl:w-3/4">
          <ul class="-mx-2 mb-8 flex flex-wrap gap-y-4">
            <li
              class="w-full px-2 md:w-1/2 xl:w-1/3"
              v-for="(item, index) of showList.slice(0, 12 * currentPage)"
              :key="item.name"
            >
              <CampingCard
                :cardInfo="item"
                :delay="(index % 12) * 0.05"
              ></CampingCard>
            </li>
          </ul>
          <div class="text-center" v-show="currentPage < totalPage">
            <a
              href="#"
              class="inline-block border border-black px-6 py-2 duration-300 hover:border-primary-dark hover:bg-primary-dark hover:text-primary-light"
              @click.prevent="currentPage++"
              >載入更多...</a
            >
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
<script setup>
import BreadCrumb from "@/components/BreadCrumbComponent";
import SearchBox from "@/components/SearchBoxComponent";
import Filter from "@/components/FilterComponent";
import CampingCard from "@/components/CampingCardComponent";
import { ref, onMounted, watch, computed, inject } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const emits = defineEmits(["showHigherMask"]);
const place = ref([]);
const currentPage = ref(1);
const sortMethod = ref("id");
const scrollStatus = inject("scrollStatus");
const route = useRoute();
let routeQuery = computed(() => route.query);

const showList = computed(() => {
  let list = []
  if (route.query.q) {
    list = place.value.filter((item) =>
      item.name.toLowerCase().includes(route.query.q.toLowerCase())
    );
  } else {
    list = [...place.value];
  }

  switch (sortMethod.value) {
    case "favorite":
      return list.sort((prev,next) => next.want - prev.want);
    case "random":
      return list.sort(() => 0.5 - Math.random());
    default:
    return list;
  }
});

const totalPage = computed(() => Math.ceil(showList.value.length / 12));

onMounted(() => {
  axios
    .get(`http://localhost:3000/camp`)
    .then((res) => (place.value = res.data))
    .catch((err) => console.log(err));
});

watch(routeQuery, () => {
  // document.documentElement.scrollTop = 0;
  currentPage.value = 1;
});


function showHigherMask(status) {
  emits("showHigherMask", status);
}
</script>
