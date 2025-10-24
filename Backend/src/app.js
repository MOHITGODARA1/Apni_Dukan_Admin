import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app=express();
app.use(cors({
  origin:process.env.ORIGIN_PORT,
  credentials:true
}))
app.use(express.json());
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import router from "./routes/admin.route.js";

app.use("/api/v1/list",router)

export {app}