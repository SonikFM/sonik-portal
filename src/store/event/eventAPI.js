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
      updateEvent: builder.mutation({
        query: ({ _event, body }) => ({
          url: `events/${_event}`,
          method: "PUT",
          body,
        }),
      }),
      addTicketTier: builder.mutation({
        query: body => ({
          url: "ticket-tiers",
          method: "POST",
          body,
        }),
      }),
    };
  },
});

export const {
  useCreateDraftEventMutation,
  useUpdateEventMutation,
  useAddTicketTierMutation,
} = eventApi;
