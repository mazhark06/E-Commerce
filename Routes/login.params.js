import express from "express";
const router = express.Router();
import path from 'path';
import { UserLogin } from '../controller/user.controller.js';

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname , '../templates' ,'login.html'))
  
});

router.get("/:Email/:Password" ,UserLogin);

export default router;
