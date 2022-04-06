<template>
	<div class="" v-show="name === getParentValue">
		<slot></slot>
	</div>
</template>

<script>
/** 组件/工具类/store 导入 */

/** 网络请求导入 导入 */

export default {
	name: "XTabPane",
	computed: {
		getParentValue() {
			return this.$parent.value //父元素的activeName
		}
	},
	props: {
		name: {
			type: [Number, String],
		},
		label: {
			type: [Number, String],
		}
	},
	methods: {
		/** 事件或其他相关方法 **/
		getThis() {
			console.log(this)
		}
		/** 网络请求相关方法 **/
	},
	mounted() {
		this.getThis();
	},
}
</script>

<style lang="scss" scoped>

</style>