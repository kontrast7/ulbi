import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/about-page";
import { MainPage } from "pages/main-page";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
};
