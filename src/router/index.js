import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      keepAlive: true
    }
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
      requiresAuth: true
    },
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../views/EditView.vue"),
    meta: {
      breadcrumb: [
        {
          name: "首頁",
          link: "/",
        },
        {
          name: "更新營地",
        },
      ],
      requiresAuth: true
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
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/SettingView.vue"),
    meta: {
      breadcrumb: [
        {
          name: "首頁",
          link: "/",
        },
        {
          name: "會員設定"
        }
      ],
      requiresAuth: true
    },
  },
  {
    path: "/favorite",
    name: "favorite",
    component: () => import("../views/FavoriteView.vue"),
    meta: {
      breadcrumb: [
        {
          name: "首頁",
          link: "/",
        },
        {
          name: "我的收藏"
        }
      ],
      requiresAuth: true
    },
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
