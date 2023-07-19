import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //for superAdmin module complaints
  filteredData: [],
  //for employee complaints
  userComplaints: [],
  //forAdminModule user complaints
  admUserComplaints: [],
};

const complaintsSlice = createSlice({
  name: "complaints",
  initialState,
  reducers: {
    updateFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    updateUserComplaints: (state, action) => {
      state.userComplaints = action.payload;
    },
    updateAdmUserComplaints: (state, action) => {
      state.admUserComplaints = action.payload;
    },
  },
});

export const { updateFilteredData, updateUserComplaints, updateAdmUserComplaints } =
  complaintsSlice.actions;
export default complaintsSlice.reducer;
