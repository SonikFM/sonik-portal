import { apiSlice } from "../api";

export const eventApi = apiSlice.injectEndpoints({
  endpoints: builder => {
    return {
      createDraftEvent: builder.mutation({
        query: body => ({
          url: "events/draft",
          method: "POST",
          body,
        }),
      }),
    };
  },
});

export const { useCreateDraftEventMutation } = eventApi;
