/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-09 15:04:53
 * @LastEditors: xx
 * @LastEditTime: 2021-09-21 21:09:48
 */
import "./theme/index.scss";

import notify from "./notify/index";
import XButton from "./botton/Button.vue";
import XInput from "./input/Input.vue";
import XCollapse from "./collapse/Collapse.vue";
import XCollapseItem from "./collapse/CollapseItem.vue";
import XStoreyTitle from "./storey-title/StoreyTitle.vue";
import XSwitch from "./switch/Switch.vue";
import XTag from "./tag/Tag.vue";
import XDivider from "./divider/Divider.vue";
import XDialog from "./dialog/Dialog.vue";

const components = [
  XButton,
  XInput,
  XCollapse,
  XCollapseItem,
  XStoreyTitle,
  XSwitch,
  XTag,
  XDivider,
  XDialog,
];

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
