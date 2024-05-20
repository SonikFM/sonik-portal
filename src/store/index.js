import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import globalSlice from "./global/slice";
import { todosApi } from "@/apis/todos";

export const store = configureStore({
	reducer: {
		app: globalSlice,
		[todosApi.reducerPath]: todosApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todosApi.middleware),
});
setupListeners(store.dispatch);
