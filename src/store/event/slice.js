import { createSlice } from "@reduxjs/toolkit";
import { eventApi } from "./eventAPI";
import { toast } from "react-toastify";
import { getComponentFilteredSteps } from "@/containers/Event/steps/config";

const initialState = {
  currentStep: 1,
  steps: getComponentFilteredSteps(false),
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
      name: "",
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
    age_limit: 18,
    re_entry_allowed: false,
    currency: "COL",
    ticket_limit_per_user: 1,
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
      (state, { payload, meta }) => {
        if (payload.message) toast.success(payload.message);
        const newEvent = { ...state, data: payload.data };
        const activeStep = meta.arg.originalArgs.activeStep;
        newEvent.steps = newEvent.steps.map((step, index) =>
          index === activeStep - 1 ? { ...step, checked: true } : step,
        );
        if (
          payload.success &&
          activeStep === state.currentStep &&
          state.currentStep < 6
        ) {
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
      (state, { payload, meta }) => {
        if (payload.message) toast.success(payload.message);
        const activeStep = meta.arg.originalArgs.activeStep;
        const newEvent = { ...state, data: payload.data };
        newEvent.steps = newEvent.steps.map((step, index) =>
          index === activeStep - 1 ? { ...step, checked: true } : step,
        );
        if (
          payload.success &&
          activeStep === state.currentStep &&
          state.currentStep < 6
        ) {
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
        state.data._tickettiers.push(payload.data);
        return state;
      },
    );
    builder.addMatcher(
      eventApi.endpoints.addTicketTier.matchRejected,
      (_state, { payload }) => {
        if (payload.data.message) toast.success(payload.data.message);
      },
    );
    builder.addMatcher(
      eventApi.endpoints.updateTicketTier.matchFulfilled,
      (state, { payload }) => {
        if (payload.message) toast.success(payload.message);
        state.data._tickettiers = state.data._tickettiers.map(tier =>
          tier._id === payload.data._id ? payload.data : tier,
        );
        return state;
      },
    );
    builder.addMatcher(
      eventApi.endpoints.updateTicketTier.matchRejected,
      (_state, { payload }) => {
        if (payload.data.message) toast.success(payload.data.message);
      },
    );
    builder.addMatcher(
      eventApi.endpoints.finalizeEvent.matchFulfilled,
      (state, { payload }) => {
        if (payload.message) toast.success(payload.message);
        Object.assign(state, initialState);
        return state;
      },
    );
    builder.addMatcher(
      eventApi.endpoints.getSingleEvent.matchFulfilled,
      (state, { payload }) => {
        state.data = payload.data;
        if (payload.data.event_status !== "draft") {
          state.currentStep = 1;
          state.steps = getComponentFilteredSteps(true);
        }
      },
    );
  },
});

export const { setEventInfo } = eventSlice.actions;

export const selectEvent = state => state.event;

export default eventSlice.reducer;
