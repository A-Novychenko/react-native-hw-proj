import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: "",
    nickName: "",
  },
});

export const authReducer = authSlice.reducer;
