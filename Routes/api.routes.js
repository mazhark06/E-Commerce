import express from "express";
const router = express.Router();
import protectJWT from '../middleware/verifyJWT.js';
import Apiresponse from '../utils/Apiresponse.js';


router.get('/api/profile' , protectJWT ,(req,res)=>{
res.status(201)
.json(new Apiresponse(200, "User Authorized"))
})


router.get('/refresh',(req,res)=>{
    
})
export default router;
