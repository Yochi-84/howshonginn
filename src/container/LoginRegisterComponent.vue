<template>
  <ModalForm
    @closeModal="closeModal"
    :class="[currentTab === 'Login' ? 'border-primary' : 'border-secondary']"
  >
    <ul class="flex items-center px-3 md:px-6">
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
        <component
          :is="tab[currentTab]"
          class="px-3 md:px-6"
          @success="closeModal"
        ></component>
      </keep-alive>
    </transition>
  </ModalForm>
</template>
<script setup>
import ModalForm from '@/components/ModalFormComponent';
import Login from '@/components/LoginComponent';
import Register from '@/components/RegisterComponent';
import { ref } from 'vue';
import { useStore } from '@/stores/index';

const store = useStore();

function closeModal() {
  store.loginModal = false;
  store.toggleMask(false);
}

const currentTab = ref('Login');
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
