import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { WeatherPlotData } from "src/types/weatherPlotData";
import { getWeatherPlotDataAsync } from "./actions";
import { WeatherPlotDataState } from "./slice";

type ActionReducerMapBuilderWithWeatherPlotDataState =
  ActionReducerMapBuilder<WeatherPlotDataState>;

export const getWeatherPlotDataReducer = (
  builder: ActionReducerMapBuilderWithWeatherPlotDataState
) => {
  builder.addCase(getWeatherPlotDataAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getWeatherPlotDataAsync.fulfilled,
    (state, action: PayloadAction<WeatherPlotData[]>) => {
      state.isLoading = false;
      state.list = action.payload;
    }
  );

  builder.addCase(getWeatherPlotDataAsync.rejected, (state) => {
    state.isLoading = false;
    state.list = [];
  });
};
