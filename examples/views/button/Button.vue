<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-11 16:27:25
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-11 16:33:15
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
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="scss" scoped>
.button {
}
</style>
