import React, { FC } from "react";
import { WeatherCard } from "./WeatherCard";
import { WeatherData } from "src/types/weatherData";

interface Props {
  citiesWeather: WeatherData[];
}

export const ListWeatherCards: FC<Props> = ({ citiesWeather }) => (
  <ul className="grid grid-cols-4 gap-5 py-5">
    {citiesWeather.map((city) => (
      <li key={city.id}>
        <WeatherCard {...city} />
      </li>
    ))}
  </ul>
);
