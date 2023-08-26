import { lazy } from 'react';

// TODO: раскомментировать после тестов loader's
// export const MainPage = lazy(() => import('./ui/main-page'));

export const MainPage = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./ui/main-page')), 3000);
}));
