const express = require('express')
const router=express.Router();
const mongoose=require('mongoose');
const product=require('../model/Product')
const url1=require("url");

router.get('/',(req,res,err)=>{
    console.log("in");
    var qry=url1.parse(req.url,true).query;
    console.log(qry);
    var pid=qry.id;
    
    product.find({productId:pid}).exec().then((doc)=>{
        if(doc.length>0)
        {
         console.log(doc)
            res.status(200).json({
        status:"success",
        message:"verified",
        length:doc.length,
        data:doc
    })
}
else{
    
    res.status(200).json({
        status:"sucess",
        message:"no data found",
        data:doc,
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