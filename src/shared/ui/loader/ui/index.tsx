import React, { FC } from 'react';
import { cn } from '@lib';
import cls from './styled.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={cn(cls.Loader, [className])} />
);
