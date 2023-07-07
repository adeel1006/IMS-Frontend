import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRequestsData: [],
};

const requestSlice = createSlice({
  name: "requestsData",
  initialState,
  reducers: {
    updateUserReqData: (state, action) => {
      state.userRequestsData = action.payload;
    },
  },
});

export const { updateUserReqData } = requestSlice.actions;
export default requestSlice.reducer;
