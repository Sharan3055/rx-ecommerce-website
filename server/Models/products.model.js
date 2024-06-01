const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  img: String,
  img2: String,
  img3: String,
  img4: String,
  img5: String,
  company: String,
  title: String,
  color: String,
  category: String,
  prevPrice: String,
  newPrice: String,
  company1: {
    name: String,
    address: String,
    contact: String,
  },
  images1: [String],
});

// const productSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   category: { type: String, required: true },
//   colorS: [{ type: String, required: true }], //white 9 marron 5
//   prevPrice: { type: Number, required: true },
//   newPrice: { type: Number, required: true },
//   company: {
//     name: { type: String, required: true },
//     address: { type: String, required: true },
//     contact: { type: String, required: true },
//   },
//   images: [{ type: String, required: true }],
// });

const productModel = new mongoose.model("products", productSchema);

module.exports = productModel;
