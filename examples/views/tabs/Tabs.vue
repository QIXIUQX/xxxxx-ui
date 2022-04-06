<template>
	<div class="">
		<XTabs v-model="activeName">
			<XTabPane name="0" label="用户管理">用户管理</XTabPane>
			<XTabPane name="1" label="配置管理">配置管理</XTabPane>
			<XTabPane name="2" label="角色管理">角色管理</XTabPane>
			<XTabPane name="3" label="定时管理">定时管理</XTabPane>
		</XTabs>
	</div>
</template>

<script>
/** 组件/工具类/store 导入 */

/** 网络请求导入 导入 */

export default {
	name: "Tabs",
	data() {
		return {
			activeName: "0"
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

</style>