const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is require!!!"],
  },
  category: {
    type: mongoose.Types.ObjectId,
    required: [true, "category is require!!!"],
    ref: "Category",
  },
  code: {
    type: String,
    unique: true,
    required: [true, "code is require!!!"],
  },
  imageURL: {
    type: String,
    required: [true, "image is require!!!"], // Fix spelling here
  },
  costPrice: {
    type: Number,
    required: [true, "cost price is require!!!"],
  },
  salePrice: {
    type: Number,
    required: [true, "sale price is require!!!"],
  },
  stockQty: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema); // ✅ Remove `this`

module.exports = { Product }; // ✅ Now it will work
