// * development || production (минифицирует js файл)
export type BuildMode = 'development' | 'production';

// * точки входа
export interface BuildPath {
  entry: string;
  build: string;
  html: string;
  src: string;
  tsconfig: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  isDev: boolean;
  port: number;
}
