import React, { FC } from "react";
import { ListWeatherCards } from "src/components/ListWeatherCards";

export const HomeCards: FC = () => (
  <section className="container">
    <h2>Home Cards</h2>

    <ListWeatherCards citiesWeather={[]} />
  </section>
);
