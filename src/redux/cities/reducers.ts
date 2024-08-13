import { PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { ICity } from "src/types/city";
import { CitiesState } from "./slice";
import { getCityAsync } from "./actions";

type ActionReducerMapBuilderWithCitiesState =
  ActionReducerMapBuilder<CitiesState>;

export const getCityReducer = (
  builder: ActionReducerMapBuilderWithCitiesState
) => {
  builder.addCase(getCityAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getCityAsync.fulfilled,
    (state, action: PayloadAction<ICity>) => {
      state.isLoading = false;

      const cityExists = state.data.some(
        (city) => city.name === action.payload.name
      );

      if (!cityExists) {
        const newData = [...state.data, action.payload];
        state.data = newData;
        localStorage.setItem("cities", JSON.stringify(newData));
      } else {
        // додати вивід помилки
        console.log("Місто вже додано.");
      }
    }
  );

  builder.addCase(getCityAsync.rejected, (state) => {
    state.isLoading = false;
  });
};
