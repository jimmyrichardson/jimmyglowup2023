const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

const config = {
  mode: "development",
  target: "web",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "assets"),
    publicPath: "/dev/",
    filename: "main.js",
    clean: true,
  },

  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:8888",
        secure: false,
        changeOrigin: true,
        autoRewrite: true,
      },
    },
    hot: true,
    open: true,
    port: 8080,
    compress: true,
    liveReload: false,
    client: {
      progress: true,
    },
    watchFiles: ["src/*.js", "src/**/*.js", "src/*.scss", "src/**/*.scss"],
    historyApiFallback: true,
  },

  plugins: [new MiniCssExtractPlugin(), new HotModuleReplacementPlugin()],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
