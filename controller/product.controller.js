import asyncHandler from "../utils/asynchandler.js";

const ProductUpload = asyncHandler(async (req, res) => {
    console.log(req.file);
});

export { ProductUpload };