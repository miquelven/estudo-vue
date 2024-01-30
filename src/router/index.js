import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
const lazyLoad = (e) => import(`../pages/${e}`);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/group",
    name: "Group",
    component: lazyLoad("Group.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: lazyLoad("NotFound.vue"),
  },
  {
    path: "/funcionario/:id",
    name: "funcionario",
    component: lazyLoad("Funcionario.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
