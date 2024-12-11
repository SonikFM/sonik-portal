import {
  login,
  logout,
  refreshToken,
  requestReset,
  resetPassword,
  searchArtists,
  signup,
} from "./actions";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  products: [],
  sidebar: false,
  user: {},
  isAuthenticated: false,
  status: "idle",
  error: null,
  isLoading: true,
  message: "",
  spotify: {
    error: null,
    artists: [],
    isLoading: false,
  },
};

export const globalSlice = createSlice({
  name: "app/global",
  initialState,
  reducers: {
    toggleSidebar: state => {
      state.sidebar = !state.sidebar;
    },
    resetError: state => {
      state.error = null;
    },
    resetArtists: state => {
      state.spotify.artists = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(signup.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(refreshToken.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.isLoading = false;
      })
      .addCase(refreshToken.rejected, state => {
        state.isLoading = false;
      });
    builder
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.isLoading = false;
      })
      .addCase(logout.rejected, state => {
        state.isLoading = false;
      });
    builder
      .addCase(resetPassword.pending, state => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(resetPassword.fulfilled, state => {
        state.isLoading = false;
        state.message = "success";
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(requestReset.pending, state => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(requestReset.fulfilled, state => {
        state.isLoading = false;
        state.message = "We have sent a reset link to your email";
      })
      .addCase(requestReset.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(searchArtists.pending, state => {
        state.spotify.isLoading = true;
      })
      .addCase(searchArtists.fulfilled, (state, action) => {
        state.spotify.isLoading = false;
        state.spotify.artists = action.payload;
      })
      .addCase(searchArtists.rejected, (state, action) => {
        state.spotify.isLoading = false;
        state.spotify.error = action.error.message;
      });
  },
});

export const { toggleSidebar, resetError, resetArtists } = globalSlice.actions;

export default globalSlice.reducer;
