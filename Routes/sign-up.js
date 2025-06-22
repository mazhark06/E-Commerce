const express = require("express");
const router = express.Router()


const {savedata} = require('../controller/signup.controller.js') 

router.post('/' , savedata)
module.exports = router