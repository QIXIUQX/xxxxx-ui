<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: xx
 * @Date: 2021-09-25 00:02:17
 * @LastEditors: xx
 * @LastEditTime: 2021-10-01 18:55:08
-->
<template>
  <div class="slide">
    <XSlide :initial="1" :duration="5000">
      <XSlideItem v-for="(item, i) in list" :key="i">
        <img :src="item.url" alt="" />
      </XSlideItem>
    </XSlide>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: [
        {
          url:
            "https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/86bc6a05914245bfbf4e8ce24574f687.png!sswm",
        },
        {
          url:
            "https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/087e0f32160b4d74b408691273dff841.png!sswm",
        },
        {
          url:
            "https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/32609b4ad73d49e4ae364f5283f5e8f6.png!sswm",
        },
        // {
        //   url:
        //     "https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/da4bd769ce574a6fba27f6902a63c044.png!sswm",
        // },
        // {
        //   url:
        //     "https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/86bc6a05914245bfbf4e8ce24574f687.png!sswm",
        // },
        // {
        //   url:
        //     "https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/087e0f32160b4d74b408691273dff841.png!sswm",
        // },
        // {
        //   url:
        //     "https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/32609b4ad73d49e4ae364f5283f5e8f6.png!sswm",
        // },
        // {
        //   url:
        //     "https://ssyerv1.oss-cn-hangzhou.aliyuncs.com/picture/da4bd769ce574a6fba27f6902a63c044.png!sswm",
        // },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.slide {
  height: 500px;
  width: 100%;
}
</style>
