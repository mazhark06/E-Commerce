const User = require("../models/user.model.js");

const {generateAccessToken, generateRefreshToken} = require('../utils/generatetoken.js')
async function checkdata(req,res) {

    let userdetails = req.params
    try {
        let userexist = await User.findOne({
            $or :[
                {Email : userdetails.Email},
                {Usrename: userdetails.Email}, 
            ]
        })
        let isMatch = await userexist.matchPass(userdetails.Password)
        if (!userexist || !isMatch) {
           return res.json({message : "User not Found"})
        }
        
            let accesToken = generateAccessToken(userexist)
            let refreshToken = generateRefreshToken(userexist)
            
            // res.json({success: true , redirect : '/' , message: "User Found"})
            res.cookie('refreshToken', refreshToken, {
                httpOnly :true,
                secure:false,
                sameSite:"Strict",
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            res.json({
                accesToken,
                user:{
                  id:  userexist._id,
                  email :userexist.Email

                },
                message:"Authorized",
                success :true,
                redirect:'/'
                
            })
        } catch (error) {
        console.error('ERROR: DATA NOT FOUND' , error);
       res.send('DATA not found ') 
    }
   
}


module.exports = { checkdata};