import { createSlice } from "@reduxjs/toolkit";
import { IServiceQueryParams } from "../../../types/global.type";

const initialState = {
  params: [] as IServiceQueryParams[],
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setParams: (state, action) => {
      const existingIndex = state.params.findIndex(
        (param) => param.name === action.payload.name
      );

      if (existingIndex !== -1) {
        // If the same param exists, remove it
        state.params.splice(existingIndex, 1);
      } else {
        // Otherwise, add it
        state.params.push(action.payload);
      }
    },
  },
});

export const { setParams } = serviceSlice.actions;
export const serviceReducer = serviceSlice.reducer;
