import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //for superAdmin module complaints
  filteredData: [],
  //for employee complaints
  userComplaints: [],
};

const complaintsSlice = createSlice({
  name: "complaints",
  initialState,
  reducers: {
    updateFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    updateUserComplaints: (state, action)=>{
      state.userComplaints = action.payload;
    }

  },
});

export const { updateFilteredData, updateUserComplaints } = complaintsSlice.actions;
export default complaintsSlice.reducer;