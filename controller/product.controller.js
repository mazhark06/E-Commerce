import Apiresponse from "../utils/Apiresponse.js";
import asyncHandler from "../utils/asynchandler.js";

const ProductUpload = asyncHandler(async (req, res) => {
res.json(new Apiresponse(200,"File Uploaded" , req.file))
});

export { ProductUpload };