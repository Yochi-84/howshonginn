<template>
  <header
    :class="[
      'fixed top-0 z-30 w-full bg-white shadow-[0_2px_5px_1px_rgba(0,0,0,0.3)] duration-500 ',
      {
        'md:bg-primary-dark': scrollStatus === 'top' && route.name !== 'home',
        'md:bg-transparent ': scrollStatus === 'top' && route.name === 'home',
        'md:shadow-none': scrollStatus === 'top',
        '-translate-y-full': scrollStatus === 'down',
      },
    ]"
  >
    <nav
      class="container flex flex-row-reverse items-center py-3 md:flex-row md:py-4"
    >
      <span
        class="block text-3xl leading-none text-primary-dark md:hidden"
        @click="store.navStatus = !store.navStatus"
        ><font-awesome-icon icon="fa-solid fa-bars"
      /></span>
      <ul
        :class="[
          'absolute bottom-0 left-0 right-0 z-5 translate-y-full overflow-hidden whitespace-nowrap bg-white text-center text-primary-dark duration-300 md:hidden',
          store.navStatus
            ? 'max-h-screen shadow-[0_2px_5px_1px_rgba(0,0,0,0.3)_inset]'
            : 'max-h-0',
        ]"
      >
        <li class="whitespace-nowrap py-3">
          <SearchBox class="mx-auto w-[90%] border border-black text-black" />
        </li>
        <li>
          <router-link to="/list" class="block py-3">所有營地</router-link>
        </li>
        <li>
          <router-link to="/share" class="block py-3">分享營地</router-link>
        </li>
        <li v-if="!store.userInfo.status">
          <a href="#" class="block py-3" @click.prevent="showLoginModal"
            ><font-awesome-icon
              icon="fa-solid fa-user-alt"
              class="mr-2"
            />登入</a
          >
        </li>
        <ul
          class="border-t border-t-secondary-dark bg-secondary-light text-secondary"
          v-else
        >
          <li>
            <div
              class="flex cursor-pointer select-none items-center justify-center py-3"
              @click.stop="userMenuStatus = !userMenuStatus"
            >
              <span class="mr-2 text-lg font-bold">{{
                store.userInfo.nickname
              }}</span>
              <img
                :src="
                  store.userInfo.pic !== ''
                    ? store.userInfo.pic
                    : require('../assets/image/user_init.jpg')
                "
                :alt="store.userInfo.nickname"
                class="h-8 w-8 rounded-full ring-2 ring-secondary-dark object-cover"
              />
            </div>
          </li>
          <li v-show="store.userInfo.status">
            <router-link to="/favorite" class="block py-3">
              <font-awesome-icon icon="fa-solid fa-heart" class="mr-2" />
              我的收藏
            </router-link>
          </li>
          <li v-show="store.userInfo.status">
            <router-link to="/setting" class="block py-3"
              ><font-awesome-icon
                icon="fa-solid fa-gear"
                class="mr-2"
              />會員設定</router-link
            >
          </li>
          <li v-show="store.userInfo.status">
            <a href="#" class="block py-3" @click.prevent="logout"
              ><font-awesome-icon
                icon="fa-solid fa-right-from-bracket"
                class="mr-2"
              />登出</a
            >
          </li>
        </ul>
      </ul>
      <h1
        :class="[
          'absolute top-1/2 left-1/2 h-9 w-[144px] -translate-x-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap bg-[url(../image/logo.svg)] bg-cover bg-center bg-no-repeat indent-[101%]  duration-300 md:static md:h-10 md:w-[159px] md:translate-x-0 md:translate-y-0',
          {
            'md:brightness-0 md:invert': scrollStatus === 'top',
          },
        ]"
      >
        <router-link to="/" class="block h-full"> How享營 </router-link>
      </h1>
      <ul
        :class="[
          'hidden md:ml-12 md:flex md:flex-grow md:items-center md:gap-x-4 lg:gap-x-8',
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
        <li class="ml-auto">
          <a
            href="#"
            class="block duration-300 md:hover:-translate-y-1"
            v-if="!store.userInfo.status"
            @click.prevent="showLoginModal"
            >登入</a
          >
          <ul
            :class="[
              'flex  items-center gap-x-4 lg:gap-x-8',
              scrollStatus !== 'top' ? 'text-content' : 'text-white',
            ]"
            v-else
          >
            <li>
              <div
                class="cursor-pointer duration-300 md:hover:-translate-y-1"
                @click="router.push({ path: 'favorite' })"
              >
                <font-awesome-icon icon="fa-solid fa-heart" class="mr-2" />
                <span class="hidden lmd:inline">我的收藏</span>
              </div>
            </li>
            <li class="relative">
              <div
                class="flex cursor-pointer select-none items-center"
                @click.stop="userMenuStatus = !userMenuStatus"
              >
                <span class="mr-2">{{ store.userInfo.nickname }}</span>
                <img
                  :src="
                    store.userInfo.pic !== ''
                      ? store.userInfo.pic
                      : require('../assets/image/user_init.jpg')
                  "
                  :alt="store.userInfo.nickname"
                  :class="[
                    'h-8 w-8 rounded-full ring-2 duration-300 lg:h-10 lg:w-10 object-cover',
                    scrollStatus !== 'top' ? 'ring-primary-dark' : 'ring-white',
                  ]"
                />
              </div>
              <transition name="user-menu">
                <ul
                  :class="[
                    'absolute -bottom-5 right-0 min-w-full translate-y-full divide-y divide-content rounded bg-gradient-to-b from-primary-dark via-primary to-primary-dark text-center text-content before:absolute before:top-px before:right-6 before:-translate-y-full before:-skew-x-[10deg] before:border-b-[14px] before:border-l-[24px] before:border-b-primary-dark before:border-l-transparent',
                  ]"
                  v-show="userMenuStatus"
                >
                  <li
                    class="whitespace-nowrap text-white duration-300 hover:text-secondary"
                  >
                    <router-link to="/setting" class="block py-2 px-4"
                      ><font-awesome-icon
                        icon="fa-solid fa-gear"
                        class="mr-2"
                      />會員設定</router-link
                    >
                  </li>
                  <li
                    class="whitespace-nowrap text-white duration-300 hover:text-secondary"
                  >
                    <a href="#" class="block py-2 px-4" @click.prevent="logout"
                      ><font-awesome-icon
                        icon="fa-solid fa-right-from-bracket"
                        class="mr-2"
                      />登出</a
                    >
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import SearchBox from '@/components/SearchBoxComponent';
import { useStore } from '@/stores/index';
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';

const route = useRoute();
const store = useStore();
const emits = defineEmits(['scrollStatus']);
let top = 0;
let scrollStatus = ref('top');
const userMenuStatus = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    let topDistance = document.documentElement.scrollTop;
    if (topDistance <= 50) {
      scrollStatus.value = 'top';
    } else if (topDistance >= top) {
      top = topDistance;
      scrollStatus.value = 'down';
      userMenuStatus.value = false;
    } else {
      top = topDistance;
      scrollStatus.value = 'up';
    }
    emits('scrollStatus', scrollStatus.value);
  });
});

function showLoginModal() {
  store.navStatus = false;
  store.toggleLoginModal();
}

function logout() {
  userMenuStatus.value = false;
  store.clearUserInfo();
  store.userInfo = { status: false };
  router.push({ name: 'home' });
}

const navStatus = computed(() => store.navStatus);
watch(navStatus, (newV) => {
  if (!store.loginModal) {
    store.toggleMask(newV);
  }
});

// 點擊 userMenu 以外區域關閉
watch(userMenuStatus, (newV) => {
  if (newV) {
    document.body.addEventListener('click', closeUserMenu);
  } else {
    document.body.removeEventListener('click', closeUserMenu);
  }
});

// 不能寫在 watch 裡面，每次 watch 執行會重新宣告一次 function，會被判定跟上次執行是不同函式，removeEventListener 會失敗
function closeUserMenu() {
  userMenuStatus.value = false;
}
</script>
<style lang="scss" scoped>
.user-menu-enter-active,
.user-menu-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.user-menu-enter-from,
.user-menu-leave-to {
  opacity: 0;
}
</style>
