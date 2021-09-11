<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-07 17:07:11
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-11 16:22:03
-->
<template>
  <header class="storey-title">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "XStoreyTitle",
};
</script>

<style lang="scss" scoped>
.storey-title {
  padding-left: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 20px;
  border-bottom: 1px solid #e4e7ed;
}
</style>
