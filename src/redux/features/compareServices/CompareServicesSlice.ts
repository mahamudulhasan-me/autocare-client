import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IService } from "../../../types";

const initialState = {
  service1: {} as IService,
  service2: {} as IService,
};

const compareServicesSlice = createSlice({
  name: "compareServices",
  initialState,
  reducers: {
    setService1: (state, action: PayloadAction<IService>) => {
      state.service1 = action.payload;
    },
    setService2: (state, action: PayloadAction<IService>) => {
      state.service2 = action.payload;
    },

    resetServiceCompare: (state) => {
      state.service2 = {} as IService;
    },
  },
});

export const { setService1, setService2, resetServiceCompare } =
  compareServicesSlice.actions;
export const compareServicesReducer = compareServicesSlice.reducer;
