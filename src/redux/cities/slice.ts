import { createSlice } from "@reduxjs/toolkit";
import { localStorageCities } from "src/localStorage/cities";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";
import { CITIES_SLICE_NAME } from "./actions";
import { addCityReducer, removeCityReducer } from "./reducers";

export interface CitiesState {
  isLoading: boolean;
  data: CityWithWeatherData[];
}

const initialState: CitiesState = {
  isLoading: false,
  data: localStorageCities.getAll(),
};

export const { reducer: cities } = createSlice({
  name: CITIES_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    addCityReducer(builder);
    removeCityReducer(builder);
  },
});
