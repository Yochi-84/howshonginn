<template>
  <header
    :class="[
      'fixed top-0 z-30 w-full bg-white shadow-[0_2px_5px_1px_rgba(0,0,0,0.3)] duration-500 ',
      {
        'md:bg-transparent md:shadow-none': scrollStatus === 'top',
        '-translate-y-full': scrollStatus === 'down',
      },
    ]"
  >
    <nav
      class="container flex flex-row-reverse items-center py-3 md:flex-row md:py-4"
    >
      <span
        class="block text-3xl leading-none text-primary md:hidden"
        @click="navStatus = !navStatus"
        ><font-awesome-icon icon="fa-solid fa-bars"
      /></span>
      <ul
        :class="[
          'absolute bottom-0 left-0 right-0 z-5 translate-y-full overflow-hidden whitespace-nowrap bg-white text-center text-primary duration-300 md:hidden',
          navStatus
            ? 'max-h-screen shadow-[0_2px_5px_1px_rgba(0,0,0,0.3)_inset]'
            : 'max-h-0',
        ]"
      >
        <li class="whitespace-nowrap py-4">
          <SearchBox class="mx-auto w-[90%] border border-black text-black" />
        </li>
        <li>
          <a href="#" @click.prevent="routeTo('list')" class="block py-4">所有營地</a>
        </li>
        <li>
          <a href="#" @click.prevent="routeTo('share')" class="block py-4">分享營地</a>
        </li>
        <li>
          <a href="#" @click.prevent="routeTo('contact')" class="block py-4">聯絡我們</a>
        </li>
        <li>
          <a href="#" class="block py-4" @click.prevent="showLoginModal"
            ><font-awesome-icon
              icon="fa-solid fa-user-alt"
              class="mr-2"
            />登入</a
          >
        </li>
      </ul>
      <h1
        :class="[
          'absolute top-1/2 left-1/2 h-9 w-[143px] -translate-x-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap bg-[url(../image/logo.svg)] bg-cover bg-center bg-no-repeat indent-[101%]  duration-300 md:static md:h-10 md:w-[159px] md:translate-x-0 md:translate-y-0',
          {
            'md:brightness-0 md:invert': scrollStatus === 'top',
          },
        ]"
      >
        <router-link to="/" class="block h-full"> How享營 </router-link>
      </h1>
      <ul
        :class="[
          'hidden md:ml-12 md:flex md:flex-grow md:items-center md:gap-x-8',
          scrollStatus !== 'top' ? 'text-content' : 'text-white',
        ]"
      >
        <li>
          <router-link
            to="/list"
            class="block p-0 duration-300 md:hover:-translate-y-1"
            >所有營地</router-link
          >
        </li>
        <li>
          <router-link
            to="/share"
            class="block duration-300 md:hover:-translate-y-1"
            >分享營地</router-link
          >
        </li>
        <li>
          <router-link
            to="/contact"
            class="block duration-300 md:hover:-translate-y-1"
            >聯絡我們</router-link
          >
        </li>
        <li class="ml-auto">
          <a
            href="#"
            class="block duration-300 md:hover:-translate-y-1"
            v-if="!store.userInfo.status"
            @click.prevent="showLoginModal"
            >登入</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import SearchBox from "@/components/SearchBoxComponent";
import { useStore } from '@/stores/index';
import { ref, onMounted, watch } from "vue";
import router from "@/router";

const store = useStore();
const emits = defineEmits(["scrollStatus", "showMask", "LoginModal"]);
let navStatus = ref(false);
let top = 0;
let scrollStatus = ref("top");

onMounted(() => {
  window.addEventListener("scroll", () => {
    let topDistance = document.documentElement.scrollTop;
    if (topDistance <= 50) {
      scrollStatus.value = "top";
    } else if (topDistance >= top) {
      top = topDistance;
      scrollStatus.value = "down";
    } else {
      top = topDistance;
      scrollStatus.value = "up";
    }
    emits("scrollStatus", scrollStatus.value);
  });
});

function showLoginModal() {
  navStatus.value = false;
  emits("loginModal", true);
}

function routeTo(url) {
  navStatus.value = false;
  router.push({path: `/${url}`});
}

watch(navStatus, (newV) => emits("showMask", newV));
</script>
