<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-09 14:26:54
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-11 17:59:31
-->
<template>
  <!-- 动画 -->
  <transition name="notify-Fade" appear>
    <!-- 整个notify 的容器  主要控制他来显示/隐藏-->
    <div class="x-notify" v-if="notifyFlag">
      <!-- 最左侧的图标类型 支持:error/info/warning/success -->
      <i :class="[`x-notify-tip-icon-${type} iconfont icon-${type}`]"></i>
      <!-- 显示的内容 -->
      <div class="x-notify-main">
        <!-- 标题 -->
        <div class="x-notify-title">{{ title }}</div>
        <!-- 信息 -->
        <div class="x-notify-content">{{ message }}</div>
        <!-- 右上角的关闭按钮 -->
        <i
          class="iconfont icon-close x-notify-close"
          @click="handleCloseNotify"
        >
        </i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "XNotify",
  data() {
    return {
      notifyFlag: true, //控制显示隐藏notify
      title: "", //显示的标题
      message: "", //显示的内容
      duration: 0, //延迟,默认0为一直显示,如果需要多久消失就写多少毫秒
      type: "info", //notify类型
    };
  },
  methods: {
    // 点击关闭按钮直接隐藏notify
    handleCloseNotify() {
      this.notifyFlag = false;
    },
  },
  created() {
    // 监听延迟,如果是0 则一直显示,如果设置了显示时间则延迟时间将时间设置给settimeout,让定时器关闭notify
    if (this.duration !== 0) {
      setTimeout(() => {
        this.notifyFlag = false;
      }, this.duration);
    }
  },
};
</script>

<style lang="scss"></style>
