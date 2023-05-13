import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  login: null,
  stateChange: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserProfile: (state, {payload}) => ({
      ...state,
      userId: payload.userId,
      login: payload.login,
    }),
    authStateChange: (state, {payload}) => {
      state.stateChange = payload.stateChange;
    },
    authSignOut: () => initialState,
  },
});

export const {updateUserProfile, authStateChange, authSignOut} =
  authSlice.actions;
