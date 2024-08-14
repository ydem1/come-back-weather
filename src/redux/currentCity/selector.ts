import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/redux/store";

export const selectorCurrentCityState = (state: RootState) => state.currentCity;

export const selectorCurrentCityItem = createSelector(
  selectorCurrentCityState,
  (currentCityState) => currentCityState.item
);

export const selectorCurrentCityIsLoading = createSelector(
  selectorCurrentCityState,
  (currentCityState) => currentCityState.isLoading
);
