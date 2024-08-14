import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorResponses } from "src/constants/responses";
import { PATHNAMES } from "src/constants/routes";
import { delay } from "src/helpers/delay";
import { NotificationService } from "src/helpers/notifications";
import { instance } from "src/services/api-client";
import { history } from "src/services/history";
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
        },
      );

      return data;
    } catch ({ response }) {
      const errorText = response?.data?.message;

      history.push(PATHNAMES.NOT_FOUND, { replace: true });

      NotificationService.error(errorText || errorResponses.currentCity);

      return rejectWithValue(errorText);
    }
  },
);
