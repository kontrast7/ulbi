import React, { FC } from 'react';
import { cn } from '@lib';
import { useTranslation } from 'react-i18next';
import { Button } from '@ui';
import cls from './styled.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={cn(cls.PageError, [className])}>
            <p>
                {t('Произошла непредвиденная ошибка')}
            </p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
