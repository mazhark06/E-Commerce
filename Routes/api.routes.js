const express = require("express")
const router = express.Router()
const protectJWT = require('../middleware/verifyJWT.js')
const  checkingAuth = require('../middleware/checkingAuth.js')


router.get('/api/profile' , protectJWT , checkingAuth ,(req,res)=>{
res.status(201).json({message: "Authorized"})
})


router.get('/refresh',(req,res)=>{
    
})
module.exports = router
