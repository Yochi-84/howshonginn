<template>
  <ul class="flex gap-x-2">
    <li
      :class="{
        'before:mr-2 before:text-black before:content-[>] ': index > 0,
      }"
      v-for="(item, index) of breadcrumb"
      :key="item.name"
    >
      <router-link :to="item.link" v-if="item.link" class="text-primary-dark">{{
        item.name
      }}</router-link>
      <span v-else>{{ item.name }}</span>
    </li>
  </ul>
</template>
<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();

const breadcrumb = ref([]);

onMounted(() => {
  breadcrumb.value = [...route.meta.breadcrumb];
});
</script>
