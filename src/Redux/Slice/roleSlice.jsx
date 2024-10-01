import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roleId: null,
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRoleId: (state, action) => {
      state.roleId = action.payload;
    },
  },
});

export const { setRoleId } = roleSlice.actions;

export default roleSlice.reducer;
