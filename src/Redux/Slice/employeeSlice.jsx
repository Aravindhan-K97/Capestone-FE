import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  Id: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    signInFailure: (state, action) => {
      state.loading = false;
    },
    assignRole: (state, action) => {
      state.Id = action.payload;
    },
    signOut: (state) => {
      state.currentUser = null;
      state.Id = null;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  assignRole,
  signOut,
} = employeeSlice.actions;

export default employeeSlice.reducer;
