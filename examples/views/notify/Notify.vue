<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-11 16:53:08
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-15 02:18:28
-->
<template>
  <div class="notify">
    <XButton @click="handleNotifySuccess">点我显示 成功提示框</XButton>
    <XButton @click="handleNotifyInfo">点我显示 消息提示框</XButton>
    <XButton @click="handleNotifyWarning">点我显示 警告提示框</XButton>
    <XButton @click="handleNotifyError">点我显示 错误提示框</XButton>
    <CodeArea>
      <pre v-text="str"></pre>
    </CodeArea>
  </div>
</template>

<script>
const CodeArea = () => import("../../components/code-area/CodeArea.vue");

export default {
  name: "",
  components: {
    CodeArea,
  },
  data() {
    return {
      str: `
        this.$notify({
            title: "成功提示框",
            message: "成功提示框,试试点右上角的关闭!",
            duration: 0,
            type: "success",
        });
    },
      `,
    };
  },
  methods: {
    handleNotifySuccess() {
      this.$notify({
        title: "成功提示框",
        message: `成功提示框,试试点右上角的关闭!`,
        duration: 0,
        type: "success",
      });
    },
    handleNotifyInfo() {
      this.$notify({
        title: "消息提示框",
        message: `消息提示框,我在3000ms后自动消失我在3000ms后自动消失我在3000ms后自动消失我在3000ms后自动消失我在3000ms后自动消失`,
        duration: 3000,
        type: "info",
      });
    },
    handleNotifyWarning() {
      this.$notify({
        title: "警告提示框",
        message: `消息提示框,我在4500ms后自动消失`,
        duration: 4500,
        type: "warning",
      });
    },
    handleNotifyError() {
      this.$notify({
        title: "错误提示框",
        message: `消息提示框,我不会自动消失`,
        duration: 0,
        type: "error",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.notify {
  height: 1000px;
}
</style>
