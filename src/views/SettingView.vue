<template>
  <div class="py-20 md:py-34">
    <div class="container">
      <BreadCrumb class="mb-10"></BreadCrumb>
      <div class="flex flex-wrap gap-y-8 md:-mx-4">
        <div class="w-full lg:w-1/2 lg:px-4">
          <div
            class="group relative mx-auto aspect-1 w-2/3 overflow-hidden rounded-full ring-4 ring-primary-dark"
          >
            <img
              :src="currentPic"
              alt="大頭照"
              class="aspect-1 w-full object-cover"
            />
            <div
              class="invisible absolute inset-0 flex aspect-1 w-full cursor-pointer items-center justify-center rounded bg-black/[0.5] opacity-0 duration-300 group-hover:visible group-hover:opacity-100"
              @click="changePicture"
            >
              <span class="text-2xl tracking-widest text-white"
                ><font-awesome-icon
                  icon="fa-solid fa-image"
                  class="mr-2"
                />變更大頭照</span
              >
            </div>
          </div>
        </div>
        <div class="flex w-full flex-col lg:w-1/2 lg:px-4">
          <div class="mb-auto">
            <label
              for="email"
              class="mb-2 block text-lg font-bold text-primary-dark lg:text-xl"
              >Email</label
            >
            <input
              type="text"
              id="email"
              class="pointer-events-none mb-6 w-full rounded border border-black py-1 px-4 read-only:bg-gray-200 read-only:text-gray-500"
              :value="info.email"
              readonly
            />
            <label
              for="nickname"
              class="mb-2 block text-lg font-bold text-primary-dark lg:text-xl"
              >暱稱</label
            >
            <input
              type="text"
              id="nickname"
              class="mb-6 w-full rounded border border-black py-1 px-4"
              v-model="tempModifiedInfo.nickname"
              @keyup="changeNickname"
            />
            <label
              for="password"
              class="mb-2 block text-lg font-bold text-primary-dark lg:text-xl"
              >密碼</label
            >
            <button
              type="text"
              class="btn btn-secondary"
              @click="changePassword"
            >
              變更密碼
            </button>
          </div>
          <div class="flex justify-center">
            <button
              type="button"
              class="btn enabled:btn-primary btn-large mt-6 disabled:bg-gray-300 disabled:text-gray-600"
              @click="modificationSubmit"
              :disabled="hasAnyModification"
            >
              確認變更
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalForm
    @closeModal="closeModal"
    class="border-primary px-6"
    v-if="modalStatus"
  >
    <!-- 變更大頭照 -->
    <div v-if="modalContent === 'pic'">
      <label for="url" class="mb-2 block text-xl font-bold text-primary-dark"
        >圖片 URL</label
      >
      <input
        type="text"
        id="url"
        class="mb-4 w-full rounded border border-black py-1 px-4"
        placeholder="請輸入圖片網址"
        v-model.trim="tempModifiedInfo.pic"
      />
      <button
        type="button"
        class="btn btn-primary relative left-1/2 -translate-x-1/2"
        @click="modificationConfirm"
      >
        確認
      </button>
    </div>
    <!-- 變更密碼 -->
    <div v-else>
      <label
        for="oldPassword"
        class="mb-2 block text-xl font-bold text-primary-dark"
        >舊密碼</label
      >
      <input
        type="password"
        id="oldPassword"
        class="mb-4 w-full rounded border border-black py-1 px-4"
        placeholder="請輸入舊密碼"
        v-model.trim="tempModifiedInfo.oldPassword"
      />
      <label
        for="newPassword"
        class="mb-2 block text-xl font-bold text-primary-dark"
        >新密碼</label
      >
      <input
        type="password"
        id="newPassword"
        class="mb-4 w-full rounded border border-black py-1 px-4"
        placeholder="請輸入新密碼"
        v-model.trim="tempModifiedInfo.newPassword"
        @keyup="checkPassword"
      />
      <label
        for="newPasswordCheck"
        class="mb-2 block text-xl font-bold text-primary-dark"
        >確認新密碼</label
      >
      <input
        type="password"
        id="newPasswordCheck"
        class="mb-6 w-full rounded border border-black py-1 px-4"
        placeholder="請再次確認新密碼"
        ref="newPasswordCheck"
        v-model.trim="tempModifiedInfo.newPasswordCheck"
        @keyup="checkPassword"
      />
      <button
        type="button"
        id="passwordConfirm"
        class="btn enabled:btn-primary relative left-1/2 -translate-x-1/2 disabled:bg-gray-300 disabled:text-gray-600"
        @click="modificationConfirm"
        disabled
      >
        確認變更
      </button>
    </div>
  </ModalForm>
</template>
<script setup>
import BreadCrumb from '@/components/BreadCrumbComponent';
import ModalForm from '@/components/ModalFormComponent';
import { ref, reactive, computed, onMounted } from 'vue';
import { useStore } from '@/stores/index';
import axios from 'axios';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

const store = useStore();
const newPasswordCheck = ref(null); // 確認新密碼的 input 欄位
const info = reactive({});
const modalStatus = ref(false);
let modalContent = ref('pic');
const tempModifiedInfo = reactive({
  nickname: '',
  pic: '',
  oldPassword: '',
  newPassword: '',
  newPasswordCheck: '',
});

const modifiedInfo = reactive({
  nickname: {
    modified: false,
    newValue: '',
  },
  pic: {
    modified: false,
    newValue: '',
  },
  password: {
    modified: false,
    newValue: '',
  },
});

// 顯示的圖片
const currentPic = computed(() => {
  if (modifiedInfo.pic.newValue !== '') {
    return modifiedInfo.pic.newValue;
  } else if (tempModifiedInfo.pic !== '') {
    return tempModifiedInfo.pic;
  } else if (store.userInfo.pic !== '') {
    return store.userInfo.pic;
  } else {
    return require('../assets/image/user_init.jpg');
  }
});

// 有沒有更改資料，有改才能按送出
const hasAnyModification = computed(
  () => Object.values(modifiedInfo).filter((item) => item.modified).length === 0
);

function changeNickname() {
  if (tempModifiedInfo.nickname !== info.nickname) {
    modifiedInfo.nickname.modified = true;
    modifiedInfo.nickname.newValue = tempModifiedInfo.nickname;
  } else {
    modifiedInfo.nickname.modified = false;
  }
}

function changePassword() {
  modalContent.value = 'password';
  showModal();
}

function changePicture() {
  modalContent.value = 'pic';
  showModal();
}

// 新密碼確認
function checkPassword() {
  if (newPasswordCheck.value.value.length > 0) {
    const status =
      tempModifiedInfo.newPassword === tempModifiedInfo.newPasswordCheck;
    if (!status) {
      newPasswordCheck.value.classList.add('bg-danger');
      document.querySelector('#passwordConfirm').setAttribute('disabled', true);
    } else {
      newPasswordCheck.value.classList.remove('bg-danger');
      document.querySelector('#passwordConfirm').removeAttribute('disabled');
    }
  }
}

function showModal() {
  modalStatus.value = true;
  store.toggleMask(true, true, false);
}

function closeModal() {
  modalStatus.value = false;
  store.toggleMask(false);
  modalInit();
}

// 表單初始化
function modalInit() {
  tempModifiedInfo.pic = '';
  tempModifiedInfo.oldPassword = '';
  tempModifiedInfo.newPassword = '';
  tempModifiedInfo.newPasswordCheck = '';
}

function modificationConfirm() {
  if (modalContent.value === 'pic') {
    modifiedInfo.pic.newValue = tempModifiedInfo.pic;
    modifiedInfo.pic.modified = true;
    closeModal();
  } else {
    axios
      .get(
        `${process.env.VUE_APP_API_PATH}/user?id=${store.userInfo.id}&password=${tempModifiedInfo.oldPassword}`
      )
      .then((res) => {
        if (res.data.length > 0) {
          modifiedInfo.password.newValue = tempModifiedInfo.newPassword;
          modifiedInfo.password.modified = true;
          closeModal();
        } else {
          tempModifiedInfo.oldPassword = '';
          createToast(
            {
              title: '溫馨提醒',
              description: '舊密碼好像有錯誤，請再試一次',
            },
            {
              type: 'warning',
              position: 'top-center',
              timeout: 3000,
              toastBackgroundColor: '#D28226',
              showIcon: 'true',
              transition: 'zoom',
            }
          );
        }
      })
      .catch(() => console.error('API 好像掛了，真是抱歉!!!'));
  }
}

function modificationSubmit() {
  const modifiedValue = {};
  if (modifiedInfo.nickname.modified)
    modifiedValue.nickname = modifiedInfo.nickname.newValue;
  if (modifiedInfo.pic.modified) modifiedValue.pic = modifiedInfo.pic.newValue;
  if (modifiedInfo.password.modified)
    modifiedValue.password = modifiedInfo.password.newValue;
  axios
    .patch(
      `${process.env.VUE_APP_API_PATH}/user/${store.userInfo.id}`,
      modifiedValue
    )
    .then(() => {
      // 重新寫入 pinia 與 storage 的資料
      Object.entries(modifiedValue).forEach(
        (item) => (store.userInfo[item[0]] = item[1])
      );
      store.userInfo.mode === 'session'
        ? store.userInfoToSessionStorage()
        : store.userInfoToLocalStorage();

      createToast(
        {
          title: '修改成功',
        },
        {
          type: 'success',
          position: 'top-center',
          timeout: 3000,
          toastBackgroundColor: '#408560',
          showIcon: 'true',
          transition: 'zoom',
        }
      );
    })
    .catch(() => console.error('API 好像掛了，真是抱歉!!!'));
}

onMounted(() => {
  info.email = store.userInfo.email;
  info.nickname = store.userInfo.nickname;
  info.pic = store.userInfo.pic;
  tempModifiedInfo.nickname = store.userInfo.nickname;
});
</script>
