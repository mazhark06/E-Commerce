const express = require("express");
const router = express.Router()
const path = require('path')
const {UserLogin} = require('../controller/user.controller.js')

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname , '../templates' ,'login.html'))
  
});

router.get("/:Email/:Password" ,UserLogin);

module.exports = router
