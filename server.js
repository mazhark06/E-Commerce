const express = require("express");
require('dotenv').config()
const app = express();
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}))
const userpath = path.join(__dirname, "data", "user.json");
let data = JSON.parse(fs.readFileSync(userpath, "utf8"));
let userdata = data.Users;

app.get("/", (req, res) => {});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "login.html"));
});

app.get("/login/:email/:password", (req, res) => {
  // res.send('running')
  let userdetails = req.params;
  
  let user_details_exists = userdata.some((items)=>{
    return items.Email === userdetails.email || items.Username === userdetails.email
  })
  let is_password_correct = userdata.some((items)=>{
    return userdetails.password === items.Password
  })

  if (user_details_exists && is_password_correct) {
    res.json({ success: true, redirect: "/" , message: "Login SuccessFully"});
  }else{
    res.json({message: "Email is not Exist or Incorrect Password"})
  }

});




app.get("/Sign-up", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "Sign-up.html"));
});

app.post("/signup", (req, res) => {
  let usercredentials = req.body;

  if (usercredentials.Email === "" || usercredentials.Username === "") {
    res.json({ message: "please enter your credentials" });
  } else {
    let usercredentials = req.body;

    let user_email_exists = userdata.some((items) => {
      return items.Email === usercredentials.Email;
    });
    let user_Username_exits = userdata.some((items) => {
      return items.Username === usercredentials.Username;
    });
    if (user_Username_exits || user_email_exists) {
      res.json({ message: "Email or Username already exists" });
    } else {
      data.Users.push(usercredentials);
      console.log("Its running")
      fs.writeFileSync(userpath, JSON.stringify(data, null, 2));
      res.json({ success: true, redirect: "/" });
    }
  }
});

app.listen(PORT, (req, res) => {
  console.log("App is listening on ", PORT);
});
