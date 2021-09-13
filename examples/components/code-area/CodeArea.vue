<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-11 18:12:56
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-11 18:15:52
-->
<template>
  <code class="code-area">
    <slot></slot>
  </code>
</template>

<script>
export default {
  name: "",
};
</script>

<style lang="scss" scoped>
.code-area {
  width: 100%;
  height: max-content;
  > pre {
    // width: 1200px;
    background-color: #2b2b2b;
    color: #bababa;
    font-size: 20px;
  }
}
</style>
