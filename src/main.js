import { createApp } from "vue";
import App from "./App.vue";
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
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faBars,
  faSearch,
  faLocationDot,
  faUserAlt,
  faUserPlus,
  faFilter,
  faXmark
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueAxios, axios)
  .use(router)
  .mount("#app");
