<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-09 14:50:36
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-09 19:43:44
-->
<template>
  <div id="app">
    <XButton type="default" style="margin-left:10px" @click="handleBtnClick"
      >默认 按钮</XButton
    >
    <XButton type="primary" style="margin-left:10px">主要 按钮</XButton>
    <XButton type="success" style="margin-left:10px">成功 按钮</XButton>
    <XButton type="info" style="margin-left:10px">信息 按钮</XButton>
    <XButton type="warning" style="margin-left:10px">警告 按钮</XButton>
    <XButton type="error" style="margin-left:10px">错误 按钮</XButton>
    <XButton type="error" style="margin-left:10px" disabled @click="handleClick"
      >禁用 按钮</XButton
    >
    <div style="width:300px">
      <XInput type="text" placeholder="测试数据" v-model="input"></XInput>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    handleBtnClick() {
      console.log(this);
      this.$notify({
        title: "成功提示框",
        message: `成功提示框,试试点右上角的关闭!`,
        duration: 0,
        type: "success",
      });
      this.$notify({
        title: "消息提示框",
        message: `消息提示框,我在4500ms后自动消失`,
        duration: 0,
        type: "info",
      });
      this.$notify({
        title: "警告提示框",
        message: `消息提示框,我在2000ms后自动消失`,
        duration: 0,
        type: "warning",
      });
      this.$notify({
        title: "警告提示框",
        message: `消息提示框,我不会自动消失`,
        duration: 0,
        type: "error",
      });
    },
    handleClick() {
      console.log(1111);
    },
  },
};
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
