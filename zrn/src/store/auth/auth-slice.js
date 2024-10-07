import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  loading: true,
  user: null,
}

//  check auth
export const checkAuth  = createAsyncThunk("/auth/checkAuth", async()=>{
  try{
    const res =await  axios.get("http://localhost:8080/api/auth/check-auth", { withCredentials: true })
    return res.data
  }catch(err){
    return err.response.data
  }
})


//  login redux thunk
export const loginUser = createAsyncThunk("/auth/login", async (data, {rejectWithValue})=>{
  try{
    const res = await axios.post("http://localhost:8080/api/auth/login", data, {
      withCredentials: true
})
    return res.data
  }catch(err){
        return rejectWithValue(err.response.data)
  }

})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    setUser:{},
    updateUser :{}
  },
   extraReducers :(builder)=>{
     builder.addCase(loginUser.pending,(state)=>{
              state.loading = true
     }).addCase(loginUser.fulfilled, (state, action)=>{
    console.log(action.payload)
        state.loading = false
       state.user = !action?.payload?.success ? null : action.payload.user
       state.isAuthenticated = action?.payload?.success
     }).addCase(loginUser.rejected, (state, action)=>{
          state.loading = false
          state.user = null
          state.isAuthenticated = false
     }).addCase(checkAuth.pending, (state) => {
       state.loading = true
     }).addCase(checkAuth.fulfilled, (state, action) => {

       state.loading = false
       state.user = !action?.payload?.success ? null : action.payload.user
       state.isAuthenticated = action?.payload?.success
     }).addCase(checkAuth.rejected, (state, action) => {
       state.loading = false
       state.user = null
       state.isAuthenticated = false
     })
   }
})

export const {setUser} =  authSlice.actions
export default authSlice.reducer


