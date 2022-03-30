<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-11 16:15:48
 * @LastEditors: xx
 * @LastEditTime: 2021-09-25 00:02:42
-->
<template>
	<div class="sidebar">
		<XStoreyTitle>XXXXX-UI</XStoreyTitle>
		<ul class="u-list">
			<li
				class="u-list-item "
				v-for="(item, i) in menuList"
				:key="i"
				@click="handleMenuItemClick(item)"
			>
				{{ item.title }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "",
	data() {
		return {
			menuList: [
				{
					path: "/button",
					title: "Button 按钮",
				},
				{
					path: "/input",
					title: "Input 文本框",
				},
				{
					path: "/collapse",
					title: "Collapse 折叠面板",
				},
				{
					path: "/notify",
					title: "Notify 通知",
				},
				
				{
					path: "/switch",
					title: "switch 滑块",
				},
				{
					path: "/tag",
					title: "tag 标签",
				},
				{
					path: "/storeytitle",
					title: "storeytitle 标题",
				},
				{
					path: "/divider",
					title: "divider 分割线",
				},
				{
					path: "/dialog",
					title: "dialog 对话框",
				},
				{
					path: "/slide",
					title: "slide 轮播图",
				},
				{
					path: "/xareaheader",
					title: "页面列表头部",
				}
			],
		};
	},
	methods: {
		handleMenuItemClick(item) {
			this.$router.push(item.path).catch((err) => err);
		},
	},
};
</script>

<style lang="scss" scoped>
.sidebar {
	flex: 2;
	width: 300px;
	min-width: 300px;
	
	.u-list {
		.u-list-item {
			padding: 10px 20px;
			cursor: pointer;
			
			&:hover {
				color: #ff3399;
			}
		}
	}
}
</style>
