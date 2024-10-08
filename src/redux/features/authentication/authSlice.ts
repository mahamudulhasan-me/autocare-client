import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../types";

export interface IAuthState {
  isAuthenticated: boolean;
  user: IUser | null;
  token: string | null;
}
const initialState: IAuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
