<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: xx
 * @Date: 2021-09-21 21:10:16
 * @LastEditors: xx
 * @LastEditTime: 2021-10-03 16:11:21
-->
<template>
  <div class="dialog">
    <button @click="handleclick">
      点我显示
    </button>

    <XDialog
      :title="dialogTitle"
      :visible.sync="visible"
      @open="open"
      @close="close"
    >
      <div slot="dialogBody" class="dialogBody">
        <input
          type="text"
          class="dialogBodyIpt"
          placeholder="请输入歌单名称"
          v-model="iptTxtValue"
        />
      </div>
      <div
        slot="dialogFooter"
        class="dialogFooter"
        @click="handleDialogBtnClick"
      >
        确定
      </div>
    </XDialog>

    <pre v-text="str"></pre>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      dialogTitle: "标题",
      visible: false,
      iptTxtValue: "",
      str: `
      <XDialog :title="dialogTitle" :visible.sync="visible">
        <div slot="dialogBody" class="dialogBody">
          <input
            type="text"
            class="dialogBodyIpt"
            placeholder="请输入歌单名称"
            v-model="iptTxtValue"
          />
        </div>
        <div
          slot="dialogFooter"
          class="dialogFooter"
          @click="handleDialogBtnClick"
        >
          确定
        </div>
    </XDialog>

    methods: {
      handleclick() {
        this.visible = !this.visible;
      },
    },




    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "500px",
    },
    top: {
      type: String,
      default: "30%",
    },
    visible: {
      type: Boolean,
      default: false,
    },
      `,
    };
  },
  methods: {
    handleDialogBtnClick() {
      console.log(111);
    },
    handleclick() {
      this.visible = !this.visible;
    },
    open() {
      console.log("openopenopenopenopenopenopenopenopen");
    },
    close() {
      console.log("closecloseclosecloseclosecloseclosecloseclose");
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
}
</style>
