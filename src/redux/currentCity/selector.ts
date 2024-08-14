import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/redux/store";

export const selectorCurrentCityState = (state: RootState) => state.currentCity;

export const selectorCurrentCity = createSelector(
  selectorCurrentCityState,
  (currentCityState) => currentCityState
);

