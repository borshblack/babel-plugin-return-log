const babelPluginReturnLog = require("./plugins");
const babelPresetMinify = require("./node_modules/babel-preset-minify");

module.exports = function (api) {
  api.cache(false);

  return {
    plugins: [[babelPluginReturnLog]],
    presets: [babelPresetMinify],
  };
};
