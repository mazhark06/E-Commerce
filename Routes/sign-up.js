import express from "express";
const router = express.Router();

import { UserSignup } from '../controller/user.controller.js';

router.post('/', UserSignup);

export default router;