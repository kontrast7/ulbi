import React, { FC, useState } from "react";
import { cn } from "@lib";
import cls from "./styled.module.scss";
import { LangSwitcher, ThemeSwitcher } from "@ui";

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
        <LangSwitcher className={cls.lang}/>
      </div>
      <button onClick={() => setCollapsed((prev) => !prev)}>+</button>
    </div>
  );
};
