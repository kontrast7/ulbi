import { lazy } from 'react';

// TODO: раскомментировать после тестов loader's
// export const AboutPage = lazy(() => import('./ui'));

export const AboutPage = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./ui')), 1500);
}));
