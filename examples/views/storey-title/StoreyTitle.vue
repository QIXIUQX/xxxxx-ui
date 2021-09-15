<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-15 13:28:15
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-15 13:31:07
-->
<template>
  <div class="storey-title">
    <XStoreyTitle>
      <div>左侧标题</div>
      <div>右侧标题</div>
    </XStoreyTitle>
    <pre></pre>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      str: `
    <XStoreyTitle>
      <div>123</div>
      <div>456</div>
    </XStoreyTitle>
          `,
    };
  },
};
</script>

<style lang="scss" scoped></style>
