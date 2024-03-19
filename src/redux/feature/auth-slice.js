import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  token: "",
  data: null,
  loading: false,
  error: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authData: (state, action) => {
          console.log(action)
          state.token = action.payload,
          state.data = action.payload,
          state.auth = true,
          state.loading = false,
          state.error = false
        },
        authSignOut: (state, _) => {
          state.auth = false,
          state.token = null,
          state.data = null,
          state.error = false,
          state.loading = false
        }
    },
});

export const { authData, authSignOut } = authSlice.actions;
export const AuthReducer = authSlice.reducer;