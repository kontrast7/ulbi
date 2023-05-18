import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  // * импорты в файлах без расширений (.tsx .ts .js)
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    plugins: [new TsconfigPathsPlugin({ configFile: options.paths.tsconfig })],
  };
}
