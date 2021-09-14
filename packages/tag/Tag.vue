<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-15 02:24:15
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-15 02:53:22
-->
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

  color: #fff;
  line-height: 30px;
  border-radius: 3px;
  white-space: nowrap;
  cursor: pointer;
}
.x-tag-default {
  border: 1px solid #dcdfe6;
  background-color: #ffffff;
  color: #333;
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
