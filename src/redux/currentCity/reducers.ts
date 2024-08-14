import { PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";
import { CurrentCityState } from "./slice";
import { getCurrentCityAsync } from "./actions";

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
