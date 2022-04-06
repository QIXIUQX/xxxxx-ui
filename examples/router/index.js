/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-09 14:50:36
 * @LastEditors: xx
 * @LastEditTime: 2021-09-26 19:49:53
 */
import Vue from "vue";
import VueRouter from "vue-router";

const Button = () => import("../views/button/Button.vue");
const Home = () => import("../views/home/Home.vue");
const Input = () => import("../views/input/Input.vue");
const Collapse = () => import("../views/collapse/Collpase.vue");
const Notify = () => import("../views/notify/Notify.vue");
const Switch = () => import("../views/switch/Switch.vue");
const Tag = () => import("../views/tag/Tag.vue");
const StoreyTitle = () => import("../views/storey-title/StoreyTitle.vue");
const Divider = () => import("../views/divider/Divider.vue");
const dialog = () => import("../views/dialog/dialog.vue");
const Slide = () => import("../views/slide/Slide.vue");
const testasfa = () => import("../views/area-header/AreaHeader");
const  Tabs    = () => import("../views/tabs/Tabs");

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/home",
		component: Home,
	},
	{
		path: "/button",
		component: Button,
	},
	{
		path: "/input",
		component: Input,
	},
	{
		path: "/collapse",
		component: Collapse,
	},
	{
		path: "/notify",
		component: Notify,
	},
	,
	{
		path: "/switch",
		component: Switch,
	},
	{
		path: "/tag",
		component: Tag,
	},
	{
		path: "/storeytitle",
		component: StoreyTitle,
	},
	{
		path: "/divider",
		component: Divider,
	},
	{
		path: "/dialog",
		component: dialog,
	},
	{
		path: "/slide",
		component: Slide,
	},
	{
		path: "/xareaheader",
		component: testasfa,
	},
	{
		path: "/xtabs",
		component: Tabs,
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
