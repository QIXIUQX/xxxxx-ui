<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-11 16:29:44
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-14 10:04:12
-->
<template>
  <div class="input">
    <XInput
      type="text"
      placeholder="测试数据"
      v-model="input"
      showPassword
    ></XInput>
    <XInput type="password" placeholder="测试数据" v-model="input"></XInput>

    <pre>
    type String text 文本框类型
    placeholder String 提示文字
    value String "" 默认值  
    name String "" 文本框name属性
    disabled Boolean false 是否禁用
    clearable Boolean false 是否显示清除按钮
    showPassword Boolean false 是否显示密码按钮
    autocomplete String off 自动保存
    
    </pre>
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
