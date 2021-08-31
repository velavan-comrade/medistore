const mongoose=require('mongoose');
const cartSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    user:String,
    items:Number,
    quantity:Number,
    amount:Number,
    status:String
});

module.exports=mongoose.model("cart",cartSchema);