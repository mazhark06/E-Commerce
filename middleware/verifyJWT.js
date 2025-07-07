import jwt from "jsonwebtoken";
import Apiresponse from "../utils/Apiresponse.js";

async function protectJWT(req, res, next) {
  let { refreshToken } = req.cookies;
  let authHeader = req.header("authorization");
  // console.log(req.header("Authorization") , 'bearer');
  // console.log(refreshToken, 'refreshToken');
  
let decoded
  let CookieValid;
  let token;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    if (!refreshToken) {
      return res.status(402).json(new Apiresponse(402, 'User Unauthorized'))
    }
   
  }
  token = authHeader.split(" ")[1];
  if (!token || !refreshToken) {
    return res.json(new Apiresponse(401,'Provide Token'))
  }
  try {
    if (token) {
      // console.log(token,'token',refreshToken,"refreshToken");
      decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
    }
    if (refreshToken) {
      
      CookieValid = jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY);
    }
  
    // console.log("token", token);
   
   
    // console.log(CookieValid, "CookieVerified");

    if (!decoded?.id && !CookieValid?.id) return  res.status(401).json(new Apiresponse(402, "Token Invalid"));

    req.user = decoded?.id || CookieValid?.id;
    // console.log(req.user,'user passed');

    next();
  } catch (error) {
    console.log("ERROR : JWT not deocded", error);
    return res
      .status(402)
      .json(new Apiresponse(400, "ERROR : JWT not deocded"));
  }
}

export default protectJWT;
