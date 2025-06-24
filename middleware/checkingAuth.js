
let User = require('../models/user.model.js')
async function CheckingAuth(req,res,next) {
       let userExist = User.findOne(req.user)
       if(!userExist) return res.status(404)
        next()
}
module.exports = CheckingAuth