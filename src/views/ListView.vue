<template>
  <div class="hidden h-[4.5rem] bg-primary md:block"></div>
  <main class="py-20 md:py-16">
    <div class="container">
      <BreadCrumb class="mb-6"></BreadCrumb>
      <div class="-mx-3 flex">
        <aside class="px-0 lg:w-1/3 lg:px-3 xl:w-1/4">
          <Filter @showMask="showMask"></Filter>
        </aside>
        <section class="px-3 lg:w-2/3 xl:w-3/4">
          <ul class="-mx-2 flex flex-wrap gap-y-4">
            <li
              class="w-full px-2 md:w-1/2 xl:w-1/3"
              v-for="item of place.slice(
                12 * (currentPage - 1),
                12 * currentPage
              )"
              :key="item.name"
            >
              <CampingCard :cardInfo="item"></CampingCard>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </main>
</template>
<script setup>
import BreadCrumb from "@/components/BreadCrumbComponent";
import Filter from "@/components/FilterComponent";
import CampingCard from "@/components/CampingCardComponent";
import { ref, onMounted } from "vue";
import axios from "axios";

const emits = defineEmits(["showMask"]);
const place = ref([]);
const currentPage = ref(1);

onMounted(() => {
  axios
    .get(`http://localhost:3000/camp`)
    .then((res) => (place.value = res.data))
    .catch((err) => console.log(err));
});

function showMask(status) {
  emits("showMask", status);
}
</script>
