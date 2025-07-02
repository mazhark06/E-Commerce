import Apiresponse from "../utils/Apiresponse.js";
import asyncHandler from "../utils/asynchandler.js";

const ProductUpload = asyncHandler(async (req, res) => {
    console.log("file",req.file);
    
    res.json(new Apiresponse(200, "File received" , req.file))
});

export { ProductUpload };