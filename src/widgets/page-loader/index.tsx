import React, { FC } from 'react';
import { cn } from '@lib';
import { Loader } from '@ui';
import cls from './styled.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={cn(cls.PageLoader, [className])}>
        <Loader />
    </div>
);
