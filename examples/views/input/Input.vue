<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-11 16:29:44
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-14 18:02:21
-->
<template>
  <div class="input">
    <XInput
      type="text"
      placeholder="测试数据"
      v-model="input"
      @blur="handleblue"
      @focus="handlefocus"
      @change="handleChange"
    ></XInput>
    <XInput
      type="password"
      placeholder="测试数据"
      v-model="input"
      showPassword
    ></XInput>

    <pre>
    type String text 文本框类型
    placeholder String 提示文字
    value String "" 默认值  
    name String "" 文本框name属性
    disabled Boolean false 是否禁用
    clearable Boolean false 是否显示清除按钮
    showPassword Boolean false 是否显示密码按钮
    autocomplete String off 自动保存
    
    blur	在 Input 失去焦点时触发	(event: Event)
    focus	在 Input 获得焦点时触发	(event: Event)
    change	仅在输入框失去焦点或用户按下回车时触发	(value: string | number)
    input	在 Input 值改变时触发	(value: string | number)
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
  methods: {
    handleblue() {
      console.log("handleblue");
    },
    handlefocus() {
      console.log("handlefocus");
    },
    handleChange() {
      console.log("handleChange");
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 900px;
}
</style>
