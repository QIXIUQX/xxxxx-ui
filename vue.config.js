/*
 * @Description:
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-09-09 14:52:26
 * @LastEditors: xx
 * @LastEditTime: 2021-10-03 02:19:27
 */
const path = require("path");
module.exports = {
  pages: {
    index: {
      // 修改项目入口文件
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  // 扩展webpack配置,使webpages加入编译
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        return options;
      });
  },

  publicPath: process.env.NODE_ENV === "production" ? "/xxxxx/" : "/",
};
