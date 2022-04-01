<template>
  <span :class="`x-tag x-tag-${type}`" @click="handleTagClick">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "XTag",
  props: {
    type: {
      type: String,
      default: "default",
    },
  },
  methods: {
    handleTagClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.x-tag {
  display: inline-block;
  padding: 0 10px;
  height: 32px;

  line-height: 30px;
  border-radius: 3px;
  color: #fff;

  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;
}
.x-tag-default {
  border: 1px solid #dcdfe6;
  background-color: #ffffff;
  color: #333;
  &:hover {
    background-color: #c6e2ff;
    color: #409eff;
  }
}
.x-tag-primary {
  background-color: #409eff;
  &:hover {
    background-color: #66b1ff;
  }
}
.x-tag-success {
  background-color: #67c23a;
  &:hover {
    background-color: #85ce61;
  }
}
.x-tag-info {
  background-color: #909399;
  &:hover {
    background-color: #a6a9ad;
  }
}
.x-tag-warning {
  background-color: #e6a23c;
  &:hover {
    background-color: #ebb563;
  }
}
.x-tag-error {
  background-color: #f56c6c;
  &:hover {
    background-color: #f78989;
  }
}
</style>
