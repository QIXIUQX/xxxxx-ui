<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-09 18:13:52
 * @LastEditors: xx
 * @LastEditTime: 2021-10-03 02:15:16
-->
<template>
  <div
    class="x-input"
    :class="{
      'x-ui--suffix': showSuffix,
    }"
  >
    <input
      v-if="type != 'textarea'"
      :class="['x-input-inner ', { 'is-disabled': disabled }]"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :value="value"
      :name="name"
      :disabled="disabled"
      :autocomplete="autocomplete"
      @input="handleInput"
      @blur="handleBlur"
      @focus="handleFocus"
      @keyup.enter="handleKeyUpEnter"
      ref="inner"
    />
    <textarea
      v-else
      class="x-textarea"
      :style="`resize: ${resize};`"
    ></textarea>
    <span
      class="x-ui-suffix"
      @click="handlePassword"
      v-if="showPassword && type != 'textarea'"
    >
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
    resize: {
      type: String,
      default() {
        return "both";
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
    handleBlur() {
      this.$emit("blur");
      this.$emit("change");
    },
    handleFocus() {
      this.$emit("focus");
      this.$emit("change");
    },
    handleKeyUpEnter() {
      // this.$emit("change");
      this.$refs.inner.blur();
    },
  },
};
</script>

<style lang="scss" scoped></style>
