<template>
	<div class="x-tabs">
		<div class="x-tabs-header-list">
			<div class="x-tab-label-item"
			     v-for="(item,index) in childNodeArr" :key="index"
			     :class="{
				'active-tabs': calcActiveName({
				name:item.componentOptions.propsData.name,
				index:index
				}) === value
			     }"
			     @click="handleTabsNavClick({
			        activeName:item.componentOptions.propsData.name,
			        index:index
			     })"
			>
				{{ item.componentOptions.propsData.label }}
			</div>
		</div>
		<!--内容-->
		<div class="x-body-list">
			<slot></slot>
		</div>
	</div>
</template>

<script>
/** 组件/工具类/store 导入 */


/** 网络请求导入 导入 */

export default {
	name: "XTabs",
	computed: {
		calcActiveName() {
			return function (obj) {
				return obj.name ? obj.name : obj.index
			}
		}
	},
	props: {
		value: {
			type: Number | String,
		},
	},
	data() {
		return {
			childNodeArr: [],
			
		}
	},
	methods: {
		/** 事件或其他相关方法 **/
		
		
		/**
		 * 测试用,获取this 的值
		 */
		getThis() {
			console.log(this, 'tabs')
			this.childNodeArr = this.$slots.default
		},
		
		/**
		 * tabs的菜单被点击
		 * @param item
		 */
		handleTabsNavClick(item) {
			console.log(item, "item")
			this.$emit("tabClick");
			this.$emit("input", item.activeName ? item.activeName : item.index);
		}
		
		/** 网络请求相关方法 **/
	},
	mounted() {
		this.getThis()
	},
}
</script>

<style lang="scss" scoped>

.x-tabs {
	width: 100%;
	height: 200px;
	background-color: pink;
	
	.x-tabs-header-list {
		display: flex;
		
		.x-tab-label-item {
			cursor: pointer;
			color: red;
			padding: 5px 10px;
			border: 1px solid red;
		}
		
		.active-tabs {
			color: #fff;
			background-color: orange;
		}
	}
	
	.x-body-list {
		
	}
	
	
}
</style>