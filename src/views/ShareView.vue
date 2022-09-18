<template>
  <div class="overflow-x-hidden py-20 md:pt-34 md:pb-20">
    <div class="container">
      <BreadCrumb class="mb-6"></BreadCrumb>
      <ul class="mb-8 flex w-full items-center justify-center">
        <InsertStep
          v-for="(step, index) of steps"
          :key="step.name"
          :isActive="step.active"
          :stepIndex="index"
          :isEnd="index === steps.length - 1"
          :maxStep="maxStep"
          @jumpToStep="jumpToStep"
        >
          <template #icon>
            <font-awesome-icon
              :icon="['fa-solid', 'fa-' + step.icon]"
              class="md:mb-2"
            />
          </template>
          <template #name>
            <span class="hidden md:inline">{{ step.name }}</span>
          </template>
        </InsertStep>
      </ul>
      <section class="relative">
        <transition :name="transitionDirection" mode="out-in">
          <h2
            class="mb-2 text-center text-2xl font-bold text-primary-dark md:text-3xl"
            :key="steps[currentStep].name"
          >
            <font-awesome-icon
              :icon="['fa-solid', 'fa-' + steps[currentStep].icon]"
              class="mr-4"
            />
            <span>{{ steps[currentStep].name }}</span>
            <span
              class="ml-2 font-mono text-xl font-bold uppercase text-secondary-dark md:text-2xl"
              >{{ steps[currentStep].english }}</span
            >
          </h2>
        </transition>
        <div class="mb-6 border-b-8 border-double border-b-primary-dark"></div>
        <transition :name="transitionDirection" mode="out-in">
          <keep-alive>
            <component
              :is="stepView[currentStep]"
              class="mb-10"
              @campInfo="getInfo"
              @campPicture="getPicture"
              @campPictureOrigin="getOriginPicture"
              @campTags="getTags"
              :previewInfo="tempAll"
            ></component>
          </keep-alive>
        </transition>
        <div class="flex items-center justify-center gap-x-6 px-3">
          <a
            href="#"
            :class="[
              'btn btn-danger lg:btn-large xl:btn-circle group xl:absolute xl:left-0 xl:top-72 xl:h-18 xl:w-18 xl:text-2xl xl:ring-2 xl:ring-danger-dark',
              { 'invisible opacity-0': currentStep === 0 },
            ]"
            @click.prevent="prevStep"
            ><font-awesome-icon
              icon="fa-solid fa-angles-left"
              class="mr-2 group-hover:animate-left xl:mr-0"
            /><span class="inline xl:hidden">上一步</span></a
          >
          <a
            href="#"
            class="btn btn-primary lg:btn-large xl:btn-circle group xl:absolute xl:top-72 xl:right-0 xl:h-18 xl:w-18 xl:text-2xl xl:ring-2 xl:ring-primary-dark"
            @click.prevent="nextStep"
            v-show="currentStep !== steps.length - 1"
            ><span class="inline xl:hidden">下一步</span
            ><font-awesome-icon
              icon="fa-solid fa-angles-right"
              class="ml-2 group-hover:animate-right xl:ml-0"
          /></a>
          <a
            href="#"
            class="btn btn-secondary lg:btn-large xl:btn-circle group xl:absolute xl:right-0 xl:top-72 xl:h-18 xl:w-18 xl:text-2xl xl:ring-2 xl:ring-secondary-dark"
            @click.prevent="finishStep"
            v-show="currentStep === steps.length - 1"
            ><span class="inline lg:hidden">完成</span
            ><font-awesome-icon
              icon="fa-solid fa-check"
              class="ml-2 group-hover:animate-pulse lg:ml-0"
          /></a>
        </div>
      </section>
    </div>
  </div>
  <LoadingFull bgOpacity="0.7" v-if="loadingStatus">
    <template #title>
      <h2 class="text-3xl font-bold text-primary-dark tracking-widest">{{loadingTitle}}</h2>
    </template>
  </LoadingFull>
</template>
<script setup>
import BreadCrumb from '@/components/BreadCrumbComponent';
import InsertStep from '@/components/InsertStepComponent';
import InsertInfo from '@/components/InsertInfoComponent';
import InsertPicture from '@/components/InsertPictureComponent';
import InsertTag from '@/components/InsertTagComponent';
import InsertPreview from '@/components/InsertPreviewComponent';
import LoadingFull from '@/components/LoadingFullComponent';
import axios from 'axios';
import { ref, computed } from 'vue';
import { useStore } from '@/stores/index';
import router from '@/router';


const loadingStatus = ref(false);
const loadingTitle = ref("");
const store = useStore();
const currentStep = ref(0);
const maxStep = ref(0);
const steps = ref([
  {
    name: '營地資訊',
    english: 'Information',
    icon: 'flag',
    active: true,
  },
  {
    name: '營地照片',
    english: 'Pictures',
    icon: 'images',
    active: false,
  },
  {
    name: '特色標籤',
    english: 'Tags',
    icon: 'tags',
    active: false,
  },
  {
    name: '畫面預覽',
    english: 'Preview',
    icon: 'display',
    active: false,
  },
]);
const transitionDirection = ref('left');

const stepView = [InsertInfo, InsertPicture, InsertTag, InsertPreview];

function jumpToStep(index) {
  transitionDirection.value = index > currentStep.value ? 'left' : 'right';
  steps.value[currentStep.value].active = false;
  currentStep.value = index;
  steps.value[currentStep.value].active = true;
  window.scrollTo(0, 80);
}

function prevStep() {
  transitionDirection.value = 'right';
  steps.value[currentStep.value].active = false;
  currentStep.value -= 1;
  steps.value[currentStep.value].active = true;
  window.scrollTo(0, 80);
}

function nextStep() {
  transitionDirection.value = 'left';
  steps.value[currentStep.value].active = false;
  currentStep.value += 1;
  steps.value[currentStep.value].active = true;
  maxStep.value = currentStep.value;
  window.scrollTo(0, 80);
}

function finishStep() {
  if (tempAll.value.name === '') {
    alert('名稱不可為空');
    jumpToStep(0);
  } else if (tempAll.value.address === '') {
    alert('地址不可為空');
    jumpToStep(0);
  } else if (tempAll.value.county === 'undefined') {
    alert('所在區域不可為空');
    jumpToStep(0);
  } else if (tempAll.value.intro === '') {
    alert('簡介不可為空');
    jumpToStep(0);
  } else if (!tempAll.value.address.includes(tempAll.value.county)) {
    alert('地址與所在區域似乎不符合喔!請再次確認');
    jumpToStep(0);
  } else {
    loadingStatus.value = true;
    upload();
  }
}

const tempInfo = ref({});
const tempPicture = ref(['init_pic.jpg']);
const tempOriginPicture = ref([]);
const tempTags = ref([]);
function getInfo(obj) {
  tempInfo.value = obj;
}

function getPicture(arr) {
  let tempArr = [...arr];
  if (!tempArr.length) {
    tempArr.push('init_pic.jpg');
  }
  tempPicture.value = [...arr];
}
function getOriginPicture(arr) {
  tempOriginPicture.value = [...arr];
}

function getTags(arr) {
  tempTags.value = [...arr];
}

const tempAll = computed(() => {
  return {
    ...tempInfo.value,
    tags: [...tempTags.value],
    image: [...tempPicture.value],
    originPicture: [...tempOriginPicture.value],
  };
});

async function upload() {
  let imageUploadStatus = true; // 記錄圖片上傳狀態
  let infoUploadStatus = true; // 記錄資料上傳狀態/
  const finalInfo = { ...tempAll.value };
  let pictureLink = [];

  // 如果有圖片就上傳
  if (finalInfo.originPicture.length > 0) {
    const config = {
      method: 'POST',
      url: 'https://api.imgur.com/3/image',
      headers: {
        Authorization: `Bearer ${process.env.VUE_APP_IMGUR_TOKEN}`,
      },
    };

    const apiCallList = [];
    for (let i = 0; i < finalInfo.originPicture.length; i++) {
      let form = new FormData();
      form.append('image', finalInfo.originPicture[i]);
      form.append('type', 'file');
      form.append('title', finalInfo.name);
      form.append('album', process.env.VUE_APP_IMGUR_ALBUM);

      config.data = form;

      apiCallList.push(config);
    }

    loadingTitle.value = "圖片上傳中...";
    for (let i of apiCallList) {
      await axios(i)
        .then((res) => {
          pictureLink.push(res.data.data.link)
        })
        .catch(() => (imageUploadStatus = false));
    }

    if (pictureLink.length) {
      // 把圖片網址換成回傳回來的
      finalInfo.image = pictureLink;
    }
  }

  // 原位址上傳完用不到了，刪掉
  delete finalInfo.originPicture;

  // 加入新增時間
  const now = new Date();
  finalInfo.createTime = `${now.getFullYear()}/${
    now.getMonth() + 1
  }/${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;

  loadingTitle.value = "資料上傳中...";
  await axios
    .post(`${process.env.VUE_APP_API_PATH}/campingPlace`, finalInfo)
    .then((res) => res)
    .catch(() => {
      infoUploadStatus = false;
    })
    .finally(() => {
      if (!infoUploadStatus) {
        alert('新增失敗!!暫時我也不知道怎麼辦T_T  Sorry...');
      } else if (infoUploadStatus && !imageUploadStatus) {
        alert('新增營地成功，但是圖片上傳有可能失敗了 QAQ');
      } else {
        alert('新增成功，請等待審核!!(其實不用...)');
      }
      router.push({ name: 'home' });
    });
}
</script>
<style scoped>
.left-enter-active,
.left-leave-active {
  transition: 0.3s ease;
}

.left-enter-from,
.left-leave-to {
  opacity: 0;
}

.left-leave-to {
  transform: translateX(-40%);
}

.left-enter-from {
  transform: translateX(40%);
}

.right-enter-active,
.right-leave-active {
  transition: 0.5s ease;
}

.right-enter-from,
.right-leave-to {
  opacity: 0;
}

.right-leave-to {
  transform: translateX(40%);
}

.right-enter-from {
  transform: translateX(-40%);
}
</style>
