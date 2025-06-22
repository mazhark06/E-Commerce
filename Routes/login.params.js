const express = require("express");
const router = express.Router()
const path = require('path')
const {checkdata} = require('../controller/login.controller.js')

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname , '../templates' ,'login.html'))
  
});

router.get("/:Email/:Password",checkdata);

module.exports = router
