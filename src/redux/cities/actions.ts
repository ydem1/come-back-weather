import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "src/services/api-client";

export const CITIES_SLICE_NAME = "cities";

export const getCitiesAsync = createAsyncThunk(
  `${CITIES_SLICE_NAME}/fetchCities`,
  async (params, { rejectWithValue }) => {}
);

interface getCityAsyncParams {
  q: string;
  limit?: number;
}

export const getCityAsync = createAsyncThunk(
  `${CITIES_SLICE_NAME}/fetchCity`,
  async (params: getCityAsyncParams, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/geo/1.0/direct", {
        params,
      });

      const res = data[0];

      // додати вивід помилки
      if (!res) {
        throw new Error();
      }

      return data[0];
    } catch ({ response }) {
      const errorText = response?.data?.message;

      return rejectWithValue(errorText);
    }
  }
);
