import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
  // * импорты в файлах без расширений (.tsx .ts .js)
  return {
    extensions: [".tsx", ".ts", ".js"],
  }
}