import getSpotifyToken from "@/lib/getSpotifyToken";
import https from "@/lib/https";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await https.post("/auth/login", credentials, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error({ error });
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const response = await https.post("/auth/signup", credentials, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error({ error });
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      console.log({ auth: "appi" });
      const response = await https.post(
        "/auth/refresh-token",
        {},
        { withCredentials: true },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await https.post("/auth/logout");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const requestReset = createAsyncThunk(
  "auth/request_reset",
  async (body, { rejectWithValue }) => {
    try {
      const response = await https.post("/auth/request-reset-password", body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const resetPassword = createAsyncThunk(
  "auth/reset_password",
  async (body, { rejectWithValue }) => {
    try {
      const response = await https.post("/auth/reset-password", body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const searchArtists = createAsyncThunk(
  "auth/spotifySearchArtists",
  async (query, { rejectWithValue }) => {
    const SPOTIFY_SEARCH_URL = "https://api.spotify.com/v1/search";
    try {
      const token = await getSpotifyToken();
      const response = await axios.get(SPOTIFY_SEARCH_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: query.artistQuery,
          type: "artist",
        },
      });
      return response.data.artists.items;
    } catch (err) {
      return rejectWithValue(err?.response ? err.response?.data : err?.message);
    }
  },
);
