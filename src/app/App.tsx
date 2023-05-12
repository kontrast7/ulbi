import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { cn } from "shared/lib";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn("app", [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to="/about">AboutPage</Link>
      <Link to="/">MainPage</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
