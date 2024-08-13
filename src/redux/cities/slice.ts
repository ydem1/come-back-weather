import { createSlice } from "@reduxjs/toolkit";
import { CITIES_SLICE_NAME } from "./actions";
import { addCityReducer } from "./reducers";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";

const getInitialData = (): CityWithWeatherData[] => {
  const storedData = localStorage.getItem("cities");
  if (storedData) {
    try {
      return JSON.parse(storedData) as CityWithWeatherData[];
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return [];
    }
  }
  return [];
};

export interface CitiesState {
  isLoading: boolean;
  data: CityWithWeatherData[];
}

const initialState: CitiesState = {
  isLoading: false,
  data: getInitialData(),
};

export const { reducer: cities } = createSlice({
  name: CITIES_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    addCityReducer(builder);
  },
});
