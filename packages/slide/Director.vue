<template>
  <div
    class="x-slider-director-left x-slider-director"
    v-if="director == 'prev'"
    @click="handleDirectorClick('prev')"
  >
    <i class="iconfont icon-arrow-left-bold"></i>
  </div>
  <div
    class="x-slider-director-right x-slider-director "
    v-else-if="director == 'next'"
    @click="handleDirectorClick('next')"
  >
    <i class="iconfont icon-arrow-right"></i>
  </div>
</template>

<script>
export default {
  props: {
    director: {
      type: String,
      default: "next",
    },
  },
  data() {
    return {
      hasTransition: false,
      timer: null,
    };
  },
  methods: {
    handleDirectorClick(director) {
      if (!this.hasTransition) {
        this.hasTransition = true;
        this.$emit("handleDirectorClick", director);
        this.timer = setTimeout(() => {
          this.hasTransition = false;
        }, 500);
      }
    },
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>

<style lang="scss">
.x-slider-director-left {
  left: 1%;
}
.x-slider-director-right {
  right: 1%;
}
.x-slider-director {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
