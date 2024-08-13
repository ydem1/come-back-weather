import React, { FC } from "react";
import { selectorCities } from "src/redux/cities/selector";
import { useAppSelector } from "src/hooks/redux";
import { ListCities } from "src/components/ListCities";

export const MyCities: FC = () => {
  const cities = useAppSelector(selectorCities);

  console.log(cities)

  return (
    <div className="flex-1">
      <h2>My Cities</h2>
      <ListCities cities={cities} />
    </div>
  );
};
