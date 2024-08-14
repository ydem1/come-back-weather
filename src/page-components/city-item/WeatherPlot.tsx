import React, { FC, useEffect, useState } from "react";
import { Axis, Heading, Legend, LineSeries, Plot } from "react-plot";
import { instance } from "src/services/api-client";

interface WeatherPlotData {
  dt: number;
  main: {
    temp: number;
  };
}

interface Props {
  lat: number;
  lon: number;
}

export const WeatherPlot: FC<Props> = ({ lat, lon }) => {
  const [weatherData, setWeatherData] = useState<WeatherPlotData[]>([]);

  const processedData = weatherData.map(({ dt, main }) => {
    const date = new Date(dt * 1000);
    const hours = date.getHours();

    return {
      x: hours,
      y: main.temp,
    };
  });

  useEffect(() => {
    instance
      .get("/data/2.5/forecast/", {
        params: {
          lat,
          lon,
          units: "metric",
          cnt: 7,
        },
      })
      .then((response) => {
        setWeatherData(response.data.list);
      })
      .catch(() => {
        setWeatherData([]);
      });
  }, [lat, lon]);

  return (
    <section className="container">
      <Plot width={1200} height={250}>
        <Heading
          title="Temperature over Time"
          subtitle="Hourly temperature forecast"
        />
        <LineSeries
          data={processedData}
          xAxis="x"
          yAxis="y"
          lineStyle={{ strokeWidth: 3 }}
          label="Temperature (°C)"
          displayMarkers={true}
          markerShape="circle"
        />
        <Axis id="x" position="bottom" label="Time" displayPrimaryGridLines />
        <Axis
          id="y"
          position="left"
          label="Temperature (°C)"
          displayPrimaryGridLines
        />
        <Legend position="right" />
      </Plot>
    </section>
  );
};
