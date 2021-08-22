const mongoose=require('mongoose');
const transSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    items:[mongoose.Schema.ObjectId],
    user:String,
    quantity:Number,
    amount:Number,
    mop:{type:String,enum:["COD","Online"]},
    status:{type:String,enum:["Ordered","Pending","Delivered"]}
})

module.exports=mongoose.model("transaction",transSchema);