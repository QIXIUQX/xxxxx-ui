/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-09 14:50:36
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-14 13:55:37
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import XUI from "../packages/index";

import "./assets/scss/index.scss";

// import XUI from "xxxxx-ui"; import
// "xxxxx-ui/dist/xxxxx-ui.css"; Vue.use(XUI);
Vue.config.productionTip = false;
Vue.use(XUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
