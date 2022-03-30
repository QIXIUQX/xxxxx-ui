<template>
	<div class="x-area-header">
		<slot name="left"></slot>
		<slot name="right"></slot>
	</div>
</template>

<script>
/** 组件/工具类/store 导入 */

/** 网络请求导入 导入 */

export default {
	name: "XAreaHeader",
	methods: {
		/** 事件或其他相关方法 **/
		name() {

		}
		/** 网络请求相关方法 **/
	},
}
</script>

<style lang="scss" scoped>
.x-area-header {
	display: flex;
	position: relative;
	justify-content: space-between;
	align-items: center;
	height: 76px;
	background-color: pink;
	margin-bottom: 12px;
	font-size: 42px;
}
</style>
