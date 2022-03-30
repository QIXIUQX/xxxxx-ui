<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-09 15:12:27
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-09 17:59:20
-->
<template>
  <!-- <button :class="`x-btn x-btn-${type} is-disabled`" type="button" @click="handleBtnClick"> -->
  <button
    :class="[
      'x-btn',
      `x-btn-${type}`,
      {
        'is-disabled': disabled,
      },
    ]"
    type="button"
    @click="handleBtnClick"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "XButton",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    handleBtnClick() {
      if (!this.disabled) {
        this.$emit("click");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.x-btn {
	width: 120px;
	height: 40px;
	border-radius: 5px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all ease .25s;
	
}

.x-btn-default {
	color: #606266;
	border: 1px solid #dcdfe6;
	background-color: #ffffff;
	
	&:hover {
		background-color: #c6e2ff;
		color: #409eff;
	}
}

.x-btn-primary {
	color: #fff;
	background-color: #409eff;
	
	&:hover {
		background-color: #66b1ff;
	}
}

.x-btn-success {
	color: #fff;
	background-color: #67c23a;
	
	&:hover {
		background-color: #85ce61;
	}
}

.x-btn-info {
	color: #fff;
	background-color: #909399;
	
	&:hover {
		background-color: #a6a9ad;
	}
}

.x-btn-warning {
	color: #fff;
	background-color: #e6a23c;
	
	&:hover {
		background-color: #ebb563;
	}
}

.x-btn-error {
	color: #fff;
	background-color: #f56c6c;
	
	&:hover {
		background-color: #f78989;
	}
}

.is-disabled {
	cursor: no-drop;
}
</style>
