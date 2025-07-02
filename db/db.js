import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

try {
    mongoose.connect(`${process.env.MONGODB_URI}`).catch((error)=> console.error('ERROR: CONNECTION' ,error))
    console.log('MONGODB CONNECTED SUCCESSFULLY💺');
    
} catch (error) {
    console.error('ERROR: MONGODB NOT CONNECTED' , error )
}
