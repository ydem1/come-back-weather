import React, { FC } from "react";
import { ListWeatherCards } from "src/components/ListWeatherCards";
import { useAppSelector } from "src/hooks/redux";
import { selectorCities } from "src/redux/cities/selector";

export const MyCitiesCards: FC = () => {
  const cities = useAppSelector(selectorCities);

  return (
    <section className="container">
      <h2>My Cities Cards</h2>

      <ListWeatherCards citiesWeather={cities} />
    </section>
  );
};
