import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/redux/store";

export const selectorWeatherPlotDataState = (state: RootState) =>
  state.weatherPlotData;

export const selectorWeatherPlotDataList = createSelector(
  selectorWeatherPlotDataState,
  (weatherPlotDataState) => weatherPlotDataState.list
);

export const selectorWeatherPlotDataIsLoading = createSelector(
  selectorWeatherPlotDataState,
  (weatherPlotDataState) => weatherPlotDataState.isLoading
);
