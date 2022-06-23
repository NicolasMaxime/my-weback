const { mode } = require("webpack-nano/argv");
const { merge } = require("webpack-merge");
const devParts = require("./webpack.dev");

const commonConfig = merge([
  { entry: ["./src"] },
  devParts.page({ title: "Demo" }),
]);

const productionConfig = merge([]);

const developmentConfig = merge([
  { entry: ["webpack-plugin-serve/client"] },
  devParts.devServer(),
]);

const CONFIGS = {
  production: merge(commonConfig, productionConfig, { mode: "production" }),
  development: merge(commonConfig, developmentConfig, { mode: "development" }),
};

const getConfig = (mode) => {
  if (!!CONFIGS[mode]) {
    return CONFIGS[mode];
  }
  throw new Error(`Trying to use an unknown mode, ${mode}`);
};

module.exports = getConfig(mode);
