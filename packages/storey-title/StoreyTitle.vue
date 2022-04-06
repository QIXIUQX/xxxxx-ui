<template>
	<header class="storey-title">
		<slot></slot>
	</header>
</template>

<script>
export default {
	name: "XStoreyTitle",
};
</script>

<style lang="scss" scoped>
.storey-title {
	padding-left: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 50px;
	font-size: 20px;
	border-bottom: 1px solid #e4e7ed;
}
</style>
