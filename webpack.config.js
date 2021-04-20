const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}
module.exports = {
  mode: mode,
  target: target,

  module: {
    rules: [
      {
        test:/\.(s[ac]|c)ss$/i, // sass, scss, & css
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"], // Reads right to left, find css loader and process mini and spit into dist
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};