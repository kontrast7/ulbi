import React, { FC } from 'react';
import { cn } from '@lib';
import { useTranslation } from 'react-i18next';

import cls from './styled.module.scss';

interface NotFoundProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundProps> = ({ className }) => {
    const { t } = useTranslation('translation');

    return (
        <div className={cn(cls.NotFoundPage, [className])}>
            <div>{t('Страница не найдена')}</div>
        </div>
    );
};

export default NotFoundPage;
