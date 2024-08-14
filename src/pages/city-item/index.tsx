import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Header } from "src/page-components/city-item/Header";
import { Temperature } from "src/page-components/city-item/Temperature";
import { Wind } from "src/page-components/city-item/Wind";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";

const cityWeather: CityWithWeatherData = {
  base: "stations",
  clouds: { all: 75 },
  cod: 200,
  coord: { lon: -0.1276, lat: 51.5073 },
  dt: 1723610170,
  id: 2643743,
  main: {
    temp: 17.42,
    feels_like: 17.49,
    temp_min: 15.74,
    temp_max: 18.49,
    pressure: 1012,
    humidity: 213,
  },
  name: "London",
  sys: {
    type: 2,
    id: 2075535,
    country: "GB",
    sunrise: 1723610703,
    sunset: 1723663527,
  },
  timezone: 3600,
  visibility: 10000,
  weather: [
    { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
  ],
  wind: { speed: 0.45, deg: 210, gust: 0.89 },
};

const CityItem: FC = () => {
  const { id } = useParams();

  return (
    <PageWrapper mainClassName="flex flex-col gap-5">
      <Header
        cityName={`${cityWeather.name}: ${id}`}
        {...cityWeather.weather[0]}
      />
      <Temperature {...cityWeather.main} />
      <Wind {...cityWeather.wind} />
    </PageWrapper>
  );
};
export default CityItem;
