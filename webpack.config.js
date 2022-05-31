const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "index.html",
});

module.exports = {
  mode: "development",
  entry: "./index.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
    },
    open: true,
    port: 3000,
  },
  plugins: [htmlPlugin],
};
