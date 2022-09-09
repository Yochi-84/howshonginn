<template>
  <div
    :class="[
      'fixed top-1/2 left-1/2 z-50 w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-xl border-[5px]   bg-white py-6 duration-300 md:w-[460px] lg:w-[550px] lg:py-6',
      currentTab === 'Login' ? 'border-primary' : 'border-secondary',
    ]"
    v-show="props.showModal"
  >
    <a
      href="#"
      @click.prevent="closeModal"
      class="mb-2 block px-3 text-right md:px-6"
    >
      <span>
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          class="text-3xl hover:text-danger-dark"
        />
      </span>
    </a>
    <ul class="items-center flex px-3 md:px-6">
      <li
        :class="[
          'w-1/2 cursor-pointer border-b-2 pb-3 text-center duration-300 md:text-lg',
          currentTab === 'Login'
            ? 'border-b-current font-bold text-primary'
            : 'border-b-transparent text-content',
        ]"
        @click="currentTab = 'Login'"
      >
        <font-awesome-icon icon="fa-solid fa-user-alt" class="mr-2" />登入
      </li>
      <li
        :class="[
          'w-1/2 cursor-pointer border-b-2 pb-3 text-center duration-300 md:text-lg',
          currentTab === 'Register'
            ? 'border-b-current font-bold text-secondary'
            : 'border-b-transparent text-content',
        ]"
        @click="currentTab = 'Register'"
      >
        <font-awesome-icon icon="fa-solid fa-user-plus" class="mr-2" />註冊
      </li>
    </ul>

    <transition mode="out-in" :duration="300">
      <keep-alive>
        <component :is="tab[currentTab]" class="px-3 md:px-6" @login="closeModal"></component>
      </keep-alive>
    </transition>
  </div>
</template>
<script setup>
import Login from "@/components/LoginComponent";
import Register from "@/components/RegisterComponent";
import { ref, computed, watch } from "vue";

const emits = defineEmits(["closeModal", "showHigherNoHiddenMask"]);
const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
});

const propsValue = computed(() => props.showModal);

function closeModal() {
  emits("closeModal", false);
}

watch(propsValue, (newV) => {
  emits("showHigherNoHiddenMask", newV);
});

const currentTab = ref("Login");
const tab = {
  Login,
  Register,
};
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
