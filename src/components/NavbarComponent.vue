<template>
  <header
    class="sticky top-0 z-10 bg-white shadow-[0_2px_5px_1px_rgba(0,0,0,0.3)] md:static md:shadow-none"
  >
    <nav class="container flex items-center py-3 md:py-4">
      <span
        class="block text-3xl leading-none text-primary md:hidden"
        @click="navStatus = !navStatus"
        ><font-awesome-icon icon="fa-solid fa-bars"
      /></span>
      <ul
        :class="[
          'fixed top-14 bottom-0 left-0 z-10 flex max-w-0 flex-col items-center overflow-hidden bg-white duration-300 md:hidden',
          {
            'max-w-full shadow-[0_2px_5px_1px_rgba(0,0,0,0.3)_inset]':
              navStatus,
          },
        ]"
      >
        <li class="w-full whitespace-nowrap py-4">
          <SearchBox class="mx-auto w-[90%] border border-black" />
        </li>
        <li class="w-full whitespace-nowrap">
          <router-link
            to="/list"
            class="block py-4 text-center text-xl text-primary"
            >所有營地</router-link
          >
        </li>
        <li class="w-full whitespace-nowrap">
          <router-link
            to="/share"
            class="block py-4 text-center text-xl text-primary"
            >分享營地</router-link
          >
        </li>
        <li class="mb-auto w-full whitespace-nowrap">
          <router-link
            to="/contact"
            class="block py-4 text-center text-xl text-primary"
            >聯絡我們</router-link
          >
        </li>
        <li class="w-full whitespace-nowrap">
          <router-link
            to="/login"
            class="block py-4 text-center text-xl text-primary"
            ><font-awesome-icon
              icon="fa-solid fa-user-alt"
              class="mr-2"
            />登入</router-link
          >
        </li>
      </ul>
      <h1
        class="absolute top-1/2 left-1/2 h-9 w-[143.25px] -translate-x-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap bg-[url('../image/logo.svg')] bg-cover bg-center bg-no-repeat indent-[101%] md:static md:h-12 md:w-[191px] md:translate-x-0 md:translate-y-0"
      >
        <router-link to="/" class="block h-full"> How享營 </router-link>
      </h1>
      <ul
        class="hidden md:ml-12 md:flex md:flex-grow md:items-center md:gap-x-4 md:gap-y-8 md:bg-white"
      >
        <li>
          <router-link
            to="/list"
            class="block py-4 px-20 text-xl text-link md:p-0"
            >所有營地</router-link
          >
        </li>
        <li>
          <router-link
            to="/share"
            class="block py-4 px-20 text-xl text-link md:p-0"
            >分享營地</router-link
          >
        </li>
        <li>
          <router-link
            to="/contact"
            class="block py-4 px-20 text-xl text-link md:p-0"
            >聯絡我們</router-link
          >
        </li>
        <li class="ml-auto">
          <router-link
            to="/login"
            class="block py-4 px-20 text-xl text-link md:p-0"
            >登入</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import SearchBox from "@/components/SearchBoxComponent";
import { ref } from "vue";
export default {
  components: {
    SearchBox,
  },
  setup() {
    let navStatus = ref(false);

    return {
      navStatus,
    };
  },
};
</script>
