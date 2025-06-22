const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required : true,  
        unique: true  
    },
    Email: {
        type: String,
        required:true,
        unique:true,
        lowercase: true
    },
    Password : {
        type :String,
        required : true
    }
},{timestamps: true})
const User = mongoose.model('User' , UserSchema)
module.exports = User