import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { ClonesState } from "./slice";

type ActionReducerMapBuilderWithClonesState =
  ActionReducerMapBuilder<ClonesState>;

export const getClonesReducer = (
  builder: ActionReducerMapBuilderWithClonesState
) => {};
