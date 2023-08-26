import React, { FC, useState } from 'react';
import { cn } from '@lib';
import { LangSwitcher, ThemeSwitcher } from '@ui';
import cls from './styled.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <div
            className={cn(cls.Sidebar, [className], { [cls.collapsed]: collapsed })}
        >
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
            <button type="button" onClick={() => setCollapsed((prev) => !prev)}>
                {collapsed ? '+++' : '---'}
            </button>
        </div>
    );
};
