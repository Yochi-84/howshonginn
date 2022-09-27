const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true
});

module.exports = {
  // devServer: {
  //   allowedHosts: 'all',
  //   client: {
  //     webSocketURL: 'auto://0.0.0.0:0/ws'
  //   }
  // },
  pages: {
    index: {
      entry: "./src/main.js",
      template: "./public/index.html",
      filename: "index.html",
      title: "How享營",
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variables.scss";`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/howshonginn/'
  : '/'
};
