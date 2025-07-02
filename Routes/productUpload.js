import express from 'express';
import { ProductUpload } from '../controller/product.controller.js';
let router = express.Router();

router.post('/product', ProductUpload);

export default router;