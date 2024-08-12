import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { clones } from "./clones/slice";

export const store = configureStore({
  reducer: combineReducers({
    clones,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
