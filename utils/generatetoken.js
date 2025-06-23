const jwt = require('jsonwebtoken')


function generateAccessToken (user){
let token = jwt.sign(
    {id : user._id , email : user.Email}
     ,process.env.ACCESS_SECRET_KEY ,{
        expiresIn : process.env.ACCESS_EXPIRYDATE
     })
     return token
}
 function generateRefreshToken(user){
    let refreshToken = jwt.sign({
        id:user._id
    } , process.env.REFRESH_SECRET_KEY,{
        expiresIn:process.env.REFRESH_EXPIRY_DATE
    })
    return refreshToken
 }

 module.exports = {generateRefreshToken , generateAccessToken}