const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/'
});

module.exports = {
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
};
