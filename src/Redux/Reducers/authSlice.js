import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || null,
    userId: null,
    userRole: null,
    error: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      state.error = null;
      localStorage.setItem("accessToken", action.payload);
    },
    setUserRole: (state, action) => {
      state.userRole = action.payload;
      state.error = null;
      localStorage.setItem("userRole", action.payload);
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem("userId", action.payload);
      state.error = null;
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

export const { setAccessToken, setError, resetAuth, setUserRole, setUserId } =
  authSlice.actions;

export default authSlice.reducer;
