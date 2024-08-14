import { WeatherMain } from "src/types/cityWithWeatherData";
import { IProperty } from "src/types/property";

export const getPropertiesTemperature = (main: WeatherMain): IProperty[] => {
  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = main;

  return [
    {
      label: "Temperature:",
      value: `${temp} \u00B0C`,
    },
    {
      label: "Feels like:",
      value: `${feels_like} \u00B0C`,
    },
    {
      label: "Min Temperature:",
      value: `${temp_min} \u00B0C`,
    },
    {
      label: "Max Temperature:",
      value: `${temp_max} \u00B0C`,
    },
    {
      label: "Pressure:",
      value: `${pressure} hPa`,
    },
    {
      label: "Humidity:",
      value: `${humidity} %`,
    },
  ];
};
