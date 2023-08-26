# Comments

    {
    "compilerOptions": {
    "outDir": "./dist/",

    // Подсвечивает все места где не указан тип
    // Однако это не означает, что теперь вовсе нельзя использовать any.
    // Это означает лишь, что в подобных ситуациях разработчик должен явно писать any,
    "noImplicitAny": true,

    // В какую спецификацию компилируем: для поддержки большинства браузеров
    "target": "es5",
    "module": "esnext",
    "jsx": "react-jsx",

    // Компилятор будет обрабатывать не только TS файлы, но и JS файлы
    "allowJs": true,

    "moduleResolution": "node",
    // esModuleInterop позволяет работать с пакетами, которые используют
    // common js как с обычными пакета с помощью import (require() module.export) = common js
    // import Moment from 'moment';
    // без флага esModuleInterop результат undefined
    // console.log(Moment);
    // c флагом результат [object Object]
    // console.log(Moment);

    "esModuleInterop": true,
    // Если какая-либо библиотека не имеет default import
    // лоадеры вроде ts-loader или babel-loader автоматически создают их
    // вместо такого импорта
    // import * as React from 'react';
    // можно писать такой
    // import React from 'react';

    "allowSyntheticDefaultImports": true,

    // для абсолютного импорта
    "baseUrl": ".",

    "paths": {
      "@ui": ["src/shared/ui"],
      "@lib": ["src/shared/lib"],
      "@config": ["src/shared/config"],
      "@assets/*": ["public/assets/*"],
      "@widgets": ["src/widgets"],
      "@app/*": ["src/app/*"],
      "@pages/*": ["src/pages/*"],
      "@entities/*": ["src/entities/*"],
      "@features/*": ["src/features/*"]
    }
    },
    "include": ["global.d.ts", "**/*.ts", "**/*.tsx", "./jest-setup.ts"],
    "ts-node": {
    "compilerOptions": {
      "module": "commonjs"
    }
    }
    }
