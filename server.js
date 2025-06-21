const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const userpath = path.join(__dirname, "data", "user.json");
let data = JSON.parse(fs.readFileSync(userpath, "utf8"));
let userdata = data.Users;

app.get("/", (req, res) => {});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "login.html"));
});

app.get("/login/:email/:password", (req, res) => {
  let userdetails = req.params;
  console.log(userdetails);
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
      res.json({ success: true, redirect: "http://localhost:3000" });
    }
  }
});

app.listen(PORT, (req, res) => {
  console.log("App is listening on ", PORT);
});
