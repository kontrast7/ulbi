import React, { FC } from 'react';
import { cn } from '@lib';
import { Theme, useTheme } from '@app/providers/theme-provider';
import { Button, ThemeButton } from '@ui';
import LightIcon from '@assets/icons/LightIcon.svg';
import DarkIcon from '@assets/icons/DarkIcon.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={cn('', [className])}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? (
                <DarkIcon width="26px" height="26px" />
            ) : (
                <LightIcon width="26px" height="26px" />
            )}
        </Button>
    );
};
