import React, { FC } from 'react';
import { cn } from '@lib';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@ui';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();
    return (
        <Button
            className={cn('', [className])}
            theme={ThemeButton.CLEAR}
            onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
        >
            {t('Язык')}
        </Button>
    );
};
