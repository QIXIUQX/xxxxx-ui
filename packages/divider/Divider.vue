<template>
	<div class="x-divider">
		<div class="x-divider-text">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "XDivider",
};
</script>

<style lang="scss" scoped>
.x-divider {
	position: relative;
	margin: 20px 0;
	height: 1px;
	background-color: #dcdfe6;
	
	.x-divider-text {
		position: absolute;
		left: 50px;
		top: -16px;
		padding: 5px 20px;
		background-color: #fff;
		color: #999;
		user-select: none;
	}
}
</style>
