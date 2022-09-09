<template>
  <Navbar
    @scrollStatus="getScrollStatus"
    @showMask="showMask"
    @loginModal="loginModal"
  ></Navbar>
  <router-view @showMask="showMask" @showHigherMask="showHigherMask" />
  <Footer></Footer>

  <LoginRegister
    :showModal="loginModalStatus"
    @showHigherNoHiddenMask="showHigherNoHiddenMask"
    @closeModal="closeLoginModal"
  ></LoginRegister>
  <Mask :show="maskStatus"></Mask>
  <ToTop></ToTop>
</template>
<script setup>
import Navbar from '@/components/NavbarComponent';
import Footer from '@/components/FooterComponent';
import LoginRegister from '@/container/LoginRegisterComponent';
import Mask from '@/components/MaskComponent';
import ToTop from '@/components/ToTopComponent';
import { ref, provide } from 'vue';

const scrollStatus = ref('top');
const loginModalStatus = ref(false);
const maskStatus = ref({
  status: false,
  'z-index': 20,
});

function getScrollStatus(status) {
  scrollStatus.value = status;
}

function loginModal(status) {
  loginModalStatus.value = status;
}

function closeLoginModal(status) {
  loginModalStatus.value = status;
}

function showMask(status) {
  maskStatus.value = {
    status: status,
    'z-index': 20,
    'lg-hidden': true,
  };
}

function showHigherMask(status) {
  maskStatus.value = {
    status: status,
    'z-index': 40,
    'lg-hidden': true,
  };
}

function showHigherNoHiddenMask(status) {
  maskStatus.value = {
    status: status,
    'z-index': 40,
    'lg-hidden': false,
  };
}

provide('scrollStatus', scrollStatus);
</script>
