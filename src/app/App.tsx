import React, { Suspense, useEffect } from 'react';
import { useTheme, AppRouter } from '@app/providers';
import { cn } from '@lib';
import { Navbar, Sidebar } from '@widgets';
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    useEffect(() => {

    }, []);

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
