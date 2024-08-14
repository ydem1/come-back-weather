import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cities } from "./cities/slice";
import { currentCity } from "./currentCity/slice";
import { weatherPlotData } from "./weatherPlotData/slice";

export const store = configureStore({
  reducer: combineReducers({
    cities,
    currentCity,
    weatherPlotData,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
