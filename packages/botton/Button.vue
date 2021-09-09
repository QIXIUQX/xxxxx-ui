<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-09 15:12:27
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-09 17:59:20
-->
<template>
  <!-- <button :class="`x-btn x-btn-${type} is-disabled`" type="button" @click="handleBtnClick"> -->
  <button
    :class="[
      'x-btn',
      `x-btn-${type}`,
      {
        'is-disabled': disabled,
      },
    ]"
    type="button"
    @click="handleBtnClick"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "XButton",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    handleBtnClick() {
      if (!this.disabled) {
        this.$emit("click");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
