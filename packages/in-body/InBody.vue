<template>
	<div class="">
		<slot></slot>
	</div>
</template>

<script>
/** 组件/工具类/store 导入 */

/** 网络请求导入 导入 */

export default {
	name: "",
	methods: {
		/** 事件或其他相关方法 **/
		name() {
		
		}
		/** 网络请求相关方法 **/
	},
	mounted() {
		const node = this.$mount().$el; //
		document.body.appendChild(node)
	},
	beforeDestroy() {
		const node = this.$mount().$el;
		node.remove()
	},
}
</script>

<style lang="scss" scoped>

</style>