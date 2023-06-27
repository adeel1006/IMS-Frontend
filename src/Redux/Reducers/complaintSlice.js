import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredData: [],
};

const complaintsSlice = createSlice({
  name: "complaints",
  initialState,
  reducers: {
    updateFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});

export const { updateFilteredData } = complaintsSlice.actions;
export default complaintsSlice.reducer;