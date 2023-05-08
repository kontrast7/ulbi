import path from "path";
import webpack from "webpack";
import { buildLoaders } from "./config/build/buildLoaders";
import { buildPlugins } from "./config/build/buildPlugins";

const config: webpack.Configuration = {
  // * development || production (минифицирует js файл)
  mode: "development",

  // * точка входа
  entry: path.resolve(__dirname, "src", "index.ts"),

  // * файлы на выходе
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  // * html-webpack-plugin нужен для внедрения JS в index.html
  // * ProgressPlugin показывает проценты сборки (Progress Bar)
  plugins: buildPlugins(),

  // * преобразование ts в js
  module: {
    rules: buildLoaders(),
  },

  // * импорты в файлах без расширений (.tsx .ts .js)
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config;
