import { createSlice } from "@reduxjs/toolkit";
import { IService } from "../../../types";

interface UpdateServiceState {
  isUpdateMode: boolean;
  updateService: IService | null;
}

const initialState: UpdateServiceState = {
  isUpdateMode: false,
  updateService: null,
};

const updateServiceSlice = createSlice({
  name: "updateService",
  initialState,
  reducers: {
    enableUpdateMode: (state, action) => {
      state.isUpdateMode = action.payload.updateMode;
      state.updateService = action.payload.data;
    },
  },
});

export const { enableUpdateMode } = updateServiceSlice.actions;
export default updateServiceSlice.reducer;
