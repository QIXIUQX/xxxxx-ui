<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-15 17:27:26
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-15 17:45:28
-->
<template>
  <div class="">
    <XDivider>正文</XDivider>
    <pre v-text="str"></pre>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      str: `
       <XDivider>正文</XDivider>
       `,
    };
  },
};
</script>

<style lang="scss" scoped></style>
