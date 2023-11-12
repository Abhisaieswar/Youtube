import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isToggleOn: false,
  },
  reducers: {
    setToggle: (state, action) => {
      action.payload
        ? (state.isToggleOn = action.payload)
        : (state.isToggleOn = !state.isToggleOn);
    },
  },
});

export const { setToggle } = appSlice.actions;
export default appSlice.reducer;
