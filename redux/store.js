import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {authReducer} from "./auth/authSlice";

const rootReducer = combineReducers({
  authReducer,
});

export const store = configureStore({
  reduser: rootReducer,
});
