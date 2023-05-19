import React, { FC } from 'react';
import { cn } from '@lib';
import { Link, LinkProps } from 'react-router-dom';
import cls from './styled.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...props
}) => (
    <Link
        to={to}
        className={cn(cls.AppLink, [className, cls[theme]])}
        {...props}
    >
        {children}
    </Link>
);
