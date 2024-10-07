// import
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer:{
    auth  : authSlice,
  }
})

// console.log(store)
export default store;
