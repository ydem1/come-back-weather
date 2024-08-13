import { createSlice } from "@reduxjs/toolkit";
import { CITIES_SLICE_NAME } from "./actions";
import { getCityReducer } from "./reducers";
import { ICity } from "src/types/city";

const getInitialData = (): ICity[] => {
  const storedData = localStorage.getItem("cities");
  if (storedData) {
    try {
      return JSON.parse(storedData) as ICity[];
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return [];
    }
  }
  return [];
};

export interface CitiesState {
  isLoading: boolean;
  data: ICity[];
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
    getCityReducer(builder);
  },
});
