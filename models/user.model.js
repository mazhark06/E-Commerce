const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");

let UserSchema = new mongoose.Schema(
  {
    Username: {
      type: String,
      required: true,
      unique: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    Password: {
      type: String,
      required: true,
    },
    refreshToken: { 
      type : String
     },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) return next();
  this.Password = await bycrypt.hash(this.Password, 10);
});
UserSchema.methods.matchPass = async function (enteredpassword) {
  let validPass = await bycrypt.compare(enteredpassword, this.Password);
  return validPass;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
