import express from "express";
import User from "../models/user.model.js";
const router = express.Router();
import protectJWT from "../middleware/verifyJWT.js";
import mongoose from "mongoose";


router.get("/", protectJWT, async(req, res) => {
  // console.log(req.user,'ROUTE')
  let user = await User.updateOne({_id : req.user},
    {$unset : {refreshToken :""}}
  )
  console.log(user);
  
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: false,
    sameSite: "Strict",
  }).json({success:true , redirect: "/login"})
});

export default router;