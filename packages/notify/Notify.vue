<template>
  <!-- 动画 -->
  <transition name="notify-Fade" appear>
    <!-- 整个notify 的容器  主要控制他来显示/隐藏-->
    <div class="XNotify" v-if="notifyFlag">
      <!-- 最左侧的图标类型 支持:error/info/warning/success -->
      <i :class="[`XNotifyTipIcon-${type} iconfont icon-${type}`]"></i>
      <!-- 显示的内容 -->
      <div class="XNotifyMain">
        <!-- 标题 -->
        <div class="XNotifyTitle">{{ title }}</div>
        <!-- 信息 -->
        <div class="XNotifyContent">{{ message }}</div>
        <!-- 右上角的关闭按钮 -->
        <i class="iconfont icon-close XNotifyClose" @click="handleCloseNotify">
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
.XNotify {
  margin: 5px;
  border-radius: 5px;
  position: relative;
  width: 330px;
  padding: 15px;
  top: 0px;
  z-index: 9999;
  background-color: #fff;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 10%);
  display: flex;
  .XNotifyTipIcon-info {
    margin: 5px 10px 0 0;
    font-size: 20px;
    color: #00b0ff;
  }
  .XNotifyTipIcon-error {
    margin: 5px 10px 0 0;
    font-size: 20px;
    color: #f56c6c;
  }
  .XNotifyTipIcon-success {
    margin: 5px 10px 0 0;
    font-size: 20px;
    color: #67c23a;
  }
  .XNotifyTipIcon-warning {
    margin: 5px 10px 0 0;
    font-size: 20px;
    color: #e6a23c;
  }

  .XNotifyMain {
    .XNotifyTitle {
      font-size: 16px;
      font-weight: 700;
      line-height: 1.2;
    }
    .XNotifyContent {
      margin: 6px 0 0 0;
      font-size: 14px;
      line-height: 1.2;
    }
    .XNotifyClose {
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
.notifyContainerWrapper {
  padding: 2px;
  overflow: hidden;
  //   display: flex;
  //   flex-direction: column;
  background-color: transparent;
  position: absolute;
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
    // top: 0;
    opacity: 1;
  }
  100% {
    // top: -300px;
    opacity: 0;
  }
}
</style>
