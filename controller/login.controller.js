const User = require("../models/user.model.js");
async function checkdata(req,res) {

    let userdetails = req.params
    
    try {
        
        let userexist = await User.findOne({
            $or :[
                {Email : userdetails.Email},
                {Usrename: userdetails.Email},
                {}
            ],
            Password : userdetails.Password
        })
        if (!userexist) {
            res.json({message : "User not Found"})
        }else{
            res.json({success: true , redirect : '/' , message: "User Found"})
        }

    } catch (error) {
        console.error('ERROR: DATA NOT FOUND' , error);
       res.send('DATA not found ') 
    }
   
}


module.exports = { checkdata};