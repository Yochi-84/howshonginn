<template>
  <div class="flex flex-col py-6 md:py-4">
    <p
      class="mb-2 bg-danger py-1 text-center text-sm text-danger-dark md:text-base"
      v-show="errorMsg !== ''"
    >
      <font-awesome-icon
        icon="fa-solid fa-triangle-exclamation"
        class="mr-1"
      />{{ errorMsg }}
    </p>
    <label for="email" class="mb-2 text-sm lg:text-base">信箱</label>
    <input
      type="email"
      id="email"
      placeholder="請輸入電子信箱"
      :class="[
        'mb-4 rounded-sm border border-black bg-white py-2 px-4 placeholder:text-content-light focus:border-secondary focus:shadow-around-secondary focus:outline-none lg:py-2 lg:px-3',
        {
          'bg-danger outline outline-danger-dark':
            errorMsg.includes('信箱') && !registerData.email,
        },
      ]"
      v-model.trim="registerData.email"
    />
    <label for="nickname" class="mb-2 text-sm lg:text-base"
      >暱稱<span
        :class="[
          'ml-2 text-sm',
          nicknameStatus ? 'text-primary-dark' : 'text-danger-dark',
        ]"
        v-show="registerData.nickname"
        ><font-awesome-icon
          :icon="[
            'fa-solid',
            nicknameStatus ? 'fa-circle-check' : 'fa-circle-xmark',
          ]"
          class="mr-1"
        />{{ nicknameStatus ? '可使用' : '已被使用' }}</span
      ></label
    >
    <input
      type="text"
      id="nickname"
      placeholder="請輸入暱稱"
      :class="[
        'mb-4 rounded-sm border border-black bg-white py-2 px-4 placeholder:text-content-light focus:border-secondary focus:shadow-around-secondary focus:outline-none lg:py-2 lg:px-3',
        {
          'bg-danger outline outline-danger-dark':
            errorMsg.includes('暱稱') && !registerData.nickname,
        },
      ]"
      v-model.trim.lazy="registerData.nickname"
      @change="checkNickname"
    />
    <label for="password" class="mb-2 text-sm lg:text-base">密碼</label>
    <input
      type="password"
      id="password"
      placeholder="請輸入密碼"
      :class="[
        'mb-4 rounded-sm border border-black bg-white py-2 px-4 placeholder:text-content-light focus:border-secondary focus:shadow-around-secondary focus:outline-none lg:py-2 lg:px-3',
        {
          'bg-danger outline outline-danger-dark':
            errorMsg.includes('密碼') && !registerData.password,
        },
      ]"
      v-model.trim="registerData.password"
    />
    <label for="passwordCheck" class="mb-2 text-sm lg:text-base"
      >確認密碼</label
    >
    <input
      type="password"
      id="passwordCheck"
      placeholder="請再次輸入密碼"
      class="mb-9 rounded-sm border border-black bg-white py-2 px-4 placeholder:text-content-light focus:border-secondary focus:shadow-around-secondary focus:outline-none lg:py-2 lg:px-3"
      v-model.trim="checkPassword"
    />

    <a
      href="#"
      class="btn btn-secondary btn-large self-center"
      @click.prevent="register"
      >註冊</a
    >
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useStore } from '@/stores/index';

const store = useStore();
const registerData = ref({
  email: '',
  nickname: '',
  password: '',
});
const checkPassword = ref('');
const nicknameStatus = ref('false');
const errorMsg = ref('');

const api = axios.create({
  baseURL: `https://howshonginn-api.herokuapp.com/`,
});
function register() {
  if (registerData.value.email === '') {
    errorMsg.value = '請輸入註冊信箱';
  } else if (registerData.value.nickname === '') {
    errorMsg.value = '請輸入暱稱';
  } else if (registerData.value.password === '') {
    errorMsg.value = '請輸入密碼';
  } else if (registerData.value.password !== checkPassword.value) {
    errorMsg.value = '二次輸入密碼不符合，請再次確認';
    registerData.value.password = '';
    checkPassword.value = '';
  } else {
    api
      .get(`user?email=${registerData.value.email}`)
      .then((res) => {
        if (res.data.length > 0) {
          errorMsg.value = '此信箱已被註冊，請再次確認';
        } else if (res.data.length === 0 && nicknameStatus.value) {
          const data = {
            ...registerData.value,
            permission: 'normal',
            pic: '',
            favorite: [],
          };
          api
            .post('user', data)
            .then(() => {
              store.userInfo = {
                status: true,
                ...data,
              };

              delete store.userInfo.password;
              delete store.userInfo.permission;

              store.loginModal = false;
              store.toggleMask(false);
              store.userInfoToSessionStorage();
            })
            .catch((err) => console.log(err));
        } else {
          errorMsg.value = '此暱稱已被使用，請嘗試更換暱稱';
        }
      })
      .catch((err) => console.log(err));
  }
}
function checkNickname() {
  api
    .get(`user?nickname=${registerData.value.nickname}`)
    .then((res) => {
      if (res.data.length > 0) {
        nicknameStatus.value = false;
      } else {
        nicknameStatus.value = true;
      }
    })
    .catch((err) => console.log(err));
}
</script>
