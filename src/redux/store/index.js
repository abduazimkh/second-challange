// configuration store
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";


// reducers slices


const persistConfig = {
  key: "root",
  version: 1, 
  storage,
  blacklist: ['omitedPart']
};  

const reducer = combineReducers({
  auth: () => null
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
