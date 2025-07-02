import upload from '../utils/Multer.js'
import asyncHandler from '../utils/asynchandler.js'

let uploadFile = asyncHandler(async(req,res,next)=>{
    
    console.log("file",req.file);
    next()
})
export {uploadFile}
