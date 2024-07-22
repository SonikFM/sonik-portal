import https from "@/lib/https";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
	}
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
	}
);

export const refreshToken = createAsyncThunk(
	"auth/refreshToken",
	async (_, { rejectWithValue }) => {
		try {
			console.log({ auth: "appi" });
			const response = await https.post(
				"/auth/refresh-token",
				{},
				{ withCredentials: true }
			);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
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
	}
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
	}
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
	}
);
