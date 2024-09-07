import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IServiceQueryParams } from "../../../types/global.type";

// Define the initial state with a type
interface ServiceState {
  params: IServiceQueryParams[];
}

const initialState: ServiceState = {
  params: [],
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    // Action to set parameters
    setParams: (
      state,
      action: PayloadAction<IServiceQueryParams & { method?: string }>
    ) => {
      const { method, name } = action.payload;

      // If method is "filter", reset the params array with the new value
      if (method === "filter") {
        state.params = [action.payload];
        return;
      }

      // Find existing parameter by name
      const existingParam = state.params.find((param) => param.name === name);

      if (existingParam) {
        // If parameter exists, remove it from params
        state.params = state.params.filter((param) => param.name !== name);
      } else {
        // Otherwise, add the new parameter
        state.params.push(action.payload);
      }
    },

    // Action to clear all parameters
    clearParams: (state) => {
      state.params = [];
    },
  },
});

export const { setParams, clearParams } = serviceSlice.actions;
export const serviceReducer = serviceSlice.reducer;
