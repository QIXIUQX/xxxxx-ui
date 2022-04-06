<template>
	<div class="x-ui-collapse">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "XCollapse",
	props: {
		value: {
			type: Array,
			default: [],
		},
	},
	provide() {
		return {
			collapse: this,
		};
	},
	created() {
		this.$on("itemChange", (item) => {
			let idx = this.value.indexOf(item);
			if (idx > -1) {
				this.value.splice(idx, 1);
			} else {
				this.value.push(item);
			}
		});
	},
};
</script>

<style lang="scss" scoped>
.x-ui-collapse {
	border-top: 1px solid #ebeef5;
	border-bottom: 1px solid #ebeef5;
}
</style>
