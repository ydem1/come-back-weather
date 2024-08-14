import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";
import { getCurrentCityAsync } from "./actions";
import { CurrentCityState } from "./slice";

type ActionReducerMapBuilderWithCurrentCityState =
  ActionReducerMapBuilder<CurrentCityState>;

export const getCurrentCityReducer = (
  builder: ActionReducerMapBuilderWithCurrentCityState
) => {
  builder.addCase(getCurrentCityAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getCurrentCityAsync.fulfilled,
    (state, action: PayloadAction<CityWithWeatherData>) => {
      state.isLoading = false;
      state.item = action.payload;
    }
  );

  builder.addCase(getCurrentCityAsync.rejected, (state) => {
    state.isLoading = false;
  });
};
