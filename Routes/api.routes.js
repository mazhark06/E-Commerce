const express = require("express")
const router = express.Router()
const protectJWT = require('../middleware/verifyJWT.js')
 const Apiresponse = require('../utils/Apiresponse.js')


router.get('/api/profile' , protectJWT ,(req,res)=>{
res.status(201)
.json(new Apiresponse(200, "User Authorized"))
})


router.get('/refresh',(req,res)=>{
    
})
module.exports = router
