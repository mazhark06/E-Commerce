const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const signuprouter = require("./Routes/sign-up.js");
const loginrouter = require("./Routes/login.params.js");
require('./db/db.js'); // Add this line after other requires


app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


app.use("/signup", signuprouter);
app.use("/login", loginrouter);



app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/Sign-up", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "Sign-up.html"));
});

app.listen(PORT, (req, res) => {
  console.log("App is listening on ", PORT);
});
