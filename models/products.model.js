const {Schema} =require('mongoose')
const mongoose =require('mongoose')

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
let Product = mongoose.model('Product' , productSchema)
module.exports = Product
