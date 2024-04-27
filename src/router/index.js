/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-08 17:27:54
 * @LastEditTime: 2023-01-15 21:17:44
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \bitwarden_data_de_duplication\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/duplicate",
      name: "duplicate",
      component: () => import("../views/DuplicateView.vue"),
    },
    {
      path: "/folder",
      name: "folder",
      component: () => import("../views/FolderView.vue"),
    },
    {
      path: "/list",
      name: "list",
      component: () => import("../views/ListView.vue"),
    },
  ],
});

export default router;
