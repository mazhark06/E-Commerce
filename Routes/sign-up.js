const express = require("express");
const router = express.Router()


const {UserSignup} = require('../controller/user.controller.js') 

router.post('/' , UserSignup)
module.exports = router