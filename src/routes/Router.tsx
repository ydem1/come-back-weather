import React, { FC } from "react";
import { useRoutes } from "react-router-dom";
import { PATHNAMES } from "src/constants/routes";
import { AddCity, CityItem, Home, MyCities, NotFound } from "src/pages";

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
    element: <AddCity />,
    path: PATHNAMES.ALL_CITIY,
  },
  {
    element: <CityItem />,
    path: PATHNAMES.CITY_ITEM,
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
