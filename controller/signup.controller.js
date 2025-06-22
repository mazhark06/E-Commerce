const User = require("../models/user.model.js");
async function savedata(req, res) {
  let { Username, Email, Password } = req.body;
  let userexist = await User.findOne({ Username, Email });
  if (!userexist) {
    try {

      await User.create({ Username, Email, Password });
   res.json({success: true , redirect : '/' , message : "Data saved successfully"})

    } catch (error) {

      console.error("ERROR: DATA NOT SAVED", error);
      res.json({ message: "Error on saving Data" });
    }

}else{
    
    res.json({ message: "User Already exists, Please Change your Username or email" });
  }

}
module.exports = { savedata };
