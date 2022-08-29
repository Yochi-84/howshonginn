<template>
  <main
    class="md:after:content-normal md:relative md:after:absolute md:after:inset-0 md:after:-z-10 md:after:bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80')] md:after:bg-cover md:after:bg-center md:after:bg-no-repeat"
  >
    <div
      class="container py-8 md:py-12 lg:flex lg:min-h-[calc(100vh-80px)] lg:items-center lg:justify-center"
    >
      <div
        :class="[
          'form-block mx-auto w-5/6 md:rounded-xl md:border-[5px] md:border-primary md:bg-white md:bg-opacity-60 md:py-6 md:px-8 md:backdrop-blur-sm lg:w-2/3 lg:py-6 lg:px-32',
          { 'md:border-danger': currentTab === 'register' },
        ]"
      >
        <ul class="flex items-center">
          <li
            :class="[
              'w-1/2 cursor-pointer border-b-2 pb-3 text-center text-lg',
              currentTab === 'login'
                ? 'border-b-current font-bold text-primary'
                : 'border-b-transparent text-link',
            ]"
            @click="currentTab = 'login'"
          >
            <font-awesome-icon icon="fa-solid fa-user-alt" class="mr-2" />登入
          </li>
          <li
            :class="[
              'w-1/2 cursor-pointer border-b-2 pb-3 text-center text-lg',
              currentTab === 'register'
                ? 'border-b-current font-bold text-danger'
                : 'border-b-transparent text-link',
            ]"
            @click="currentTab = 'register'"
          >
            <font-awesome-icon icon="fa-solid fa-user-plus" class="mr-2" />註冊
          </li>
        </ul>
        <Login></Login>
        <Register></Register>
      </div>
    </div>
  </main>
</template>
<script>
import Login from "@/components/LoginComponent";
import Register from "@/components/RegisterComponent";
import { ref } from "vue";
export default {
  components: {
    Login,
    Register,
  },
  setup() {
    const currentTab = ref("login");
    return {
      currentTab,
    };
  },
};
</script>
