import React, { FC } from "react";
import { WeatherCard } from "./WeatherCard";
import { WeatherData } from "src/types/weatherData";

interface Props {
  citiesWeather: WeatherData[];
}

export const ListWeatherCards: FC<Props> = ({ citiesWeather }) => (
  <ul className="grid grid-cols-4 gap-5 py-5">
    {citiesWeather.map(({ id, name, weather, main, wind }) => (
      <li key={id}>
        <WeatherCard
          cityName={name}
          img={weather[0].icon}
          temp={main.temp}
          status={weather[0].main}
          description={weather[0].description}
          windSpeed={wind.speed}
        />
      </li>
    ))}
  </ul>
);
