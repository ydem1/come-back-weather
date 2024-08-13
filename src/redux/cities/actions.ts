import { createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "src/helpers/delay";
import { instance } from "src/services/api-client";
import { ICity } from "src/types/city";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";

export const CITIES_SLICE_NAME = "cities";

interface addCityAsyncParams {
  q: string;
  limit?: number;
}

export const addCityAsync = createAsyncThunk(
  `${CITIES_SLICE_NAME}/addCity`,
  async (params: addCityAsyncParams, { rejectWithValue }) => {
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

      return data;
    } catch ({ response }) {
      const errorText = response?.data?.message;

      return rejectWithValue(errorText);
    }
  }
);
