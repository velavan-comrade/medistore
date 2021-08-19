const express = require('express')
const router=express.Router();
const mongoose=require('mongoose');
const customer=require('../model/Customer')

router.get('/',(req,res,err)=>{
    
customer.find().exec().then((doc)=>{
if(doc.length>0)
{
    console.log(doc)
    res.status(200).json({
        status:"success",
        message:"Customer Details",
        length:doc.length,
        data:doc
    })
}
else{
    console.log(err)
    res.status(200).json({
        status:"sucess",
        message:"no data found",
        data:doc,
        img:`/asset/imge-1628658530396.jpg`,
    })
}
}).catch((err)=>{
    console.log(err)
    res.status(500).json({
        status:"failure",
        message:"unable to fetch",
        error:err
    })
})
});

module.exports=router;