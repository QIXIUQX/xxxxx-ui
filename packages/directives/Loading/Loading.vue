<template>
    <div class="loading-mask">
        <div class="loading-animate-square-move">
            <div class="loading-animate-square-move-wrap">
                <span class="loading-animate-square-item"></span>
                <span class="loading-animate-square-item"></span>
                <span class="loading-animate-square-item"></span>
            </div>
            <div class="loading-animate-square-item-txt">载入中,请稍后...</div>
        </div>
    </div>
</template>

<script>
/** 组件/工具类/store 导入 */

/** 网络请求导入 导入 */

export default {
    name: "Loading",
    data() {
        return {
            visible: true
        }
    },
    methods: {
        /** 事件或其他相关方法 **/
        name() {

        }
        /** 网络请求相关方法 **/
    },
}
</script>

<style lang="scss" scoped>
/** 加载动画 **/
.loading-mask {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);

  .loading-animate-square-move {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .loading-animate-square-move-wrap {
      position: relative;
      height: 45px;
      width: 45px;

      .loading-animate-square-item {
        position: absolute;
        width: 20px;
        height: 20px;
        display: block;
        background-color: #41adef;
        border-radius: 3px;

        &:nth-child(1) {
          left: 0;
          top: 0;
          animation: a-move 2s infinite linear;
        }

        &:nth-child(2) {
          left: 25px;
          top: 0;
          animation: b-move 2s infinite linear;
        }

        &:nth-child(3) {
          left: 0;
          top: 25px;
          animation: c-move 2s infinite linear;
        }
      }
    }

    .loading-animate-square-item-txt {
      margin-top: 5px;
      color: #41adef;
      font-weight: 500;
    }

    @keyframes a-move {
      0% {
        left: 0;
        top: 0;
      }
      8% {
        left: 0;
        top: 0;
      }
      16% {
        left: 25px;
        top: 0;
      }
      24% {
        left: 25px;
        top: 0;
      }
      32% {
        left: 25px;
        top: 0;
      }
      40% {
        left: 25px;
        top: 25px;
      }
      48% {
        left: 25px;
        top: 25px;
      }
      56% {
        left: 25px;
        top: 25px;
      }
      64% {
        left: 0;
        top: 25px;
      }
      72% {
        left: 0;
        top: 25px;
      }
      80% {
        left: 0;
        top: 25px;
      }
      88% {
        left: 0;
        top: 0;
      }
      100% {
        left: 0;
        top: 0;
      }
    }

    @keyframes b-move {
      0% {
        left: 25px;
        top: 0;
      }
      8% {
        left: 25px;
        top: 25px;
      }
      16% {
        left: 25px;
        top: 25px;
      }
      24% {
        left: 25px;
        top: 25px;
      }
      32% {
        left: 0px;
        top: 25px;
      }
      40% {
        left: 0px;
        top: 25px;
      }
      48% {
        left: 0px;
        top: 25px;
      }
      56% {
        left: 0px;
        top: 0;
      }
      64% {
        left: 0px;
        top: 0;
      }
      72% {
        left: 0px;
        top: 0;
      }
      80% {
        left: 25px;
        top: 0;
      }
      88% {
        left: 25px;
        top: 0;
      }
      100% {
        left: 25px;
        top: 0;
      }
    }

    @keyframes c-move {
      0% {
        left: 0px;
        top: 25px;
      }
      8% {
        left: 0px;
        top: 25px;
      }
      16% {
        left: 0px;
        top: 25px;
      }
      24% {
        left: 0px;
        top: 0;
      }
      32% {
        left: 0px;
        top: 0;
      }
      40% {
        left: 0px;
        top: 0;
      }
      48% {
        left: 25px;
        top: 0;
      }
      56% {
        left: 25px;
        top: 0;
      }
      64% {
        left: 25px;
        top: 0;
      }
      72% {
        left: 25px;
        top: 25px;
      }
      80% {
        left: 25px;
        top: 25px;
      }
      88% {
        left: 25px;
        top: 25px;
      }
      100% {
        left: 0px;
        top: 25px;
      }
    }

  }

}


</style>
