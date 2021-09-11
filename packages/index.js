/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-09 15:04:53
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-11 16:19:54
 */
import "./theme/index.scss";

import notify from "./notify/index";
import XButton from "./botton/Button.vue";
import XInput from "./input/Input.vue";
import XCollapse from "./collapse/Collapse.vue";
import XCollapseItem from "./collapse/CollapseItem.vue";
import XStoreyTitle from "./storey-title/StoreyTitle.vue";

const components = [XButton, XInput, XCollapse, XCollapseItem, XStoreyTitle];

const install = function(Vue) {
  Vue.prototype.$notify = notify;

  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
};
