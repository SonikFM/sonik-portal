import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const todosApi = createApi({
	reducerPath: "todos",
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => `todos`,
		}),
	}),
});

export const { useGetTodosQuery } = todosApi;
