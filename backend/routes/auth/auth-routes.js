import express from "express";
import { register, login, logout, authMiddleWare} from "../../controllers/auth/auth-controller.js";

//  express router
const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout)
authRouter.get("/check-auth", authMiddleWare, (req, res)=>{
          const user = req.user
                console.log(user)
          return res.status(200).json({
            success:true,
            message:"user logged in successfully",
            user:user
          })
})

export default authRouter
