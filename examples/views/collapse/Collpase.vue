<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-11 16:36:45
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-14 14:09:40
-->
<template>
  <div class="collapse">
    <XCollapse :value="activeName" style="height: max-content;">
      <XCollapseItem :name="1" title="一致性 ">
        <div>
          与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
        </div>
        <div>
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
        </div>
      </XCollapseItem>
      <XCollapseItem :name="2" title="反馈 Feedback">
        <div>
          控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
        </div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </XCollapseItem>
      <XCollapseItem :name="3">
        <template slot="title">测试标题 </template>
        <div>
          测试标题测试内容
        </div>
        <div>测试标题测试内容</div>
      </XCollapseItem>
    </XCollapse>

    <pre>
      value: Array 被点击的数组
      title：string 标题
      name：string 他的id  点击标签将通过这个值来确定，必传
      data() {
        return {
          activeName: [],
        };
      },
    </pre>
    <XCollapse :value="activeNameToSlot" style="height: max-content;">
      <XCollapseItem :name="1">
        <div slot="title">
          一致性( 通过插槽插入标题)
        </div>
        <div>
          与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
        </div>
        <div>
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
        </div>
      </XCollapseItem>
    </XCollapse>

    <pre>
      value: Array 被点击的数组
      title：string 标题
      name：string 他的id  点击标签将通过这个值来确定，必传
      data() {
        return {
          activeNameToSlot: [],
        };
      },
    </pre>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      activeName: [],
      activeNameToSlot: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.collapse {
  width: 900px;
}
</style>
