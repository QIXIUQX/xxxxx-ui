<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: xx
 * @Date: 2021-09-25 01:07:29
 * @LastEditors: xx
 * @LastEditTime: 2021-10-01 17:40:22
-->
<template>
  <ul class="x-dot-wrapper">
    <li
      v-for="(item, i) in itemLens"
      :key="i"
      class="trigger-item"
      @click="handleTriggerClick(i)"
      :class="{
        on: curIdx == i,
      }"
    ></li>
  </ul>
</template>

<script>
export default {
  name: "",
  props: {
    itemLens: {
      type: Number,
      default: 0,
    },
    curIdx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    handleTriggerClick(i) {
      this.$emit("triggerClick", i);
    },
  },
};
</script>

<style lang="scss" scoped>
.x-dot-wrapper {
  position: absolute;

  left: 50%;
  bottom: 1%;
  transform: translate(-50%, -50%);
  width: max-content;
  z-index: 999;
  height: 20px;
  .trigger-item {
    display: inline-block;
    margin: 0 5px;
    padding: 2px 5px;
    width: 30px;
    background-color: rgba(240, 240, 240, 0.3);
    border-radius: 3px;

    cursor: pointer;
  }
  .on {
    background-color: #fff;
  }
}
</style>
