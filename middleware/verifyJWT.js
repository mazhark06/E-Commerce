const jwt = require('jsonwebtoken')
function protectJWT(req,res,next){
let authHeader = req.headers.authorization
// console.log(authHeader);


 if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
      let token = authHeader.split(' ')[1]
    let decoded = jwt.verify(token , process.env.ACCESS_SECRET_KEY,)
      req.user = decoded
      // console.log(req.user);
      
  next()

    
  } catch (error) {
    console.log('ERROR : JWT not deocded' , error);
    return res.status(402).json({message:"Unauthorized : Invalid or expired token"})
    
  }
}
module.exports = protectJWT