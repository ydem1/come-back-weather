import React, { FC, useEffect, useState } from "react";
import { ListWeatherCards } from "src/components/ListWeatherCards";
import { instance } from "src/services/api-client";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";
import { POPULAR_CITIES } from "./constants";

export const PopularCities: FC = () => {
  const [popularCities, setPopularCities] = useState<CityWithWeatherData[]>([]);

  useEffect(() => {
    POPULAR_CITIES.forEach(({ lat, lon }) => {
      instance
        .get<CityWithWeatherData>("/data/2.5/weather/", {
          params: {
            lat,
            lon,
            units: "metric",
          },
        })
        .then((response) => {
          setPopularCities((current) => [...current, response.data]);
        });
    });
  }, []);

  return (
    <section className="container">
      <h2>Popular Cities</h2>

      <ListWeatherCards citiesWeather={popularCities} />
    </section>
  );
};
