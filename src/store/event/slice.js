import { createSlice } from "@reduxjs/toolkit";
import { eventApi } from "./eventAPI";
import { toast } from "react-toastify";
import { componentFilteredSteps } from "@/containers/Event/steps/config";

const initialState = {
  currentStep: 1,
  steps: componentFilteredSteps,
  data: {
    _created_by: "",
    _organization: "",
    _tickettiers: [],
    event_id: "",
    title: "",
    type: "concert",
    event_status: "",
    description: "",
    privacy: "public",
    venue: {
      _venue: "",
      google_place_id: "",
      formatted_address: "",
      location: {
        type: "",
        coordinates: [],
      },
      city: "",
      region: "",
      country: "",
    },
    presented_by: "",
    timezone: "",
    images: {
      additionalImages: [],
    },
    age_limit: "",
    re_entry_allowed: false,
    currency: "",
    ticket_limit_per_user: 0,
    _id: "",
    artists: [],
    lineup: [],
    createdAt: "",
    updatedAt: "",
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
        if (payload.message) toast.success(payload.message);
        const newEvent = { ...state, data: payload.data };
        if (payload.success && state.currentStep < 5) {
          newEvent.currentStep += 1;
        }
        return newEvent;
      },
    );
    builder.addMatcher(
      eventApi.endpoints.createDraftEvent.matchRejected,
      (_state, { payload }) => {
        if (payload.data.message)
          toast.error(payload.data.message || "Event creation failed!");
      },
    );
    builder.addMatcher(
      eventApi.endpoints.updateEvent.matchFulfilled,
      (state, { payload }) => {
        if (payload.message) toast.success(payload.message);
        const newEvent = { ...state, data: payload.data };
        newEvent.steps = newEvent.steps.map((step, index) =>
          index === newEvent.currentStep - 1
            ? { ...step, checked: true }
            : step,
        );
        if (payload.success && state.currentStep < 5) {
          newEvent.currentStep += 1;
        }
        return newEvent;
      },
    );
    builder.addMatcher(
      eventApi.endpoints.updateEvent.matchRejected,
      (_state, { payload }) => {
        if (payload.data.message) toast.success(payload.data.message);
      },
    );
    builder.addMatcher(
      eventApi.endpoints.addTicketTier.matchFulfilled,
      (state, { payload }) => {
        if (payload.message) toast.success(payload.message);
      },
    );
  },
});

export const { setEventInfo } = eventSlice.actions;

export const selectEvent = state => state.event;

export default eventSlice.reducer;
