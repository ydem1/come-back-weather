import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/redux/store";

export const selectorClonesState = (state: RootState) => state.clones;

export const selectorClones = createSelector(
  selectorClonesState,
  (clonesState) => clonesState
);
