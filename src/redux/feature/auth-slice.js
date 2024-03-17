import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  access_token: null,
  loading: false,
  error: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authData: (state, { payload }) => {
          state.access_token = payload.access_token,
          state.auth = true,
          state.loading = false,
          state.error = false
        },
        authSignOut: (state, _) => {
          state.auth = false,
          state.access_token = null,
          state.error = false,
          state.loading = false
        }
    },
});

export const { authData, authSignOut } = authSlice.actions;
export const AuthReducer = authSlice.reducer;