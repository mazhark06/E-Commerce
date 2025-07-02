import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import Apiresponse from '../utils/Apiresponse.js';


async function protectJWT(req, res, next) {
  let cookies = req.cookies.refreshToken;
  let authHeader = req.header("Authorization");
  // console.log(req.header('Authorization'));

  if (!authHeader || !authHeader.startsWith("Bearer ") || !cookies) {
    return res.json({ message: "No token provided" });
  }

  try {
    let token = authHeader.split(" ")[1];
    let isCookieVerified = await User.findOneAndUpdate(
      { refreshToken: cookies },
      {},
      { new: true }
    ).select("-Password -refreshToken -Email -Username");
    // console.log(isCookieVerified);
    let decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
    if (!decoded || !isCookieVerified)
      return res.status(401).json(new Apiresponse(402, "Token Invalid"));
    req.user = decoded || isCookieVerified._id;
    next();
  } catch (error) {
    console.log("ERROR : JWT not deocded", error);
    return res
      .status(402)
      .json(new Apiresponse(400,"ERROR : JWT not deocded"));
  }
}

export default protectJWT;
