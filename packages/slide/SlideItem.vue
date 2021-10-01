<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: xx
 * @Date: 2021-09-25 00:51:01
 * @LastEditors: xx
 * @LastEditTime: 2021-10-01 17:16:51
-->
<template>
  <div
    class="x-slider-item"
    :style="{
      width: itemWidth + 'px',
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "XSlideItem",
  computed: {
    itemWidth() {
      return this.$parent.sliderStyle.width / this.$parent.itemLens;
    },
  },
};
</script>

<style lang="scss">
.x-slider-item {
  display: inline-block;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
