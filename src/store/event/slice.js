import { createSlice } from "@reduxjs/toolkit";
import { eventApi } from "./eventAPI";

const initialState = {
  basics: {
    title: "",
    type: "concert",
    description: "",
    privacy: "public",
    venue: {
      _venue: "",
      google_place_id: "",
      formatted_address: "",
      location: {
        type: "",
        coordinates: [-118.2437, 34.0522],
      },
      city: "",
      region: "",
      country: "",
    },
    presented_by: "",
    artists: [],
  },
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEventInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      eventApi.endpoints.createDraftEvent.matchFulfilled,
      (state, { payload }) => {
        console.log(payload, state);
      },
    );
  },
});

export const { setEventInfo } = eventSlice.actions;

export const selectEvent = state => state.auth;

export default eventSlice.reducer;
