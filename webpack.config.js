const path = require("path");

const Dotenv = require("dotenv-webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  devServer: {
    contentBase: "./public",
  },
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  target: "web",
  devServer: {
    port: 3000,
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
    host: "127.0.0.1",
  },

  // plugin: [new MiniCssExtractPlugin()],
  plugins: [
    new HTMLWebpackPlugin({ template: "./public/index.html" }),
    new MiniCssExtractPlugin(),
    new Dotenv(),
  ],

  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env", "@babel/preset-react"] },
      },
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: { publicPath: "" },
          // },
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(gif|png|jpg|svg)$/i,
        type: "asset/resource",
        //   use: [
        //     "file-loader",
        //     {
        //       loader: "image-webpack-loader",
        //       options: {
        //         bypassOnDebug: true, // webpack@1.x
        //         disable: true, // webpack@2.x and newer
        //       },
        //     },
        //   ],
      },
    ],
  },
};
