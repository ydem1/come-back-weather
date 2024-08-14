import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { successfulResponses, errorResponses } from "src/constants/responses";
import { delay } from "src/helpers/delay";
import { NotificationService } from "src/helpers/notifications";
import { instance } from "src/services/api-client";
import { ICity } from "src/types/city";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";

export const CITIES_SLICE_NAME = "cities";

interface AddCityAsyncParams {
  q: string;
  limit?: number;
}

export const addCityAsync = createAsyncThunk(
  `${CITIES_SLICE_NAME}/addCity`,
  async (params: AddCityAsyncParams, { rejectWithValue }) => {
    try {
      await delay();

      const { data: city } = await instance.get<Array<ICity>>(
        "/geo/1.0/direct",
        {
          params,
        }
      );

      const { lat, lon } = city[0];

      const { data } = await instance.get<CityWithWeatherData>(
        "/data/2.5/weather/",
        {
          params: {
            lat,
            lon,
            units: "metric",
          },
        }
      );

      NotificationService.success(successfulResponses.addingCity);

      return data;
    } catch ({ response }) {
      const errorText: string = response?.data?.message;

      NotificationService.error(errorText || errorResponses.addingCity);

      return rejectWithValue(errorText);
    }
  }
);

type RemoveCityPayload = number;

export const removeCity = createAction<RemoveCityPayload>(
  `${CITIES_SLICE_NAME}/removeCity`
);
