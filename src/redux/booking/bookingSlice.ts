import { createSlice } from "@reduxjs/toolkit";
import { IService, ISlot, IUser } from "../../types";

export interface INitialState {
  service: IService | undefined;
  slot: ISlot | undefined;
  customer: IUser | undefined;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number | null;
  registrationPlate: string;
}

const initialState: INitialState = {
  service: undefined,
  slot: undefined,
  customer: undefined,
  vehicleType: "",
  vehicleBrand: "",
  vehicleModel: "",
  manufacturingYear: null,
  registrationPlate: "",
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingData: (state, action) => {
      const {
        service,
        slot,
        customer,
        vehicleType,
        vehicleBrand,
        vehicleModel,
        manufacturingYear,
        registrationPlate,
      } = action.payload;

      state.service = service;
      state.slot = slot;
      state.customer = customer;
      state.vehicleType = vehicleType;
      state.vehicleBrand = vehicleBrand;
      state.vehicleModel = vehicleModel;
      state.manufacturingYear = manufacturingYear;
      state.registrationPlate = registrationPlate;
    },
  },
});

export const { setBookingData } = bookingSlice.actions;
export const bookingReducer = bookingSlice.reducer;
