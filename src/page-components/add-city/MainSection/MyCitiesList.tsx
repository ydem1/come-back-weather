import React, { FC } from "react";
import { ListCities } from "src/components/ListCities";
import { useAppSelector } from "src/hooks/redux";
import { selectorCities } from "src/redux/cities/selector";

export const MyCitiesList: FC = () => {
  const cities = useAppSelector(selectorCities);

  return (
    <div className="flex-1">
      <h2>My Cities List</h2>
      <ListCities cities={cities} />
    </div>
  );
};
