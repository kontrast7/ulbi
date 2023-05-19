import React, { Suspense } from 'react';
import { useTheme } from '@app/providers/theme-provider';
import { cn } from '@lib';
import { AppRouter } from '@app/providers/routes';
import { Navbar, Sidebar } from '@widgets';
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={cn('app', [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
