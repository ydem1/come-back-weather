import React, { FC } from "react";
import { useAppSelector } from "src/hooks/redux";
import { selectorCities } from "src/redux/cities/selector";
import { ListCities } from "src/components/ListCities";

export const MyCitiesList: FC = () => {
  const cities = useAppSelector(selectorCities);

  return (
    <div className="flex-1">
      <h2>My Cities List</h2>
      <ListCities cities={cities} />
    </div>
  );
};
