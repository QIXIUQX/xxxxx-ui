<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-15 00:37:22
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-15 13:47:53
-->
<template>
  <div class="">
    <XSwitch v-model="isCheck" @change="handleChange"></XSwitch>
    <XSwitch
      v-model="isCheck"
      activeColor="green"
      inActiveColor="red"
    ></XSwitch>
    <pre v-text="str"></pre>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isCheck: false,
      str: `
      <XSwitch v-model="isCheck"></XSwitch>

      <XSwitch
        v-model="isCheck"
        activeColor="green"
        inActiveColor="red"
      >
      </XSwitch>



      value:  Boolean false; 默认值，v-model绑定
      activeColor: String ""; 活动颜色  默认值 153, 153, 153
      inActiveColor: String,""; 非活动颜色
      change 状态发生改变时候触发
      `,
    };
  },
  methods: {
    handleChange(newValue) {
      console.log(("newValue", newValue));
    },
  },
};
</script>

<style lang="scss" scoped></style>
