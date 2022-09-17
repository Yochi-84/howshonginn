import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia'
import router from "./router";
import { useStore } from "@/stores/index";
import axios from "axios";
import VueAxios from "vue-axios";
import "./assets/css/all.css";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faBars,
  faSearch,
  faLocationDot,
  faUserAlt,
  faUserPlus,
  faFilter,
  faXmark,
  faMap,
  faPhone,
  faPhoneVolume,
  faGlobe,
  faMountainSun,
  faHeart as faHeartFilled,
  faTags,
  faCaretUp,
  faCaretDown,
  faTriangleExclamation,
  faBullhorn,
  faRightFromBracket,
  faCircleCheck,
  faCircleXmark,
  faGear,
  faQuestion,
  faPlus,
  faMinus,
  faFlag,
  faImages,
  faDisplay,
  faTent,
  faPenToSquare,
  faCoins,
  faAnglesLeft,
  faAnglesRight,
  faCheck,
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";

import {
  faHeart,
  faThumbsUp,
  faThumbsDown,
  faCommentDots,
  faFaceSadCry
} from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(
  faBars,
  faSearch,
  faLocationDot,
  faUserAlt,
  faUserPlus,
  faFilter,
  faXmark,
  faMap,
  faPhone,
  faPhoneVolume,
  faGlobe,
  faMountainSun,
  faHeart,
  faHeartFilled,
  faTags,
  faThumbsUp,
  faThumbsDown,
  faCommentDots,
  faCaretUp,
  faCaretDown,
  faTriangleExclamation,
  faBullhorn,
  faRightFromBracket,
  faCircleCheck,
  faCircleXmark,
  faGear,
  faQuestion,
  faFaceSadCry,
  faPlus,
  faMinus,
  faFlag,
  faImages,
  faDisplay,
  faTent,
  faPenToSquare,
  faCoins,
  faAnglesLeft,
  faAnglesRight,
  faCheck,
  faTrashCan
);

const pinia = createPinia();
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(pinia)
  .use(VueAxios, axios)
  .use(router)
  .mount("#app");


router.beforeEach((to,from,next) => {
  if(to.meta.requiresAuth) {
    if(useStore().userInfo.status) {
      next();
    } else {
      useStore().toggleLoginModal();
    }
  } else {
    next();
  }
})

// 跳轉後回到頂部並關閉 mobile navbar
router.afterEach(() => {
  useStore().navStatus = false;
  window.scrollTo(0, 0);
});