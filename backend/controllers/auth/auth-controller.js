import UserModel from "../../models/user.model.js"
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import { sec_key } from "../../utils/env-util.js"


export const register = async (req, res)=>{

  const {username, email, password} = req.body;
  //  check if user is already existed
  try{
    const user = await UserModel.findOne({ email })
    if (user) {
      return res.status(401).json({
        success: false,
        message: "user already existed with the another  email"
      })
    }

    // hash the password
    const hashPass = await bcrypt.hash(password, 10);

    //  new user
    const newUser = new UserModel({username, email, password:hashPass})
    await newUser.save()
    res.status(200).json({
      success:true,
      message:"Registration successful",
      data:newUser
    })

  }catch(err){
       console.log(`error at the register controller : ${err.message}`)
       return res.status(500).json({
         success:false,
         message:"server error"
       })
  }
}


export const login = async (req, res) => {

  const {  email, password } = req.body;
    // console.log(email, password)
  //  check if user is already existed

  try {
    const user = await UserModel.findOne({ email })

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email please check and Try Again!",
      })
    }
      // check pass
      const checkPass = await bcrypt.compare(password, user.password);

      if(!checkPass){
        return res.status(401).json({
          success:false,
          message:"Incorrect password please try again"
        })
      }
        //  token
    const token = await JWT.sign({ id: user._id, role: user.role, email: user.email }, sec_key, {
          expiresIn:"60m"
        })

    res.cookie("token", token, {httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 1000,
  })
    res.status(200).json({
          success:true,
          message:"login successful",
          user: {
            email:user.email,
            role:user.role,
            username:user.username,
            id:user._id
          }
        })


  } catch (err) {
    console.log(`error at the register controller : ${err.message}`)
    return res.status(500).json({
      success: false,
      message: "server error not found"
    })
  }

}


export const logout = async (req, res)=>{
    res.clearCookie("token").json({
      success:true,
      message:"Logge out successfully"
    })
}


 export const authMiddleWare  = async(req, res, next)=>{
    const token = req.cookies
    

    if(!token){
      return res.status(401).json({
        success:false,
        message:"unauthorized"
      })
    }
    try{
      const decode = JWT.verify(token, sec_key)

      const user = await UserModel.findById(decode.id).select("-password")
      // console.log(user)
      // if(!user){
      //       return res.status(401).json({
      //         success:false,
      //         message:"unauthorized"
      //       })
      // }
        // console.log(user)
        req.user =  user
        next()

    }catch(err){
      return res.status(401).json({
        success: false,
        message: "Invalid token or expired session"
      })

    }
}
