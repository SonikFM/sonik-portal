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
      updateTicketTier: builder.mutation({
        query: ({ _tickettier, body }) => ({
          url: `ticket-tiers/${_tickettier}`,
          method: "PUT",
          body,
        }),
      }),
      finalizeEvent: builder.mutation({
        query: ({ _event, body }) => ({
          url: `events/finalize/${_event}`,
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
  useUpdateTicketTierMutation,
  useFinalizeEventMutation,
} = eventApi;
