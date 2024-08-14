import { createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "src/helpers/delay";
import { instance } from "src/services/api-client";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";

export const CURRNT_CITY_SLICE_NAME = "currentCity";

interface GetCityAsyncParams {
  id: string;
}

export const getCurrentCityAsync = createAsyncThunk(
  `${CURRNT_CITY_SLICE_NAME}/fetchCity`,
  async (params: GetCityAsyncParams, { rejectWithValue }) => {
    try {
      await delay();

      const { data } = await instance.get<CityWithWeatherData>(
        "/data/2.5/weather/",
        {
          params: {
            ...params,
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
