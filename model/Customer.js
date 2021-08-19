const mongoose=require('mongoose')
const customerSchema=mongoose.Schema({
_id:mongoose.Schema.ObjectId,
username:{type:String,unique:true},
password:String,
age:Number,
mobile:Number,
transaction:[String],
address:String,
zipcode:String,
gender:{type:String,enum:['MALE','FEMALE']}
});

module.exports=mongoose.model("Customers",customerSchema);