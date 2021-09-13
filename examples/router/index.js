/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-09 14:50:36
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-11 18:18:06
 */
import Vue from "vue";
import VueRouter from "vue-router";
const Button = () => import("../views/button/Button.vue");
const Home = () => import("../views/home/Home.vue");
const Input = () => import("../views/input/Input.vue");
const Collapse = () => import("../views/collapse/Collpase.vue");
const Notify = () => import("../views/notify/Notify.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/button",
    component: Button,
  },
  {
    path: "/input",
    component: Input,
  },
  {
    path: "/collapse",
    component: Collapse,
  },
  {
    path: "/notify",
    component: Notify,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
