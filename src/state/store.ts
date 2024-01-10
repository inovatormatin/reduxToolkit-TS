// to create our store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Here ReturnType is a typescript helper
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
