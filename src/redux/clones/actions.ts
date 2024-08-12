import { createAsyncThunk } from "@reduxjs/toolkit";

export const CLONES_SLICE_NAME = "clones";
export const ITEMS_PER_PAGE = 6;

interface Params {
  filters: string;
  page?: number;
}

export const getClonesAsync = createAsyncThunk(
  `${CLONES_SLICE_NAME}/fetchClones`,
  async ({ filters }: Params, { rejectWithValue }) => {}
);
