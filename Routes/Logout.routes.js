const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: false,
    sameSite: "Strict",
  }).json({success:true , redirect: "/login"})
});
module.exports =   router