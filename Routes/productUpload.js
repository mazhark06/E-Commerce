import express from 'express';
import { ProductUpload } from '../controller/product.controller.js';
import {uploadFile} from '../middleware/uploadFile.js'
import upload from '../utils/Multer.js';
let productRoute = express.Router();

productRoute.post('/upload',upload.single('file'), ProductUpload);

export default productRoute;