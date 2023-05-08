import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  // * development || production (минифицирует js файл)
  mode: "development",

  // * точка входа
  entry: path.resolve(__dirname, "src", "index.ts"),

  // * файлы на выходе
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },

  // * html-webpack-plugin нужен для внедрения JS в index.html
  // * ProgressPlugin показывает проценты сборки (Progress Bar)
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ],

  // * преобразование ts в js
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
  },

  // * импорты в файлах без расширений (.tsx .ts .js)
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config;
