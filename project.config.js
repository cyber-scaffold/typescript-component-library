const path = require("path");

module.exports = {
  source: "example",
  loaderIgnore: [/node_modules/, /dist/],
  webpackConfig: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./example/"),
        "@src": path.resolve(__dirname, "./src/"),
        "@dist": path.resolve(__dirname, "./dist/")
      }
    }
  }
};