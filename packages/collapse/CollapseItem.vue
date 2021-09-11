<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-08 12:48:40
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-11 16:52:27
-->
<template>
  <div class="x-ui-collapse-item">
    <div class="x-ui-collapse-item-title" @click="handleCollapseItemClick">
      <slot name="title">
        {{ title }}
      </slot>
      <i
        class="iconfont icon-arrow-right icon-right"
        :class="{
          'is-active': hasShow,
        }"
      ></i>
    </div>

    <div class="x-ui-collapse-item-wrap" v-show="hasShow">
      <div class="item-content">
        <slot>content</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XCollapseItem",
  props: {
    title: {
      type: String,
      default: "",
    },
    name: {
      type: [String, Number],
      default: "",
    },
  },
  inject: ["collapse"],
  computed: {
    hasShow() {
      return this.collapse.value.indexOf(this.name) > -1;
    },
  },
  methods: {
    handleCollapseItemClick() {
      console.log(this.name);
      console.log(this.$slots);
      this.collapse.$emit("itemChange", this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.x-ui-collapse-item {
  border-bottom: 1px solid #ebeef5;
  .x-ui-collapse-item-title {
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    color: #303133;
    cursor: pointer;
    // border-bottom: 1px solid #ebeef5;
    font-size: 13px;
    font-weight: 500;
    transition: border-bottom-color 0.3s;
    outline: none;
    i {
      margin: 0 8px 0 auto;
      transition: transform 0.3s;
      font-weight: 300;
    }
  }
  .x-ui-collapse-item-wrap {
    will-change: height;
    background-color: #fff;
    overflow: hidden;
    .item-content {
      padding-bottom: 25px;
      font-size: 13px;
      color: #303133;
      line-height: 1.769230769230769;
    }
  }
}
</style>
