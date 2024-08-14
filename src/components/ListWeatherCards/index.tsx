import React, { FC } from "react";
import { Alert } from "@mui/material";
import { ICity } from "src/types/city";
import { WeatherCard } from "./WeatherCard";

interface Props {
  cities: ICity[];
}

export const ListWeatherCards: FC<Props> = ({ cities }) => {
  return cities.length !== 0 ? (
    <ul className="grid xs:grid-cols-2 md:grid-cols-3 gl:grid-cols-4 gap-5 py-5">
      {cities.map((city) => (
        <li key={city.name}>
          <WeatherCard {...city} />
        </li>
      ))}
    </ul>
  ) : (
    <Alert className="mt-5" severity="info">
      List is empty.
    </Alert>
  );
};
