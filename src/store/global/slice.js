import {
	login,
	logout,
	refreshToken,
	requestReset,
	resetPassword,
	signup,
} from "./actions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
	products: [],
	sidebar: false,
	user: null,
	isAuthenticated: false,
	status: "idle",
	error: null,
	isLoading: true,
	message: ""
};

export const globalSlice = createSlice({
	name: "app/global",
	initialState,
	reducers: {
		toggleSidebar: (state) => {
			state.sidebar = !state.sidebar;
		},
		resetError: (state) => {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = action.payload.user;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
		builder
			.addCase(signup.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(signup.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = action.payload.user;
			})
			.addCase(signup.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
		builder
			.addCase(refreshToken.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(refreshToken.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.isLoading = false;
			})
			.addCase(refreshToken.rejected, (state) => {
				state.isLoading = false;
			});
		builder
			.addCase(logout.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null;
				state.isLoading = false;
			})
			.addCase(logout.rejected, (state) => {
				state.isLoading = false;
			});
		builder
			.addCase(resetPassword.pending, (state) => {
				state.isLoading = true;
				state.error = ""
			})
			.addCase(resetPassword.fulfilled, (state) => {
				state.isLoading = false;
				state.message = "success"
			})
			.addCase(resetPassword.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
		builder
			.addCase(requestReset.pending, (state) => {
				state.isLoading = true;
				state.error = ""
			})
			.addCase(requestReset.fulfilled, (state) => {
				state.isLoading = false;
				state.message = "We have sent a reset link to your email"
			})
			.addCase(requestReset.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { toggleSidebar, resetError } = globalSlice.actions;

export default globalSlice.reducer;
