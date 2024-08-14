import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { localStorageCities } from "src/localStorage/cities";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";
import { addCityAsync, removeCity } from "./actions";
import { CitiesState } from "./slice";

type ActionReducerMapBuilderWithCitiesState =
  ActionReducerMapBuilder<CitiesState>;

export const addCityReducer = (
  builder: ActionReducerMapBuilderWithCitiesState
) => {
  builder.addCase(addCityAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    addCityAsync.fulfilled,
    (state, action: PayloadAction<CityWithWeatherData>) => {
      state.isLoading = false;

      const cityExists = state.data.some(
        (city) => city.name === action.payload.name
      );

      if (!cityExists) {
        state.data = [...state.data, action.payload];
        localStorageCities.add(action.payload);
      } else {
        // додати вивід помилки
        console.log("Місто вже додано.");
      }
    }
  );

  builder.addCase(addCityAsync.rejected, (state) => {
    state.isLoading = false;
  });
};

export const removeCityReducer = (
  builder: ActionReducerMapBuilderWithCitiesState
) => {
  builder.addCase(removeCity, (state, action: PayloadAction<number>) => {
    state.data = state.data.filter((city) => city.id !== action.payload);
    localStorageCities.remove(action.payload);
  });
};
