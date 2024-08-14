import { CityWithWeatherData } from "src/types/cityWithWeatherData";
import { IProperty } from "src/types/property";

export const getPropertiesWeatherCard = (
  city: CityWithWeatherData
): IProperty[] => {
  const { main, weather, wind } = city;

  return [
    {
      label: "Temperature:",
      value: `${main.temp} \u00B0C`,
    },
    {
      label: "Weather main:",
      value: weather[0].main,
    },
    {
      label: "Description:",
      value: weather[0].description,
    },
    {
      label: "Speed of wind:",
      value: wind.speed,
    },
  ];
};
