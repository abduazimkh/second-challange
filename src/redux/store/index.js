// configuration store
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";


// reducers slices
import { AuthReducer } from "../feature/auth-slice";


const persistConfig = {
  key: "root",
  version: 1, 
  storage,
  blacklist: ['omitedPart']
};  

const reducer = combineReducers({
  auth: AuthReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
