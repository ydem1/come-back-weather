import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/redux/store";

export const selectorCitiesState = (state: RootState) => state.cities;

export const selectorCities = createSelector(
  selectorCitiesState,
  (citiesState) => citiesState.data
);

export const selectorCitiesLoading = createSelector(
  selectorCitiesState,
  (citiesState) => citiesState.isLoading
);
