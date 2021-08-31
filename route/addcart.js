const express = require('express')
const router=express.Router();
const mongoose=require('mongoose');
const cart=require('../model/Cart')
const url1=require("url");

router.post("/",(req, res) => {

    console.log(req)
    const newCart= new cart({
      _id: new mongoose.Types.ObjectId(),
      user: req.body.user,
      items:req.body.id,
      price:req.body.price,
      quantity:req.body.quantity,
      status:"cart"
    });
    console.log("in")
    newCart
      .save()
      .then((result) => {
        console.log("Result: ", result);
        res.status(201).json([
          {
            status: "success",
            message: "Product Added",
            data: [newCart],
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

  router.get("/", (req,res,err) => {
    console.log("in")
    cart.find()
      .exec()
      .then((docs) => {
        console.log(docs);
        if (docs.length > 0) {
          res.status(200).json({
            status: "success",
            message: "Product Details",
            count: docs.length,
            data:docs,
            
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

  router.put("/", (req,res,err) => {
    console.log("in")
    cart.find()
      .exec()
      .then((docs) => {
        console.log(docs);
        if (docs.length > 0) {
          res.status(200).json({
            status: "success",
            message: "Product Details",
            count: docs.length,
            data:docs,
            
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
  
  module.exports=router;