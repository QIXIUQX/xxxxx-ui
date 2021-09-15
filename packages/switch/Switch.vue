<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-15 00:35:55
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-15 13:42:52
-->
<template>
  <label class="x-switch" @click="handleSwitchClick">
    <span class="x-switch-core" :class="{ 'is-check': value }" ref="core">
      <span class="x-switch-button"></span>
    </span>
  </label>
</template>

<script>
export default {
  name: "XSwitch",
  props: {
    value: {
      type: Boolean,
      default() {
        return false;
      },
    },
    activeColor: {
      type: String,
      default() {
        return "";
      },
    },
    inActiveColor: {
      type: String,
      default() {
        return "";
      },
    },
  },
  methods: {
    handleSwitchClick() {
      this.$emit("input", !this.value);
      this.$emit("change");
      this.$nextTick(() => {
        this.setColor();
      });
    },
    setColor() {
      if (this.activeColor || this.inActiveColor) {
        let color = this.value ? this.activeColor : this.inActiveColor;
        this.$refs.core.style.backgroundColor = color;
      }
    },
  },
  mounted() {
    this.setColor();
  },
};
</script>

<style lang="scss">
.x-switch {
  display: flex;
  align-items: center;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  .x-switch-core {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #999;
    box-sizing: border-box;
    transition: all 0.3s ease;
    .x-switch-button {
      position: absolute;
      left: 1px;
      top: 1px;
      width: 18px;
      height: 18px;
      background-color: #fff;
      border-radius: 10px;
      transition: all 0.2s;
    }
  }
  .is-check {
    background-color: #379aff;
    transition: all 0.3s ease;
    .x-switch-button {
      transform: translateX(20px);
    }
  }
}
</style>
