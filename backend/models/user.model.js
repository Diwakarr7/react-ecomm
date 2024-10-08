import mongoose from "mongoose";

const UserSchema =  new mongoose.Schema({
  username:{
    type:String,
    unique:true,
    required:true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role:{
    type:String,
    default:"user"
  }

})


const userModel = mongoose.model("User", UserSchema)

export default userModel
