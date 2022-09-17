import { defineStore } from 'pinia';
import axios from 'axios';
import router from '@/router';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_PATH
});
export const useStore = defineStore('main', {
  state: () => {
    return {
      firstEnter: true,
      navStatus: false,
      userInfo: { status: false },
      loginModal: false,
      mask: {
        status: false,
        'z-index': 20,
        'lg-hidden': true,
      },
      filterMode: 'keyword'
    }
  },
  getters: {
    // doubleCount: (state) => state.counter * 2,
    //doubleCount(state){
    //  console.log(this,'想要在getter中獲取該store的其他內容則不能用箭頭函數，')
    //  return state.counter * 2
    //},
  },
  actions: {
    /**
     * 保持登入，資料存入 localStorage
     */
    userInfoToLocalStorage() {
      localStorage.setItem("userInfo", JSON.stringify(this.userInfo))
    },
    /**
     * 不保持登入，資料存入 sessionStorage
     */
    userInfoToSessionStorage() {
      sessionStorage.setItem("userInfo", JSON.stringify(this.userInfo))
    },
    getUserInfo() {
      if (sessionStorage.getItem("userInfo")) {
        this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      } else if (localStorage.getItem("userInfo")) {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
      }
    },
    clearUserInfo() {
      this.userInfo.mode === 'session' ? sessionStorage.removeItem("userInfo") : localStorage.removeItem("userInfo");
    },
    /**
     * 彈出登入互動視窗
     */
    toggleLoginModal() {
      this.loginModal = true;
      this.toggleMask(true, true, false);
    },
    toggleFavorite(id) {
      // 如果沒登入，彈出 login modal
      if (!this.userInfo.status) {
        this.toggleLoginModal();
      } else {
        const index = this.userInfo.favorite.indexOf(id);
        if (index > -1) {
          this.userInfo.favorite.splice(index, 1);
        } else {
          this.userInfo.favorite.push(id);
        }

        // TODO: favorite array 處理
        api.get('/user')
          .then(res => console.log(res.data))
          .catch(err => console.log(err))

        api.patch(`/user/${this.userInfo.id}`, { favorite: this.userInfo.favorite })
          .then(res => res.data)
          .catch(err => console.log(err));

        this.userInfo.mode === 'session' ? sessionStorage.setItem("userInfo", JSON.stringify(this.userInfo)) : localStorage.setItem("userInfo", JSON.stringify(this.userInfo))
      }
    },
    /**
     * 切換遮罩
     * @param {boolean} status - 狀態
     * @param {boolean} [higherZ = false]  - 較高的 z-index
     * @param {boolean} [hidden = true] - lg 時是否隱藏
     */
    toggleMask(status, higherZ = false, hidden = true) {
      this.mask.status = status;
      this.mask['z-index'] = higherZ ? 40 : 20;
      this.mask['lg-hidden'] = hidden;
    },
    /**
     *
     * @param {string} mode - 篩選方式 ('keyword' 或 'filter')
     */
    toggleFilterMode(mode = "keyword") {
      if(mode === 'keyword') {
        this.filterMode = mode;
      } else if(mode === 'filter') {
        this.filterMode = mode;
        router.replace({'query': null});
      } else {
        console.error('toggleFilterMode(mode) - 未知參數');
      }
    }
  }
})
