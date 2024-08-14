import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";
import { delay } from "src/helpers/delay";
import { NotificationService } from "src/helpers/notifications";
import { errorResponses, successfulResponses } from "src/constants/responses";
import { ICity } from "src/types/city";

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

      const { data } = await instance.get<Array<ICity>>("/geo/1.0/direct", {
        params,
      });

      NotificationService.success(successfulResponses.addingCity);

      return data[0];
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
