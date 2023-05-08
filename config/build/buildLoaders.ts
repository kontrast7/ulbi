import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  // * преобразование ts в js
  const typescriptLoader = {test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/};

  return [typescriptLoader]
}