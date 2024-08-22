import https from "@/lib/https";
import { validateRequestError } from "@/lib/validateRequestError";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let source;

export const createOrganization = createAsyncThunk(
  "app/organization/createOrganization",
  async (payload, thunkAPI) => {
    try {
      const response = await https.post("/organizations", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error({ error });
      return validateRequestError(error, thunkAPI.rejectWithValue);
    }
  },
);
export const updateOrganization = createAsyncThunk(
  "app/organization/updateOrganization",
  async ({ id, payload }, thunkAPI) => {
    try {
      const response = await https.put(`/organizations/${id}`, payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error({ error });
      return validateRequestError(error, thunkAPI.rejectWithValue);
    }
  },
);

export const fetchOrganizations = createAsyncThunk(
  "app/organization/fetchOrganizations",
  async (payload, thunkAPI) => {
    const { page = 1, limit = 10, searchTerm = "" } = payload;
    const params = {
      page,
      limit,
    };
    if (thunkAPI.signal.searchSource) {
      thunkAPI.signal.searchSource.cancel(
        "Operation canceled due to new request.",
      );
    }
    source = axios.CancelToken.source();
    thunkAPI.signal.searchSource = source;
    if (searchTerm) {
      params.search = searchTerm;
    }
    try {
      const response = await https.get("/organizations", {
        params,
        cancelToken: source.token,
      });
      return { ...response.data, search: searchTerm };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const fetchOrganization = createAsyncThunk(
  "app/organization/fetchOrganization",
  async (id, thunkAPI) => {
    try {
      const response = await https.get(`/organizations/${id}`);
      return { ...response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const deleteOrganization = createAsyncThunk(
  "app/organization/deleteOrganization",
  async (id, thunkAPI) => {
    try {
      await https.delete(`/organizations/${id}`);
      return { id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
