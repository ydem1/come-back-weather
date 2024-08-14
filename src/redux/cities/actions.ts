import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "src/helpers/delay";
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

      return data;
    } catch ({ response }) {
      const errorText = response?.data?.message;

      return rejectWithValue(errorText);
    }
  }
);

type RemoveCityPayload = number;

export const removeCity = createAction<RemoveCityPayload>(
  `${CITIES_SLICE_NAME}/removeCity`
);

// вивід помилок
// перезапит на картці
// популар city додати у редакс?
// адаптив
// подивитися де можна менше передавати пропсів
// поправити home page вивід інфи про проєкт
// подивитися імпорти
// налаштувати pritter eslint
// test

// ще один запит для на день (додатково)
