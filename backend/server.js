
import  express from "express"
import cors from "cors"
import {DbConnect} from "./DB/db_connect.js"
import  cookieParser from "cookie-parser"
import authRouter from "./routes/auth/auth-routes.js"
import { port, mongo_url }from "./utils/env-util.js"
import bodyParser from "body-parser"

const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
  origin:  "http://localhost:5173",
  methods:["GET", "POST", "PUT","DELETE"],
  credentials: true,

  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Cache-Control",
    "Expires",
    "pragma",
    "X-Requested-With",
    "Accept",
    "Origin"
  ],

}))

app.use("/api/auth", authRouter)

//  routes
app.get("/" ,(req, res)=>{
    res.send("hello world!")
})

app.listen(port, ()=>{
  console.log(`server is listening at port ${port}....`)
  DbConnect(mongo_url)
})


