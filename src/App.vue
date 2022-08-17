<template>
  <Navbar></Navbar>
  <router-view />
  <Footer></Footer>
</template>
<script>
import Navbar from "@/components/NavbarComponent";
import Footer from "@/components/FooterComponent";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style lang="scss">
// #app {
// }
</style>
