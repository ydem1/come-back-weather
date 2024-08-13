import React, { FC } from "react";
import { useRoutes } from "react-router-dom";
import { Home, MyCities, AllCities, NotFound } from "src/pages";
import { PATHNAMES } from "src/constants/routes";

const ROUTES = [
  {
    element: <Home />,
    path: PATHNAMES.HOME,
  },
  {
    element: <MyCities />,
    path: PATHNAMES.MY_CITIES,
  },
  {
    element: <AllCities />,
    path: PATHNAMES.ALL_CITIES,
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
