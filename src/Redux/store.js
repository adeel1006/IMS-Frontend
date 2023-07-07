import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authSlice";
import complaintsReducer from "./Reducers/complaintSlice";
import requestReducer from "./Reducers/requestSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    complaints: complaintsReducer,
    requestsData: requestReducer,
  },
});

export default store;
