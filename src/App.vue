<template>
  <Navbar @scrollStatus="getScrollStatus"></Navbar>

  <Transition name="fade" mode="out-in">
    <RouterView v-slot="{ Component, route }">
      <KeepAlive>
        <Component :is="Component" v-if="route.meta.keepAlive" />
      </KeepAlive>
      <Component :is="Component" v-if="!route.meta.keepAlive" />
    </RouterView>
  </Transition>

  <Footer></Footer>

  <Transition name="fade">
    <LoginRegister v-if="store.loginModal"></LoginRegister>
  </Transition>
  <Mask></Mask>
  <ToTop></ToTop>
</template>
<script setup>
import Navbar from '@/components/NavbarComponent';
import Footer from '@/components/FooterComponent';
import LoginRegister from '@/container/LoginRegisterComponent';
import Mask from '@/components/MaskComponent';
import ToTop from '@/components/ToTopComponent';
import { ref, computed, watch, provide, onMounted } from 'vue';
import { useStore } from '@/stores/index';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

const store = useStore();
const scrollStatus = ref('top');

function getScrollStatus(status) {
  scrollStatus.value = status;
}

const loginStatus = computed(() => store.userInfo.status);

provide('scrollStatus', scrollStatus);

watch(loginStatus, (newV) => {
  if (newV) {
    createToast(
      {
        title: '歡迎回來',
        description: store.userInfo.nickname,
      },
      {
        type: 'default',
        position: 'top-center',
        timeout: 3000,
        transition: 'zoom',
      }
    );
  }
});

// 確認是否存在使用者登入資訊
onMounted(() => {
  if (!store.userInfo.status) store.getUserInfo();
});
</script>
<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
</style>
