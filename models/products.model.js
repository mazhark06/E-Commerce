import mongoose, { Schema } from 'mongoose';

let productSchema = new Schema({
    Images : [{
      type:String, 
      required: true 
    }],
    Thumbnails:{
        type:String
    },
    title:{
        type:String,
        required :true
    },
    description: {
        type :String,
        required :true
    },
    DiscountPrice : {
        type :String
    },
    Price : {
        type : String,
        required : true
    },
    SellerName :{
        type : mongoose.Types.ObjectId,
        ref: "User",
        required : true,

    } ,
    Category : {
        type:String ,
        required :true
    },
    Brand:{
        type:String,
        required :true
    }
    



},{timestamps: true})
const Product = mongoose.model('Product' , productSchema);
export default Product;
module.exports = Product
