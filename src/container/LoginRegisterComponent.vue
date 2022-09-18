<template>
  <ModalForm
    @closeModal="closeModal"
    :class="[currentTab === 'AdminLogin' ? 'border-primary' : 'border-secondary']"
  >
    <ul class="flex items-center px-3 md:px-6">
      <li
        :class="[
          'w-1/2 cursor-pointer border-b-2 pb-3 text-center duration-300 md:text-lg',
          currentTab === 'AdminLogin'
            ? 'border-b-current font-bold text-primary'
            : 'border-b-transparent text-content',
        ]"
        @click="currentTab = 'AdminLogin'"
      >
        <font-awesome-icon icon="fa-solid fa-user-alt" class="mr-2" />登入
      </li>
      <li
        :class="[
          'w-1/2 cursor-pointer border-b-2 pb-3 text-center duration-300 md:text-lg',
          currentTab === 'AdminRegister'
            ? 'border-b-current font-bold text-secondary'
            : 'border-b-transparent text-content',
        ]"
        @click="currentTab = 'AdminRegister'"
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
import AdminLogin from '@/components/AdminLoginComponent';
import AdminRegister from '@/components/AdminRegisterComponent';
import { ref } from 'vue';
import { useStore } from '@/stores/index';

const store = useStore();

function closeModal() {
  store.loginModal = false;
  store.toggleMask(false);
}

const currentTab = ref('AdminLogin');
const tab = {
  AdminLogin,
  AdminRegister,
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
