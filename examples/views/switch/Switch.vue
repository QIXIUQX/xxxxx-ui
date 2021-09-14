<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-15 00:37:22
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-15 01:06:37
-->
<template>
  <div class="">
    <XSwitch v-model="isCheck"></XSwitch>
    <pre>
    value:  Boolean false; 默认值，v-model绑定
    activeColor: String ""; 活动颜色  默认值 153, 153, 153
    inActiveColor: String,""; 非活动颜色
    </pre>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isCheck: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
