<template>
  <div class="flex flex-col py-6 md:py-4">
    <p
      class="mb-2 bg-danger py-1 text-center text-sm text-danger-dark md:text-base"
      v-show="errorMsg === 'errorInfo'"
    >
      <font-awesome-icon
        icon="fa-solid fa-triangle-exclamation"
        class="mr-1"
      />登入資料有誤，請確認您輸入的資料是否正確
    </p>
    <label for="email" class="mb-2 text-sm md:text-base">信箱</label>
    <input
      type="email"
      id="email"
      placeholder="請輸入電子信箱"
      :class="[
        'mb-6 rounded-sm border border-black bg-white py-2 px-4 placeholder:text-content-light focus:border-primary-dark focus:shadow-around-primary focus:outline-none lg:py-2 lg:px-3',
        {
          'bg-danger outline outline-danger-dark':
            errorMsg === 'emptyEmail' && !loginData.email,
        },
      ]"
      v-model.trim="loginData.email"
    />
    <label for="password" class="mb-2 text-sm md:text-base">密碼</label>
    <input
      type="password"
      id="password"
      placeholder="請輸入密碼"
      :class="[
        'mb-6 rounded-sm border border-black bg-white py-2 px-4 placeholder:text-content-light focus:border-primary-dark focus:shadow-around-primary focus:outline-none lg:py-2 lg:px-3',
        {
          'bg-danger outline outline-danger-dark':
            errorMsg === 'emptyPassword' && !loginData.password,
        },
      ]"
      v-model.trim="loginData.password"
    />
    <div class="mb-6 flex items-center justify-between">
      <div class="flex items-center">
        <input
          type="checkbox"
          id="keepLogin"
          class="mr-2 rounded-sm border border-black bg-white py-2 px-4 accent-primary-dark focus:border-primary-dark focus:outline-none"
          v-model="loginData.keepLogin"
        />
        <label for="keepLogin" class="text-sm lg:text-base">保持登入</label>
      </div>
      <a href="#" class="text-sm text-blue-700 hover:underline lg:text-base"
        >忘記密碼?</a
      >
    </div>
    <a
      href="#"
      class="btn btn-primary btn-large mb-8 self-center md:mb-10"
      @click.prevent="submit"
      >登入</a
    >

    <span
      class="mb-8 flex items-center text-center text-sm font-bold text-gray-600 before:mr-4 before:w-4 before:flex-grow before:border-t-2 before:border-t-gray-600 after:ml-4 after:w-4 after:flex-grow after:border-t-2 after:border-t-gray-600 md:mb-10 md:text-base"
      >或者</span
    >
    <a
      href="#"
      class="btn flex items-center justify-center self-center border border-black bg-white font-normal text-black shadow-sm duration-300 hover:bg-gray-200"
      ><img
        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        alt="Google Icon"
        class="mr-2 h-8 w-8"
      />Google 帳戶登入</a
    >
  </div>
</template>
<script setup>
// import { mapState } from 'pinia';
import { useStore } from '@/stores/index';
import axios from 'axios';
import { ref } from 'vue';

const store = useStore();
const loginData = ref({
  email: '',
  password: '',
  keepLogin: '',
});
const errorMsg = ref('');

function submit() {
  if (!loginData.value.email) {
    errorMsg.value = 'emptyEmail';
  } else if (!loginData.value.password) {
    errorMsg.value = 'emptyPassword';
  } else {
    axios
      .get(
        `${process.env.VUE_APP_API_PATH}/user?email=${loginData.value.email}&password=${loginData.value.password}`
      )
      .then((res) => {
        if (res.data.length > 0) {
          store.userInfo = {
            status: true,
            ...res.data[0],
          };

          delete store.userInfo.password;
          delete store.userInfo.permission;

          store.loginModal = false;
          store.toggleMask(false);
          loginData.value.email = '';
          loginData.value.password = '';

          // 是否保持登入
          if (loginData.value.keepLogin) {
            store.userInfo.mode = 'local';
            store.userInfoToLocalStorage();
          } else {
            store.userInfo.mode = 'session';
            store.userInfoToSessionStorage();
          }
        } else {
          errorMsg.value = 'errorInfo';
        }
      })
      .catch((err) => console.error(err));
  }
}
</script>
