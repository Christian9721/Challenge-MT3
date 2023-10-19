import { configureStore, combineReducers } from "@reduxjs/toolkit";
//import thunkMiddleware from 'redux-thunk';

import pendingsReducer from "./modules/pendings";

export const mainReducer = combineReducers({
  pendings: pendingsReducer,
});

const store = configureStore({
  reducer: mainReducer,
  //middleware: [thunkMiddleware],
});

export default store;
