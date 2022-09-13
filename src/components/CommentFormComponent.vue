<template>
  <ModalForm
    @closeModal="closeModal"
    v-show="props.showModal"
    class="w-full border-primary"
  >
    <div class="px-4 pb-2">
      <div class="mb-4 flex items-center">
        <img
          :src="
            store.userInfo.pic !== ''
              ? store.userInfo.pic
              : require('@/assets/image/user_init.jpg')
          "
          :alt="store.userInfo.nickname"
          class="h-8 w-8 rounded-full ring-2 ring-primary-dark duration-300 lg:h-10 lg:w-10"
        />
        <span class="ml-2">{{ store.userInfo.nickname }}</span>
      </div>
      <ckeditor
        :editor="editor"
        :config="editorConfig"
        tag-name="textarea"
        v-model="commentContent"
        placeholder="來分享你的露營體驗吧!"
      ></ckeditor>
    </div>
    <footer
      class="-mx-1 flex justify-between border-t border-t-primary-dark px-4 pt-4"
    >
      <div class="w-1/2 px-1">
        <a
          href="#"
          class="btn btn-danger w-full text-center"
          @click.prevent="clearEditor"
          >重置</a
        >
      </div>
      <div class="w-1/2 px-1">
        <a
          href="#"
          class="btn btn-primary w-full text-center"
          @click.prevent="submitEditor"
          >確認</a
        >
      </div>
    </footer>
  </ModalForm>
</template>
<script setup>
import ModalForm from '@/components/ModalFormComponent';
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/zh.js';
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
// import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import FontColorPlugin from '@ckeditor/ckeditor5-font/src/fontcolor';
// import FontBackgroundColorPlugin from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import { ref, defineComponent } from 'vue';
import { useStore } from '@/stores/index';
import { useRoute } from 'vue-router';
import axios from 'axios';

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(['newComment','closeModal']);
const store = useStore();
const router = useRoute();
const ckeditor = defineComponent(CKEditor.component);
const editor = ClassicEditor;
const commentContent = ref('');
const editorConfig = {
  language: 'zh',
  allowedContent: true,
  toolbar: {
    // plugins: [
    //   EssentialsPlugin,
    //   BoldPlugin,
    //   ItalicPlugin,
    //   FontColorPlugin,
    //   FontBackgroundColorPlugin,
    // ],
    items: [
      'selectAll',
      '|',
      'bold',
      'italic',
      // '|',
      // 'fontColor',
      // 'fontBackgroundColor',
    ],
    shouldNotGroupWhenFull: true
  },
};

function closeModal() {
  emits('closeModal');
}

function clearEditor() {
  commentContent.value = '';
}

function submitEditor() {
  const now = new Date();
  const commentInfo = {
    commentTime: `${now.getFullYear()}/${
        now.getMonth() + 1
      }/${now.getDate()} ${now.getHours()}:${now.getMinutes()}`,
      campID: router.query.id,
      userID: store.userInfo.id.toString(),
      replyID: '',
      content: commentContent.value,
      agree: [],
      disagree: [],
  }
  axios
    .post('https://howshonginn-api.herokuapp.com/comment', commentInfo)
    .then((res) => {
      emits("newComment", res.data)
    })
    .catch((err) => console.log(err));
  clearEditor();
  closeModal();
}
</script>
<style>
.ck-editor__editable {
  height: 50vh;
}

.ck-content p {
  font-size: revert;
}

.ck-content ul,
.ck-content ol {
  list-style: revert;
  margin: revert;
  padding: revert;
}
:root {
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Overrides the default font size in the theme. */
    --ck-font-size-base: 16px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-custom-background: #E9F4EE;
    --ck-custom-foreground: #E3A864;
    --ck-custom-border: hsl(300, 1%, 22%);

    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #88C6A5;
    --ck-color-text: #408560;

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #88C6A5;
    --ck-color-button-default-active-background: #D28226;
    --ck-color-button-default-active-shadow: hsl(270, 2%, 23%);

    --ck-color-button-on-background: var(--ck-custom-foreground);
    --ck-color-button-on-hover-background: #D28226;
    --ck-color-button-on-active-background: #D28226;
    --ck-color-button-on-active-shadow: #D28226;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);
}
</style>
