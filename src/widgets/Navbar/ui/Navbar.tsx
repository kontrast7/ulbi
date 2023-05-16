import React, { FC } from "react";
import { cn } from "shared/lib";
import { AppLink } from "shared/ui";
import cls from "./Navbar.module.scss";
import { AppLinkTheme } from "shared/ui/app-link";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={cn(cls.Navbar, [className])}>
      <div className={cn(cls.links)}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cn(cls.mainLink)}
          to="/"
        >
          MainPage
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          AboutPage
        </AppLink>
      </div>
    </div>
  );
};
