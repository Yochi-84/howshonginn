<template>
  <Navbar @scrollStatus="getScrollStatus"></Navbar>
  <router-view/>

  <Footer></Footer>

  <LoginRegister></LoginRegister>
  <Mask></Mask>
  <ToTop></ToTop>
</template>
<script setup>
import Navbar from '@/components/NavbarComponent';
import Footer from '@/components/FooterComponent';
import LoginRegister from '@/container/LoginRegisterComponent';
import Mask from '@/components/MaskComponent';
import ToTop from '@/components/ToTopComponent';
import { ref, provide, onMounted } from 'vue';
import { useStore } from '@/stores/index';

const store = useStore();
const scrollStatus = ref('top');

function getScrollStatus(status) {
  scrollStatus.value = status;
}

provide('scrollStatus', scrollStatus);

// 確認是否存在使用者登入資訊
onMounted(() => {
  if (!store.userInfo.status) store.getUserInfo();
});
</script>
<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
