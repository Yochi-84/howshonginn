<template>
  <Navbar></Navbar>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/NavbarComponent.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
  },
};
</script>
