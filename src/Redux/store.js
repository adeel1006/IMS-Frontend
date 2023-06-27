import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authSlice";
import complaintsReducer from "./Reducers/complaintSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    complaints: complaintsReducer,
  },
});

export default store;
