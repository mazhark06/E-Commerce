import express from 'express';
import { ProductUpload } from '../controller/product.controller.js';
import upload from '../utils/Multer.js';
let productRoute = express.Router();

productRoute.post('/upload', upload.any(),ProductUpload);

export default productRoute;