const express = require("express");
const router = express.Router();
const multer=require('multer');
const path=require('path');
const fs=require('fs');

const mongoose = require("mongoose");
const { prependOnceListener } = require("../model/Product");
const product = require("../model/Product");


var storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'asset')
  },
  filename:function(req,file,cb){
    cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
  }
});

var upload=multer({
  storage:storage,limits:{
    fileSize:1024*1024*5
  }
})

router.get("/", (req,res,err) => {

  product.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      if (docs.length > 0) {
        res.status(200).json({
          status: "success",
          message: "Product Details",
          count: docs.length,
          data:docs,
          img:`C:/Users/Lenovo/Documents/Full stack/api/asset/imge-1628658281944.jpg`
        });
      } else {
        res.status(200).json({
          status: "success",
          message: "Product not found",
          count: 0,
          data: [],
        });
      }
    })
    .catch((err) => {
      res.status(500).json(
        {
          status: "failure",
          message: "unable to fetch product detail",
          error: err,
          data: [],
        },
      );
    });
});


router.post("/",upload.single('imge'), (req, res) => {

 
    var img=fs.readFileSync(req.file.path);
   
    console.log("dd")
      var id=1;
      var quantity=10;
      var uses=["ds","ds"]
      var img1=img.toString("base64");

  // var fimg=new Buffer(img1,"base64");
 
    const newProduct= new product({
      _id: new mongoose.Types.ObjectId(),
      productName: req.body.pname,
      productId:id,
      price:req.body.price,
      description: req.body.desc,
      uses: uses,
      img: img1,
      quantity:quantity,
    });
    console.log("in")
    newProduct
      .save()
      .then((result) => {
        console.log("Result: ", result);
        res.status(201).json([
          {
            status: "success",
            message: "Product Added",
            data: [newProduct],
          },
        ]);
      })
      .catch((err) => {
        console.log("Error: ", err);
        res.status=500
        res.json([
          {
            status: "failure",
            message: "unable to add Product",
            error: err,
            data: [],
          },
        ]);
      });
  });

  module.exports=router;