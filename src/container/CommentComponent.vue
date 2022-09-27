<template>
  <div class="container">
    <div
      class="mb-8 flex items-end justify-between border-b-8 border-double border-b-primary-dark"
    >
      <h2
        class="relative pl-12 text-3xl font-bold tracking-widest text-primary-dark md:text-4xl"
      >
        評論
      </h2>
      <a
        href="#"
        @click.prevent="showModal"
        class="btn btn-primary rounded-none rounded-tl-lg"
        v-show="commentList.length > 0"
        ><font-awesome-icon icon="fa-solid fa-plus" class="mr-2" />發表評論</a
      >
    </div>
    <ul v-if="commentList.length > 0" class="divide-y divide-gray-300">
      <li v-for="(comment, index) of commentList" :key="comment.id">
        <div class="px-4 pt-4">
          <!-- 評論者資訊 -->
          <div class="mb-4 flex items-center gap-x-4">
            <img
              :src="userList[comment.userID].pic"
              alt=""
              class="h-12 w-12 rounded-full lg:h-16 lg:w-16"
            />
            <div>
              <h4 class="font-bold">{{ userList[comment.userID].nickname }}</h4>
              <small class="text-sm text-content-light">{{
                comment.commentTime
              }}</small>
            </div>
          </div>
          <!-- 評論內容 -->
          <div class="mb-4 text-content" v-html="comment.content"></div>
          <!-- 讚踩按鈕 -->
          <div class="mb-4 text-right md:mb-6">
            <button
              type="button"
              class="btn btn-primary mr-4"
              @click="agree(true, comment.id, comment.agree)"
            >
              <font-awesome-icon
                icon="fa-regular fa-thumbs-up"
                class="mr-2"
              /><span class="hidden md:inline">贊同(</span
              >{{ comment.agree.length }}<span class="hidden md:inline">)</span>
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="agree(false, comment.id, comment.disagree)"
            >
              <font-awesome-icon
                icon="fa-regular fa-thumbs-down"
                class="mr-2"
              /><span class="hidden md:inline">不贊同(</span
              >{{ comment.disagree.length
              }}<span class="hidden md:inline">)</span>
            </button>
          </div>
          <!-- 回覆 -->
          <div
            class="mb-0.5 cursor-pointer text-sm text-content-light md:pl-10 md:text-base"
          >
            共
            {{ replyList.filter((item) => item.replyID == comment.id).length }}
            則回覆<font-awesome-icon
              icon="fa-solid fa-caret-up"
              :class="[
                'ml-1 md:ml-2',
                {
                  hidden:
                    replyList.filter((item) => item.replyID == comment.id)
                      .length === 0,
                },
              ]"
            />
          </div>
          <ul class="md:pl-10">
            <li
              class="border-l-4 py-4 pl-4 odd:border-l-primary-dark odd:bg-primary-light even:border-l-secondary-dark even:bg-secondary-light md:flex md:items-center md:gap-x-4"
              v-for="reply of replyList.filter(
                (item) => item.replyID == comment.id
              )"
              :key="reply.id"
            >
              <div class="mb-4 flex items-center gap-x-4 md:mb-0">
                <img
                  :src="userList[reply.userID].pic"
                  alt=""
                  class="h-12 w-12 rounded-full lg:h-14 lg:w-14"
                />
                <div>
                  <h4 class="font-bold">
                    {{ userList[reply.userID].nickname }}
                  </h4>
                  <small class="text-sm text-content-light">{{
                    reply.commentTime
                  }}</small>
                </div>
              </div>
              <div class="text-content">
                <p>{{ reply.content }}</p>
              </div>
            </li>
          </ul>
          <!-- 回覆 Input -->
          <div class="mb-1 overflow-hidden md:pl-10">
            <div class="flex items-center rounded-b-lg bg-gray-300 px-4 py-2">
              <span class="mr-2 block flex-shrink-0"
                ><font-awesome-icon
                  icon="fa-regular fa-comment-dots"
                  class="mr-1"
                />回覆:</span
              >
              <input
                type="text"
                class="w-full rounded-sm border border-black py-1 px-4"
                placeholder="有什麼想說的嗎?"
                v-model.trim="comment.currentReply"
                @keydown.enter.exact="reply(index)"
              />
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div v-else class="py-4 text-center md:py-8">
      <h3 class="mb-2 text-xl font-bold md:mb-4 md:text-2xl">
        目前還沒有任何評論喔~~~
      </h3>
      <p class="mb-4 md:mb-6 md:text-lg">要不要來發表一下呢？</p>
      <button type="button" @click="showModal" class="btn btn-large btn-primary"
        ><font-awesome-icon
          icon="fa-regular fa-comment-dots"
          class="mr-2"
        />發表評論</button
      >
    </div>
  </div>
  <CommentForm
    :showModal="commentModalStatus"
    @closeModal="closeModal"
    @newComment="newComment"
  ></CommentForm>
</template>
<script setup>
import CommentForm from '@/components/CommentFormComponent';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useStore } from '@/stores/index';

const props = defineProps({
  id: {
    type: String,
    default: '0',
  },
});
const store = useStore();
// 因為評論和回覆寫在同一個 api ，所以抓回來的時候要先分開
const commentList = ref([]); // 評論
const replyList = ref([]); // 回覆
const userList = ref([]);
const commentModalStatus = ref(false);

const api = axios.create({ baseURL: process.env.VUE_APP_API_PATH });

function showModal() {
  if (!store.userInfo.status) {
    store.toggleLoginModal();
  } else {
    commentModalStatus.value = true;
    store.toggleMask(true, true, false);
  }
}
function closeModal() {
  commentModalStatus.value = false;
  store.toggleMask(false);
}

function newComment(obj) {
  commentList.value.push(obj);
}

/**
 * @param {Boolean} agree - 是否贊同
 * @param {Number} id - 評論 id
 * @param {Array} list - 贊同的會員 id 列表
 */
function agree(agree, id, list) {
  if (!store.userInfo.status) {
    store.toggleLoginModal();
  } else {
    if (list.includes(store.userInfo.id)) {
      // 移除 user id
      list.splice(list.indexOf(store.userInfo.id), 1);
    } else {
      // 加入user id
      list.push(store.userInfo.id);
    }

    let newList = {};
    agree ? (newList.agree = list) : (newList.disagree = list);

    api
      .patch(`/comment/${id}`, newList)
      .catch(() => console.error('API 好像掛了，真是抱歉!!'));
  }
}

function reply(index) {
  const now = new Date();
  const replyComment = commentList.value[index];
  // 確認是否已登入
  if (!store.userInfo.status) {
    store.toggleLoginModal();
  } else {
    if (replyComment.currentReply !== '') {
      const replyInfo = {
        commentTime: `${now.getFullYear()}/${
          now.getMonth() + 1
        }/${now.getDate()} ${now.getHours()}:${now.getMinutes()}`,
        campID: replyComment.campID,
        userID: store.userInfo.id.toString(),
        replyID: replyComment.id,
        content: replyComment.currentReply,
        agree: [],
        disagree: [],
      };

      api
        .post('/comment', replyInfo)
        .then((res) => {
          replyList.value.push(res.data);
          commentList.value[index].currentReply = '';
        })
        .catch((err) => console.error(err));
    }
  }
}

const getComment = () => api.get(`/comment/?campID=${props.id}`);
const getUser = () => api.get(`/user`);

onMounted(() => {
  axios
    .all([getComment(), getUser()])
    .then(
      axios.spread((acct, perms) => {
        acct.data.forEach((item) => {
          if (!item.replyID) {
            item.currentReply = '';
            commentList.value.push(item);
          } else {
            replyList.value.push(item);
          }
        });

        userList.value = perms.data.reduce(
          (acc, cur) => ({ ...acc, [cur.id]: cur }),
          {}
        );
      })
    )
    .catch((err) => console.error(err));
});
</script>
