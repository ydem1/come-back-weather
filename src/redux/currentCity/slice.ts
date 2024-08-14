import { createSlice } from "@reduxjs/toolkit";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";
import { CURRENT_CITY_SLICE_NAME } from "./actions";
import { getCurrentCityReducer } from "./reducers";

export interface CurrentCityState {
  isLoading: boolean;
  item: CityWithWeatherData;
}

const initialState: CurrentCityState = {
  isLoading: false,
  item: null,
};

export const { reducer: currentCity } = createSlice({
  name: CURRENT_CITY_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getCurrentCityReducer(builder);
  },
});
