import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/list",
    name: "list",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListView.vue"),
    meta: {
      breadcrumb: [
        {
          name: "首頁",
          link: "/",
        },
        {
          name: "所有營地",
        },
      ],
    },
  },
  {
    path: "/share",
    name: "share",
    component: () => import("../views/ShareView.vue"),
    meta: {
      breadcrumb: [
        {
          name: "首頁",
          link: "/",
        },
        {
          name: "分享營地",
        },
      ],
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
    meta: {
      breadcrumb: [
        {
          name: "首頁",
          link: "/",
        },
        {
          name: "聯絡我們",
        },
      ],
    },
  },
  {
    path: "/info",
    name: "info",
    component: () => import("../views/InfoView.vue"),
    meta: {
      breadcrumb: [
        {
          name: "首頁",
          link: "/",
        },
        {
          name: "所有營地",
          link: "/list",
        },
        {
          name: "營地資訊",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
