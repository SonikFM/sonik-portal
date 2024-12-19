import { toast } from "react-toastify";
import {
  login,
  logout,
  refreshToken,
  requestReset,
  resendOTP,
  resetPassword,
  searchArtists,
  signup,
  switchOrganization,
  verifyOrganizationInvitationToken,
  verifyOTP,
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
  verificationInProgress: {
    requestId: "",
    email: "",
    active: false,
    verified: false,
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
      .addCase(resetPassword.fulfilled, _ => {
        window.location.href = "/login";
        toast.success("Password reset successful");
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
      .addCase(requestReset.fulfilled, (state, action) => {
        state.isLoading = false;
        state.verificationInProgress = {
          requestId: action.payload.data.requestId,
          email: action.payload.email,
          active: true,
        };
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
    builder.addCase(verifyOTP.pending, state => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(verifyOTP.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = "OTP verification successful";
      state.verificationInProgress.active = false;
      state.verificationInProgress.requestId = action.payload.data.requestId;
      state.verificationInProgress.email = "";
      state.verificationInProgress.active = false;
      state.verificationInProgress.verified = true;
    });
    builder.addCase(verifyOTP.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(resendOTP.pending, state => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(resendOTP.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.error = "";
    });
    builder.addCase(resendOTP.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(verifyOrganizationInvitationToken.pending, state => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(
      verifyOrganizationInvitationToken.fulfilled,
      (state, action) => {
        state.isLoading = false;
        toast.success(action.payload.message);
        state.error = "";
        state.user = action.payload.user;
      },
    );
    builder.addCase(
      verifyOrganizationInvitationToken.rejected,
      (state, action) => {
        state.isLoading = false;
        toast.error(action.payload.message);
      },
    );
    builder.addCase(switchOrganization.pending, state => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(switchOrganization.fulfilled, (state, action) => {
      state.isLoading = false;
      toast.success(action.payload.response.message);
      state.error = "";
      state.user = action.payload.response.data;
    });
    builder.addCase(switchOrganization.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload.message);
    });
  },
});

export const { toggleSidebar, resetError, resetArtists } = globalSlice.actions;

export default globalSlice.reducer;
