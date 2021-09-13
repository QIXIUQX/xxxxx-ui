<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-09 14:26:54
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-13 15:15:57
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

<style lang="scss">
.x-notify {
  margin: 5px 5px 10px 5px;
  border-radius: 5px;
  position: relative;
  width: 330px;
  padding: 15px;
  top: 0px;
  z-index: 9999;
  background-color: #fff;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 15%);
  display: flex;

  .x-notify-tip-icon-info {
    margin: 5px 10px 0 0;
    font-size: 20px;
    color: #00b0ff;
  }

  .x-notify-tip-icon-error {
    margin: 5px 10px 0 0;
    font-size: 20px;
    color: #f56c6c;
  }

  .x-notify-tip-icon-success {
    margin: 5px 10px 0 0;
    font-size: 20px;
    color: #67c23a;
  }

  .x-notify-tip-icon-warning {
    margin: 5px 10px 0 0;
    font-size: 20px;
    color: #e6a23c;
  }

  .x-notify-main {
    .x-notify-title {
      font-size: 16px;
      font-weight: 700;
      line-height: 1.2;
    }

    .x-notify-content {
      margin: 6px 0 0 0;
      font-size: 14px;
      line-height: 1.2;
    }

    .x-notify-close {
      position: absolute;
      right: 10px;
      top: 5px;
      cursor: pointer;
      padding: 3px;

      &:hover {
        color: #00b0ff;
      }
    }
  }
}

.notify-container-wrapper {
  padding: 2px;
  overflow: hidden;
  //   display: flex;
  //   flex-direction: column;
  background-color: transparent;
  position: fixed;
  transition: all 0.3s linear;
  top: 16px;
  right: 20px;
  //   z-index: -1;

  border-radius: 5px;
}

.notify-Fade-enter-active {
  animation: notifyFadeEnter 0.3s ease-in;
}

.notify-Fade-leave-active {
  animation: identifierLeave 0.3s ease-out;
}

@keyframes notifyFadeEnter {
  0% {
    right: -100%;
    opacity: 0;
  }
  100% {
    right: 0;
    opacity: 1;
  }
}

@keyframes identifierLeave {
  0% {
    // right: 0;
    opacity: 1;
  }
  100% {
    // right: -100%;
    opacity: 0;
  }
}
</style>
