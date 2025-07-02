import User from "../models/user.model.js";
import asyncHandler from "../utils/asynchandler.js";
import { generateAccessToken, generateRefreshToken } from '../utils/generatetoken.js';

async function UserLogin(req,res) {

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
        
            let accessToken = generateAccessToken(userexist)
            let refreshToken = generateRefreshToken(userexist)
             userexist.refreshToken = refreshToken
             await userexist.save()
            // console.log(userexist);
            
            // res.json({success: true , redirect : '/' , message: "User Found"})
            res.cookie('refreshToken', refreshToken, {
                httpOnly :true,
                secure:false,
                sameSite:"Strict",
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            res.json({
                accessToken,
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
async function UserSignup(req, res) {
  let newUser = req.body;
  // console.log("req.body", req.body);
  
  let userexist = await User.findOne({
  $or:  [{Username: newUser.Username},
    {Email: newUser.Email}]
  });
  // console.log(userexist);
  

  if (userexist) return    res.json({
      message: "User Already exists, Please Change your Username or email",
    });
  
    try {
      let Usersaved = await User.create({
        Username: newUser.Username,
        Email: newUser.Email,
        Password: newUser.Password,
      });
      let accessToken = generateAccessToken(Usersaved);
      let refreshToken = generateRefreshToken(Usersaved);
      // console.log(Usersaved, 'Usersaved');
      Usersaved.refreshToken = refreshToken
      await Usersaved.save()
      
      res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          sameSite: "Strict",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        .json({
          accessToken,
          user: {
            _id: Usersaved._id,
            Email: Usersaved.Email,
          },
          success: true,
          redirect: "/",
          message: "Data saved successfully",
        });
    } catch (error) {
      console.error("ERROR: DATA NOT SAVED", error);
      res.json({ message: "Error on saving Data" });
    
  }  
  const ProductUpload = asyncHandler(async(req,res)=>{
    req.file
  })
 
}

export {
   UserLogin,
   UserSignup,
};