import React, { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../../lib/theme-context';

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(
    localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme,
    );

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <div>
            <ThemeContext.Provider value={defaultProps}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
};

export default ThemeProvider;
