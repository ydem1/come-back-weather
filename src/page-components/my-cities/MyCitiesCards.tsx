import React, { FC } from "react";
import { useAppSelector } from "src/hooks/redux";
import { selectorCities } from "src/redux/cities/selector";
import { ListWeatherCards } from "src/components/ListWeatherCards";

export const MyCitiesCards: FC = () => {
  const cities = useAppSelector(selectorCities);

  return (
    <section className="container">
      <h2>My Cities Cards</h2>

      <ListWeatherCards cities={cities} />
    </section>
  );
};
