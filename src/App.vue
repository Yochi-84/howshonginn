<template>
  <Navbar @scrollStatus="getScrollStatus" @showMask="showMask"></Navbar>
  <router-view @showMask="showMask" />
  <Footer></Footer>

  <Mask :show="maskStatus"></Mask>
  <ToTop></ToTop>
</template>
<script setup>
import Navbar from "@/components/NavbarComponent";
import Footer from "@/components/FooterComponent";
import Mask from "@/components/MaskComponent";
import ToTop from "@/components/ToTopComponent";
import { ref, provide } from "vue";

const maskStatus = ref(false);
const scrollStatus = ref("top");

function getScrollStatus(status) {
  scrollStatus.value = status;
}

function showMask(status) {
  maskStatus.value = status;
}

provide("scrollStatus", scrollStatus);
</script>
