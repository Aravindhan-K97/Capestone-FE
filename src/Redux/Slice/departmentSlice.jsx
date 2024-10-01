import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departmentId: null,
};

const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {
    setDepartmentId: (state, action) => {
      state.departmentId = action.payload;
    },
  },
});

export const { setDepartmentId } = departmentSlice.actions;

export default departmentSlice.reducer;
