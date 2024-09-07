import { configureStore } from "@reduxjs/toolkit";
import {
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import baseApiSlice from "./baseApi/baseApiSlice";
import { authReducer } from "./features/authentication/authSlice";

import { bookingReducer } from "./booking/bookingSlice";
import { serviceReducer } from "./features/service/serviceSlice";
import updateServiceSlice from "./features/update/updateServiceSlice";
import { imagebbApiSlice } from "./imageBBApi/imageBBpi";

const persistConfig = {
  key: "auth",
  storage,
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
    [imagebbApiSlice.reducerPath]: imagebbApiSlice.reducer,
    auth: persistAuthReducer,
    updateService: updateServiceSlice,
    booking: bookingReducer,
    service: serviceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REHYDRATE, PURGE],
      },
    }).concat(baseApiSlice.middleware, imagebbApiSlice.middleware),
  devTools: import.meta.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const accessTokenSelector = (state: RootState) => state.auth.token;

export const userSelector = (state: RootState) => state.auth;
