<template>
  <Navbar @scrollStatus="getScrollStatus" @showMask="showMask"></Navbar>
  <router-view @showMask="showMask" />
  <Footer></Footer>
  <Mask :show="maskStatus"></Mask>
</template>
<script>
import Navbar from "@/components/NavbarComponent";
import Footer from "@/components/FooterComponent";
import Mask from "@/components/MaskComponent";
import { ref, provide } from "vue";

export default {
  components: {
    Navbar,
    Footer,
    Mask,
  },
  setup() {
    const maskStatus = ref(false);
    const scrollStatus = ref("top");

    function getScrollStatus(status) {
      scrollStatus.value = status;
    }

    function showMask(status) {
      maskStatus.value = status;
    }

    provide("scrollStatus", scrollStatus);

    return {
      maskStatus,
      scrollStatus,
      getScrollStatus,
      showMask,
    };
  },
};
</script>
