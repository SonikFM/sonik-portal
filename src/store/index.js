import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import app from "./global/slice";
import organization from "./organization/slice";
import { todosApi } from "@/apis/todos";

export const store = configureStore({
  reducer: {
    app,
    organization,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
setupListeners(store.dispatch);
