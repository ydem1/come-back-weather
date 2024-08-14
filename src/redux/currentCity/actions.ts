import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";
import { history } from "src/services/history";
import { delay } from "src/helpers/delay";
import { NotificationService } from "src/helpers/notifications";
import { errorResponses } from "src/constants/responses";
import { PATHNAMES } from "src/constants/routes";
import { CityWithWeatherData } from "src/types/cityWithWeatherData";

export const CURRENT_CITY_SLICE_NAME = "currentCity";

interface GetCityAsyncParams {
  lat: number;
  lon: number;
}

const PARAM_UTILS = "metric";

export const getCurrentCityAsync = createAsyncThunk(
  `${CURRENT_CITY_SLICE_NAME}/fetchCity`,
  async (params: GetCityAsyncParams, { rejectWithValue }) => {
    try {
      await delay();

      const { data } = await instance.get<CityWithWeatherData>(
        "/data/2.5/weather/",
        {
          params: {
            ...params,
            units: PARAM_UTILS,
          },
        }
      );

      return data;
    } catch ({ response }) {
      const errorText = response?.data?.message;

      history.push(PATHNAMES.NOT_FOUND, { replace: true });

      NotificationService.error(errorText || errorResponses.currentCity);

      return rejectWithValue(errorText);
    }
  }
);
