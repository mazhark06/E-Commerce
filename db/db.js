const mongoose = require('mongoose')
require('dotenv').config()

try {
    mongoose.connect(`${process.env.MONGODB_URI}`).catch((error)=> console.error('ERROR: CONNECTION' ,error))
} catch (error) {
    console.error('ERROR: MONGODB NOT CONNECTED' , error )
}
