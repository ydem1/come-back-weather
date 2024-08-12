import React, { FC } from "react";
import { useRoutes } from "react-router-dom";
import { Home, NotFound } from "../pages";
import { PATHNAMES } from "../constants/routes";

const ROUTES = [
  {
    element: <Home />,
    path: PATHNAMES.HOME,
  },
  {
    element: <NotFound />,
    path: PATHNAMES.NOT_FOUND,
  },
];

const AppRoutes: FC = () => {
  return useRoutes(ROUTES);
};

export default AppRoutes;
