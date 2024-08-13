import { createSlice } from "@reduxjs/toolkit";
import { CLONES_SLICE_NAME } from "./actions";
import { getClonesReducer } from "./reducers";

export interface ClonesState {
  isLoading: boolean;
  data: number[] | null;
}

const initialState: ClonesState = {
  isLoading: false,
  data: null,
};

export const { reducer: clones } = createSlice({
  name: CLONES_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getClonesReducer(builder);
  },
});
