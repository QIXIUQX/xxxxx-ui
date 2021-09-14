<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-09 18:13:52
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-14 10:08:54
-->
<template>
  <div
    class="x-input"
    :class="{
      'x-ui--suffix': showSuffix,
    }"
  >
    <input
      :class="['x-input-inner ', { 'is-disabled': disabled }]"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :value="value"
      :name="name"
      :disabled="disabled"
      :autocomplete="autocomplete"
      @input="handleInput"
    />
    <span class="x-ui-suffix" @click="handlePassword" v-if="showPassword">
      <i class="iconfont icon-eye-open" v-if="passwordVisible"></i>
      <i class="iconfont icon-eye-closed" v-if="!passwordVisible"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "XInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default() {
        return "";
      },
    },
    value: {
      type: String,
      default() {
        return "";
      },
    },
    name: {
      type: String,
      default() {
        return "";
      },
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      },
    },
    showPassword: {
      type: Boolean,
      default() {
        return false;
      },
    },
    autocomplete: {
      type: String,
      default() {
        return "off";
      },
    },
  },
  computed: {
    showSuffix() {
      return this.showPassword;
    },
  },
  data() {
    return {
      passwordVisible: false,
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>

<style lang="scss" scoped></style>
