import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  login: null,
  stateChange: null,
  email: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserProfile: (state, {payload}) => ({
      ...state,
      userId: payload.userId,
      login: payload.login,
      email: payload.email,
    }),
    updateUserEmail: (state, {payload}) => {
      state.email = payload.email;
    },
    authStateChange: (state, {payload}) => {
      state.stateChange = payload.stateChange;
    },
    authSignOut: () => initialState,
  },
});

export const {
  updateUserProfile,
  authStateChange,
  authSignOut,
  updateUserEmail,
} = authSlice.actions;
