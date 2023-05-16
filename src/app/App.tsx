import React from "react";
import { useTheme } from "app/providers/theme-provider";
import { cn } from "shared/lib";
import { AppRouter } from "app/providers/routes";
import { Navbar } from "widgets/Navbar";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn("app", [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <AppRouter />
    </div>
  );
};

export default App;
