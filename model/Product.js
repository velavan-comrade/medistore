const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  productName: String,
  productId: Number,
  price:Number,
  description: String,
  uses: [String],
  img: String,
  quantity:Number
});

module.exports = mongoose.model("Products", productSchema); 