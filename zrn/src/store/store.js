import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth-slice"
// import

const store = configureStore({
  reducer :{
     auth:authSlice
  }
})

export default store
