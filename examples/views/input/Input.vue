<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-11 16:29:44
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-11 16:43:53
-->
<template>
  <div class="input">
    <XInput type="text" placeholder="测试数据" v-model="input"></XInput>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 900px;
}
</style>
