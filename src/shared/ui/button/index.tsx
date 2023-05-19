import React, { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '@lib';
import cls from './styled.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    ...props
}) => (
    <button
        type="button"
        className={cn(cls.Button, [className, cls[theme]])}
        {...props}
    >
        {children}
    </button>
);
