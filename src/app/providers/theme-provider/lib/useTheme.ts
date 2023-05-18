import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/theme-context";
import { useContext, useEffect } from "react";

interface UseThemeRes {
  toggleTheme: () => void;
  theme: Theme;
}
export function useTheme(): UseThemeRes {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { toggleTheme, theme };
}
