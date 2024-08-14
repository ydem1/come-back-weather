import React, { FC } from "react";
import { Alert } from "@mui/material";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";
import { WeatherCard } from "./WeatherCard";

interface Props {
  citiesWeather: CityWithWeatherData[];
}

export const ListWeatherCards: FC<Props> = ({ citiesWeather }) =>
  citiesWeather.length !== 0 ? (
    <ul className="grid xs:grid-cols-2 md:grid-cols-3 gl:grid-cols-4 gap-5 py-5">
      {citiesWeather.map(({ id, name, weather, main, wind }) => (
        <li key={id}>
          <WeatherCard
            id={id}
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
  ) : (
    <Alert className="mt-5" severity="info">List is empty.</Alert>
  );
