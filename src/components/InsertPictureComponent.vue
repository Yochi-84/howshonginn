<template>
  <div class="xl:px-24">
    <div
      class="mb-4 flex w-full flex-col-reverse items-center gap-x-4 lg:flex-row"
    >
      <div class="w-full flex-grow border border-black bg-gray-200 p-1 lg:p-2">
        <ul class="flex h-40">
          <li
            v-for="(image, index) of uploadImage"
            :key="index"
            class="group relative w-1/4 px-1 lg:px-2"
          >
            <img
              :src="
                image === 'init_pic.jpg'
                  ? require('../assets/image/init_pic.jpg')
                  : image
              "
              :alt="'image' + index"
              :class="[
                'h-full w-full cursor-pointer object-cover object-center duration-300',
                currentSlide === index
                  ? 'ring-2 ring-danger-dark'
                  : 'opacity-60',
              ]"
              @click="slides.goToSlide(index)"
            />
            <button
              type="button"
              class="invisible absolute -right-0.5 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-danger-dark text-xl text-white opacity-0 duration-300 hover:text-secondary-dark group-hover:visible group-hover:opacity-100"
              @click="removeImage(index)"
            >
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
          </li>
        </ul>
      </div>
      <div class="flex flex-shrink-0 gap-x-4 gap-y-4 lg:flex-col">
        <label
          for="file-upload"
          class="btn btn-primary mb-4 cursor-pointer font-bold"
          ><font-awesome-icon
            icon="fa-solid fa-images"
            class="mr-2"
          />上傳照片({{ uploadImage.length }}/4)</label
        >
        <input
          type="file"
          class="hidden"
          id="file-upload"
          accept="image/*"
          @change="upload"
          multiple
        />
        <button
          type="button"
          class="btn btn-danger mb-4 cursor-pointer font-bold"
          @click="clearUpload"
        >
          <font-awesome-icon
            icon="fa-solid fa-trash-can"
            class="mr-2"
          />清空照片
        </button>
      </div>
    </div>
    <div class="w-full">
      <VueperSlides
        ref="slides"
        fade
        fixedHeight="460px"
        :bullets="false"
        :touchable="false"
        :arrows="false"
        class="rounded-lg shadow-lg shadow-gray-400"
        @slide="currentSlide = $event.currentSlide.index"
      >
        <VueperSlide
          v-for="(image, index) of uploadImage"
          :key="index"
          :image="
            image === 'init_pic.jpg'
              ? require('../assets/image/init_pic.jpg')
              : image
          "
          class="overflow-hidden rounded-lg"
        >
        </VueperSlide>
      </VueperSlides>
    </div>
  </div>
</template>
<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import { ref, onDeactivated } from 'vue';

const emits = defineEmits(['campPicture', 'campPictureOrigin']);
const currentSlide = ref(0);
const uploadImage = ref(['init_pic.jpg']);
const uploadOriginImage = ref([]);
const slides = ref(null);

function upload(e) {
  let tempOriginList = []; // 原位址，上傳用
  let tempList = []; // 預覽用
  let fileLength = Math.min(4, e.target.files.length);
  for (let i = 0; i < fileLength; i++) {
    tempOriginList.push(e.target.files[i]);
    const src = URL.createObjectURL(e.target.files[i]);
    tempList.push(src);
  }
  uploadOriginImage.value = tempOriginList;
  uploadImage.value = tempList;
}

function removeImage(index) {
  uploadOriginImage.value.splice(index, 1);
  uploadImage.value.splice(index, 1);
  if (uploadImage.value.length === 0) {
    uploadImage.value.push('init_pic.jpg');
  }
}

function clearUpload() {
  uploadOriginImage.value.length = 0;
  uploadImage.value.length = 0;
  uploadImage.value.push('init_pic.jpg');
}

// 離開元件時將資料傳給父層
onDeactivated(() => {
  emits('campPicture', uploadImage.value);
  emits('campPictureOrigin', uploadOriginImage.value);
});
</script>
