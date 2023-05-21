declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  import React from 'react';

  const content: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png' {
  import React from 'react';

  const content: React.VFC<React.ImgHTMLAttributes<HTMLImageElement>>;
  export default content;
}

declare module '*.jpg' {
  import React from 'react';

  const content: React.VFC<React.ImgHTMLAttributes<HTMLImageElement>>;
  export default content;
}

declare module '*.jpeg' {
  import React from 'react';

  const content: React.VFC<React.ImgHTMLAttributes<HTMLImageElement>>;
  export default content;
}

// eslint-disable-next-line no-unused-vars
declare const __IS_DEV__: boolean;
