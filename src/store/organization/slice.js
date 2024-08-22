import {
  createOrganization,
  deleteOrganization,
  fetchOrganization,
  fetchOrganizations,
  updateOrganization,
} from "./actions";
import { createSlice } from "@reduxjs/toolkit";

const initialOrgs = {
  data: [],
  isLoading: false,
  error: null,
  isDeleting: false,
  selectedID: "",
  message: "",
  view: "list",
  query: "",
  grid: [],
  gridMeta: {
    page: 0,
    limit: 12,
    total: 8,
  },
  page: 1,
  meta: {
    page: 0,
    limit: 12,
    total: 8,
  },
};

const initialState = {
  status: "idle",
  error: null,
  isLoading: false,
  message: "",
  data: {},
  organizations: initialOrgs,
};

export const globalSlice = createSlice({
  name: "app/organization",
  initialState,
  reducers: {
    updateMeta: (state, { payload }) => {
      if (payload.key === "limit") {
        state.organizations.meta.page = 1;
      }
      if (payload.value !== "function")
        state.organizations.meta[payload.key] = payload.value;
    },
    toggleView: (state, { payload }) => {
      state.organizations.view = payload;
    },
    updateState: (state, { payload }) => {
      state[payload.key] = state.value;
    },
    resetState: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createOrganization.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.status = "pending";
      })
      .addCase(createOrganization.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.status = "created";
      })
      .addCase(createOrganization.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.errors;
        state.status = "rejected";
      });
    builder
      .addCase(updateOrganization.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.status = "pending";
      })
      .addCase(updateOrganization.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.status = "updated";
      })
      .addCase(updateOrganization.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.errors;
        state.status = "rejected";
      });
    builder
      .addCase(fetchOrganization.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOrganization.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
      })
      .addCase(fetchOrganization.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.errors;
      });
    builder
      .addCase(fetchOrganizations.pending, state => {
        const view = state.organizations.view;
        if (view === "grid") {
          state.organizations.isFetching = true;
        }
        state.organizations.isLoading = true;
        state.organizations.error = null;
      })
      .addCase(fetchOrganizations.fulfilled, (state, { payload }) => {
        const view = state.organizations.view;
        const page = state.organizations.meta.page;
        const { data, meta, search } = payload;
        state.organizations.isLoading = false;
        if (meta.page !== page) {
          state.organizations.searchTerm = search;
          if (view === "list" || meta.page === 1) {
            state.organizations.meta = meta;
            state.organizations.data = [...data];
          }
          if (view === "grid" || meta.page === 1) {
            const grid = JSON.parse(JSON.stringify(state.organizations.grid));
            state.organizations.page = meta.page;
            state.organizations.gridMeta = meta;
            state.organizations.isFetching = false;
            state.organizations.grid =
              meta.page === 1 ? [...data] : [...grid, ...data];
          }
        }
      })
      .addCase(fetchOrganizations.rejected, (state, { payload }) => {
        state.organizations.isLoading = false;
        state.organizations.isFetching = false;
        state.organizations.error = payload?.errors;
      });
    builder
      .addCase(deleteOrganization.pending, state => {
        state.isLoading = true;
        state.organizations.error = null;
      })
      .addCase(deleteOrganization.fulfilled, (state, { payload }) => {
        const { id } = payload;
        state.organizations.data = state.organizations.data.filter(
          org => String(org._id) !== String(id),
        );

        state.isLoading = false;
      })
      .addCase(deleteOrganization.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.organizations.message = payload.errors;
      });
  },
});

export const { updateMeta, toggleView, updateState } = globalSlice.actions;

export default globalSlice.reducer;
