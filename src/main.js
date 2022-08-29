import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
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
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faBars, faSearch, faLocationDot, faUserAlt, faUserPlus);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
