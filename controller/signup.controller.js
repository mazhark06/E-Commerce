const User = require("../models/user.model.js");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/generatetoken.js");
async function savedata(req, res) {
  let newUser = req.body;
  let userexist = await User.findOne({
    Username: newUser.Username,
    Email: newUser.Email,
  });

  if (userexist) return    res.json({
      message: "User Already exists, Please Change your Username or email",
    });
  
    try {
      let Usersaved = await User.create({
        Username: newUser.Username,
        Email: newUser.Email,
        Password: newUser.Password,
      });
      let AccessToken = generateAccessToken(Usersaved);
      let RefreshToken = generateRefreshToken(Usersaved);

      res.cookie("refreshToken", RefreshToken, {
          httpOnly: true,
          secure: false,
          sameSite: "Strict",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        .json({
          AccessToken,
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
 
}
module.exports = { savedata };
