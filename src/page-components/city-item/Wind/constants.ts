import { WeatherWind } from "src/types/cityWithWeatherData";
import { IProperty } from "src/types/property";

export const getPropertiesWind = (wind: WeatherWind): IProperty[] => {
  const { speed, deg, gust } = wind;

  return [
    {
      label: "Speed:",
      value: `${speed} m/s`,
    },
    {
      label: "Direction:",
      value: `${deg} °`,
    },
    {
      label: "Gust:",
      value: `${gust} m/s`,
    },
  ];
};
