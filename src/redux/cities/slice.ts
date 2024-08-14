import { createSlice } from "@reduxjs/toolkit";
import { localStorageCities } from "src/localStorage/cities";
import { ICity } from "src/types/city";
import { CITIES_SLICE_NAME } from "./actions";
import { addCityReducer, removeCityReducer } from "./reducers";

export interface CitiesState {
  isLoading: boolean;
  data: ICity[];
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
