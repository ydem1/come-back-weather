import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";
import { delay } from "src/helpers/delay";
import { NotificationService } from "src/helpers/notifications";
import { errorResponses, successfulResponses } from "src/constants/responses";
import { ICity } from "src/types/city";
import { RootState } from "../store";

export const CITIES_SLICE_NAME = "cities";

interface AddCityAsyncParams {
  q: string;
  limit?: number;
}

export const addCityAsync = createAsyncThunk(
  `${CITIES_SLICE_NAME}/addCity`,
  async (params: AddCityAsyncParams, { rejectWithValue, getState }) => {
    try {
      await delay();

      const { data } = await instance.get<Array<ICity>>("/geo/1.0/direct", {
        params,
      });

      if (data.length === 0) {
        NotificationService.error(errorResponses.cityNotFound);

        return rejectWithValue(errorResponses.cityNotFound);
      }

      const newCity = data[0];

      const state = getState() as RootState;

      const existingCity = state.cities.data.find(
        (city) => city.name === newCity.name && city.country === newCity.country
      );

      if (existingCity) {
        NotificationService.error(errorResponses.cityAlreadyExists);

        return rejectWithValue(errorResponses.cityAlreadyExists);
      }

      NotificationService.success(successfulResponses.addingCity);

      return newCity;
    } catch ({ response }) {
      const errorText: string = response?.data?.message;

      NotificationService.error(errorText || errorResponses.addingCity);

      return rejectWithValue(errorText);
    }
  }
);

type RemoveCityPayload = string;

export const removeCity = createAction<RemoveCityPayload>(
  `${CITIES_SLICE_NAME}/removeCity`
);
