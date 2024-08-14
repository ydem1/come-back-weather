import { createSlice } from "@reduxjs/toolkit";
import { WeatherPlotData } from "src/types/weatherPlotData";
import { WEATHER_PLOT_DATA_SLICE_NAME } from "./actions";
import { getWeatherPlotDataReducer } from "./reducers";

export interface WeatherPlotDataState {
  isLoading: boolean;
  list: WeatherPlotData[];
}

const initialState: WeatherPlotDataState = {
  isLoading: false,
  list: [],
};

export const { reducer: weatherPlotData } = createSlice({
  name: WEATHER_PLOT_DATA_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getWeatherPlotDataReducer(builder);
  },
});
