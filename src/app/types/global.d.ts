declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  const content: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png' {
  const content: React.VFC<React.ImgHTMLAttributes<HTMLImageElement>>;
  export default content;
}

declare module '*.jpg' {
  const content: React.VFC<React.ImgHTMLAttributes<HTMLImageElement>>;
  export default content;
}

declare module '*.jpeg' {
  const content: React.VFC<React.ImgHTMLAttributes<HTMLImageElement>>;
  export default content;
}

declare const __IS_DEV__: boolean;
