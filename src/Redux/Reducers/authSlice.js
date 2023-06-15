import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || null,
    error: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      state.error = null;
      localStorage.setItem("accessToken", action.payload);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetAuth: (state) => {
      state.accessToken = null;
      state.error = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { setAccessToken, setError, resetAuth } = authSlice.actions;

export default authSlice.reducer;
