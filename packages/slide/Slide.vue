<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: xx
 * @Date: 2021-10-01 16:07:21
 * @LastEditors: xx
 * @LastEditTime: 2021-10-01 18:54:27
-->
<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: xx
 * @Date: 2021-09-25 00:01:19
 * @LastEditors: xx
 * @LastEditTime: 2021-10-01 15:55:50
-->
<template>
  <div
    class="x-slide-main"
    ref="main"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="x-slider-container"
      ref="slideContainer"
      :style="{
        width: sliderStyle.width + 'px',
        transform: 'translateX(-' + curIdx * sliderStyle.containerWidth + 'px)',
      }"
    >
      <slot></slot>
    </div>
    <Dot
      :itemLens="itemLens"
      :curIdx="curIdx"
      @triggerClick="handleTriggerClick"
    ></Dot>
    <Director
      director="next"
      @handleDirectorClick="handleDirectorClick"
    ></Director>
    <Director
      director="prev"
      @handleDirectorClick="handleDirectorClick"
    ></Director>
  </div>
</template>

<script>
const Dot = () => import("./Dot.vue");
const Director = () => import("./Director.vue");

export default {
  name: "XSlide",
  components: {
    Dot,
    Director,
  },
  data() {
    return {
      sliderStyle: {
        width: 0,
        left: 0,
        containerWidth: 0,
      },
      itemLens: 0,
      curIdx: this.initial,
      timer: null,
    };
  },
  props: {
    hasDot: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default() {
        return true;
      },
    },
    duration: {
      type: Number,
      default: 1000,
    },
    initial: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    handleMouseEnter() {
      clearInterval(this.timer);
    },
    handleMouseLeave() {
      this.autoPlay();
    },
    handleDirectorClick(dir) {
      this.setIndex(dir);
    },
    // 自动轮播图
    autoPlay() {
      if (this.autoplay) {
        this.timer = setInterval(() => {
          this.setIndex("next");
        }, this.duration);
      }
    },
    setIndex(dir) {
      switch (dir) {
        case "next":
          this.curIdx += 1;
          if (this.curIdx == this.itemLens) {
            this.curIdx = 0;
          }
          break;
        case "prev":
          this.curIdx -= 1;
          if (this.curIdx < 0) {
            this.curIdx = this.itemLens - 1;
          }
          break;
        default:
          break;
      }
    },
    handleTriggerClick(i) {
      this.curIdx = i;
    },
    getWidth() {
      this.itemLens = this.$slots.default.length;
      this.sliderStyle.containerWidth = this.$refs.main.offsetWidth;
      this.sliderStyle.width = this.itemLens * this.sliderStyle.containerWidth;
    },
    handleTriggerClick(i) {
      this.curIdx = i;
    },
  },
  mounted() {
    this.getWidth();
    this.autoPlay();
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
  watch: {
    curIdx(newValue, oldValue) {
      this.$emit("change", { curIdx: newValue, oldValue: oldValue });
    },
  },
};
</script>

<style lang="scss" scoped>
.x-slide-main {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .x-slider-container {
    // overflow: hidden;
    float: left;
    height: 100%;
    position: relative;
    transition: all 0.5s ease-out;
  }
}
</style>
