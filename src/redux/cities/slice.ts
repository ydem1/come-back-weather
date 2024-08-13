import { createSlice } from "@reduxjs/toolkit";
import { CITIES_SLICE_NAME } from "./actions";
import { getCityReducer } from "./reducers";
import { ICity } from "src/types/city";

export interface CitiesState {
  isLoading: boolean;
  data: ICity[];
}

const initialState: CitiesState = {
  isLoading: false,
  data: [],
};

export const { reducer: cities } = createSlice({
  name: CITIES_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getCityReducer(builder);
  },
});
