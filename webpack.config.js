const path = require("path");
const { DefinePlugin } = require("webpack");
const { config } = require("dotenv");
const Dotenv = require("dotenv-webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

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
    new DefinePlugin(envKeys),
    // new Dotenv({
    //   path: "./.env", // load this now instead of the ones in '.env'
    //   safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
    //   allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
    //   systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
    //   silent: true, // hide any errors
    //   defaults: false, // load '.env.defaults' as the default values if empty.
    //   prefix: "import.meta.env.", // reference your env variables as 'import.meta.env.ENV_VAR'.
    // }),
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
