const { mode } = require("webpack-nano/argv");

//generate index.html in dist
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");

//Hot reload module by instantiating a server
const { WebpackPluginServe } = require("webpack-plugin-serve");

module.exports = {
  mode,
  watch: mode === "development",
  entry: ["./src", "webpack-plugin-serve/client"],
  plugins: [
    new MiniHtmlWebpackPlugin({ context: { title: "Demo" } }),
    new WebpackPluginServe({
      port: process.env.PORT || 8080,
      static: "./dist",
      liveReload: true,
      waitForBuild: true,
      historyFallback: true
      }),
  ],
};
