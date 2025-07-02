import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import signuprouter from "./Routes/sign-up.js";
import loginrouter from "./Routes/login.params.js";
import apiRoute from "./Routes/api.routes.js";
import Logout from "./Routes/Logout.routes.js";
import './db/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// For ES modules, __dirname workaround:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/', apiRoute);
app.use("/signup", signuprouter);
app.use("/login", loginrouter);
app.use('/logout', Logout);
// app.use('/product', ) // Add your product route here if needed

app.get("/", (req, res) => {
  
});

app.get("/Sign-up", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "Sign-up.html"));
});

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
