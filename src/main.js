import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia'
import router from "./router";
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
  faFaceSadCry
);

const pinia = createPinia();
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(pinia)
  .use(VueAxios, axios)
  .use(router)
  .mount("#app");

router.afterEach(() => {
  window.scrollTo(0, 0);
});
