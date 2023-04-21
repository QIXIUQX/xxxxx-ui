<!--
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-09 14:50:36
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-11 17:57:34
-->
<template>
	<div id="app">
		<SideBar></SideBar>
		<div class="wrap">
<!--			<input type="text" v-focus>-->
<!--			<div v-loading="true" style="width: 500px;height: 500px"></div>-->
<!--			<Empty description="空空"></Empty>-->

			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import Empty from "../packages/empty/Empty.vue";

const SideBar = () => import("./views/side-bar/SideBar.vue");

export default {
	data() {
		return {};
	},
	components: {
		Empty,
		SideBar,
	},
	methods: {
		handleBtnClick() {
			this.$notify({
				title: "成功提示框",
				message: `成功提示框,试试点右上角的关闭!`,
				duration: 0,
				type: "success",
			});
			this.$notify({
				title: "消息提示框",
				message: `消息提示框,我在4500ms后自动消失`,
				duration: 0,
				type: "info",
			});
			this.$notify({
				title: "警告提示框",
				message: `消息提示框,我在2000ms后自动消失`,
				duration: 0,
				type: "warning",
			});
			this.$notify({
				title: "警告提示框",
				message: `消息提示框,我不会自动消失`,
				duration: 0,
				type: "error",
			});
		},
		handleClick() {
			console.log(1111);
		},
	},
};
</script>

<style lang="scss">
#app {
	display: flex;
	width: 100vw;

	height: 100vh;
	display: flex;

	.wrap {
		flex:8;
		padding: 50px;
	}
}
</style>
