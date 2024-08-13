import { createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "src/helpers/delay";
import { instance } from "src/services/api-client";
import { ICity } from "src/types/city";
import { WeatherData } from "src/types/weatherData";

export const CITIES_SLICE_NAME = "cities";

interface getCityAsyncParams {
  q: string;
  limit?: number;
}

export const getCityAsync = createAsyncThunk(
  `${CITIES_SLICE_NAME}/fetchCity`,
  async (params: getCityAsyncParams, { rejectWithValue }) => {
    try {
      await delay();

      const { data: city } = await instance.get<Array<ICity>>(
        "/geo/1.0/direct",
        {
          params,
        }
      );

      // додати вивід помилки
      if (!city[0]) {
        throw new Error();
      }

      const { lat, lon } = city[0];

      const { data } = await instance.get<WeatherData>(
        "/data/2.5/weather/",
        {
          params: {
            lat,
            lon,
            units: "metric",
          },
        }
      );

      return data;
    } catch ({ response }) {
      const errorText = response?.data?.message;

      return rejectWithValue(errorText);
    }
  }
);
