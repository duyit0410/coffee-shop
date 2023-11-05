import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import app from "./app/slice";

export const store = configureStore({
  reducer: combineReducers({
    app,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
