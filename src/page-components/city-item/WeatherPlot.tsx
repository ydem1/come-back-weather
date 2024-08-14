import React, { FC, useEffect } from "react";
import { Axis, Heading, Legend, LineSeries, Plot } from "react-plot";
import { useMediaQuery } from "react-responsive";
import { CircularProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getWeatherPlotDataAsync } from "src/redux/weatherPlotData/actions";
import {
  selectorWeatherPlotDataIsLoading,
  selectorWeatherPlotDataList,
} from "src/redux/weatherPlotData/selector";
import { SCREEN_BREAKPOINTS } from "src/constants/screenBreakpoints";

interface Props {
  lat: number;
  lon: number;
}

export const WeatherPlot: FC<Props> = ({ lat, lon }) => {
  const dispatch = useAppDispatch();

  const isLGScreenBreakpoint = useMediaQuery({
    maxWidth: SCREEN_BREAKPOINTS.LG,
  });

  const width = isLGScreenBreakpoint ? 300 : 800;
  const height = isLGScreenBreakpoint ? 550 : 250;

  const list = useAppSelector(selectorWeatherPlotDataList);
  const isLoading = useAppSelector(selectorWeatherPlotDataIsLoading);

  const processedData = list.map(({ dt, main }) => {
    const date = new Date(dt * 1000);
    const hours = date.getHours();

    return {
      x: hours,
      y: main.temp,
    };
  });

  useEffect(() => {
    dispatch(
      getWeatherPlotDataAsync({
        lat: +lat,
        lon: +lon,
      })
    );
  }, [dispatch, lat, lon]);

  if (!list && !isLoading) {
    return null;
  }

  return isLoading ? (
    <div className="flex justify-center items-center w-full h-96">
      <CircularProgress />
    </div>
  ) : (
    <section className="container">
      <div className="flex justify-center">
        <Plot width={width} height={height}>
          <Heading title="Temperature" subtitle="Hourly temperature forecast" />
          <LineSeries data={processedData} xAxis="x" yAxis="y" />
          <Axis id="x" position="bottom" label="Time" displayPrimaryGridLines />
          <Axis
            id="y"
            position="left"
            label="Temperature (°C)"
            displayPrimaryGridLines
          />
          <Legend position="right" />
        </Plot>
      </div>
    </section>
  );
};
