import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";
import { delay } from "src/helpers/delay";
import { NotificationService } from "src/helpers/notifications";
import { errorResponses } from "src/constants/responses";

export const WEATHER_PLOT_DATA_SLICE_NAME = "weatherPlotData";

interface GetWeatherPlotDataAsyncParams {
  lat: number;
  lon: number;
}

const PARAM_UTILS = "metric";
const PARAM_CNT = 7;

export const getWeatherPlotDataAsync = createAsyncThunk(
  `${WEATHER_PLOT_DATA_SLICE_NAME}/fetchWeatherPlotData`,
  async (params: GetWeatherPlotDataAsyncParams, { rejectWithValue }) => {
    try {
      await delay();

      const { data } = await instance.get("/data/2.5/forecast/", {
        params: {
          ...params,
          units: PARAM_UTILS,
          cnt: PARAM_CNT,
        },
      });

      return data.list;
    } catch ({ response }) {
      const errorText = response?.data?.message;

      NotificationService.error(errorText || errorResponses.weatherPlotData);

      return rejectWithValue(errorText);
    }
  }
);
