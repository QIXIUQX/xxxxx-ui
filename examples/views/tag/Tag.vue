<template>
	<div class="">
		<XTag>默认 标签</XTag>
		<XTag style="margin-left:10px" type="primary">主要 标签</XTag>
		<XTag style="margin-left:10px" type="success">成功 标签</XTag>
		<XTag style="margin-left:10px" type="info">信息 标签</XTag>
		<XTag style="margin-left:10px" type="warning">警告 标签</XTag>
		<XTag style="margin-left:10px" type="error">错误 标签</XTag>
		
		<pre v-text="str"></pre>
	</div>
</template>

<script>
export default {
	name: "",
	data() {
		return {
			str: `
    <XTag>默认 标签</XTag>
    <XTag style="margin-left:10px" type="primary">主要 标签</XTag>
    <XTag style="margin-left:10px" type="success">成功 标签</XTag>
    <XTag style="margin-left:10px" type="info">信息 标签</XTag>
    <XTag style="margin-left:10px" type="warning">警告 标签</XTag>
    <XTag style="margin-left:10px" type="error">错误 标签</XTag>
          

    type: {
      type: String,
      default: "default",
    },
    methods: {
        handleTagClick() {
        this.$emit("click");
        },
    },          
          
          
          `,
		};
	},
};
</script>

<style lang="scss" scoped></style>
