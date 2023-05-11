import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { useTheme } from "./theme/useTheme";
import "./styles/index.scss";
import { cn } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn("app", [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to="/about">AboutPage</Link>
      <Link to="/">MainPage</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
