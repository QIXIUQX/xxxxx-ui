<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-11 16:27:25
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-15 02:13:01
-->
<template>
  <div class="button">
    <XButton type="default" style="margin-left:10px">默认 按钮</XButton>
    <XButton type="primary" style="margin-left:10px">主要 按钮</XButton>
    <XButton type="success" style="margin-left:10px">成功 按钮</XButton>
    <XButton type="info" style="margin-left:10px">信息 按钮</XButton>
    <XButton type="warning" style="margin-left:10px">警告 按钮</XButton>
    <XButton type="error" style="margin-left:10px">错误 按钮</XButton>
    <XButton type="error" style="margin-left:10px" disabled>禁用 按钮</XButton>
    <div>
      <code> </code>
    </div>
    <pre v-text="btnStr"></pre>
    <div>
      <pre>
      type String primary 按钮类型 default primary success info warning error
      disabled Boolean false 是否禁用
      click 事件
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      btnStr: `
      <XButton type="default">默认 按钮</XButton>
      <XButton type="primary">主要 按钮</XButton>
      <XButton type="success">成功 按钮</XButton>
      <XButton type="info">信息 按钮</XButton>
      <XButton type="warning">警告 按钮</XButton>
      <XButton type="error">错误 按钮</XButton>
      <XButton type="error" disabled>禁用 按钮</XButton>
      `,
    };
  },
};
</script>

<style lang="scss" scoped>
.button {
}
</style>
