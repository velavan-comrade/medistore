const mongoose=require('mongoose');
const transSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    items:[mongoose.Schema.ObjectId],
    status:{type:String,enum:["Ordered","Pending","Delivered"]}
})