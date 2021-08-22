const mongoose=require('mongoose');
const cartSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    user:String,
    items:Number,
    quantity:Number,
    amount:Number,
});

module.exports=mongoose.model("cart",cartSchema);