import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  loading: true,
  user: null,
}

//  async register call
export const registerUser = createAsyncThunk("/auth/register", async(formData, {rejectWithValue})=>{
    try{
      const res = await axios.post("http://localhost:8080/api/auth/register", formData, { withCredentials:true})
        return res.data
    }catch(err){
        return rejectWithValue(err.response.data)
    }
})


//  async login call
export const loginUser = createAsyncThunk("/auth/login", async(data, {rejectWithValue})=>{
  try{
    const res = await axios.post("http://localhost:8080/api/auth/login", data, {
      withCredentials: true, headers: {
        "Cache-Control": "no-cache no-store must-revalidate, proxy-revalidate",
      }
})
    // console.log(res)
    return res.data
  }catch(err){
      // console.log(err.response.data)
    return rejectWithValue(err.response.data)
  }

})


//  check auth with promise
export const checkAuth = createAsyncThunk("/auth/checkAuth", async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/auth/check-auth", {withCredentials:true, headers:{
      "Cache-Control": "no-cache no-store must-revalidate, proxy-revalidate",
    }})

    return res.data
  }catch(err){
    // console.log(err.response.data)
    return err.response.data
  }
})


const authSlice = createSlice({
  name: "auth",
  initialState,
  //  native actions   for this slice
  reducers: {
    setUser: (state, action) => {

    },
    updateUser :(state, action)=>{

    }
  },
  //  actions from other slices or thunks
  extraReducers:(builder)=>{
    builder.addCase(registerUser.pending,(state)=>{
      state.loading = true
    }).addCase(registerUser.fulfilled, (state, action)=>{
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false
    }).addCase(registerUser.rejected, (state, action)=>{
            state.loading = false
            state.user = null
            state.isAuthenticated = false
    }).addCase(loginUser.pending, (state) => {
      state.loading = true
    }).addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = !action.payload.success? null : action.payload.user;
      state.isAuthenticated = action.payload.success
    }).addCase(loginUser.rejected, (state, action) => {
      state.loading = false
        state.user = null
        state.isAuthenticated = false
    }).addCase(checkAuth.pending, (state) => {
      state.loading = true
    }).addCase(checkAuth.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.success ?  action.payload.user:null;
      state.isAuthenticated = action.payload.success;
    }).addCase(checkAuth.rejected, (state, action) => {
      state.loading = false
        state.user = null
        state.isAuthenticated = false
    })
  }
})

//  export actions to dispatch
export const { setUser , updateUser} = authSlice.actions

//  for the store
export default authSlice.reducer

