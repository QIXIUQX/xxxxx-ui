/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-07-23 15:33:27
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-11 17:42:46
 */
import Vue from "vue";
import notifyComp from "./Notify.vue";
const notifyConstructor = Vue.extend(notifyComp);
let notifyEle = document.createElement("div");
notifyEle.className = "notify-container-wrapper";

export default function notify(opts) {
  const instance = new notifyConstructor({
    data: opts,
  });
  document.body.appendChild(notifyEle);
  instance.$mount();
  notifyEle.appendChild(instance.$el);
  Vue.prototype.$notify = notify;
  return instance;
}
