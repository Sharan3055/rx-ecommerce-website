const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, required: true },
  phoneNumber: { type: String },
});

const contactUsModel = new mongoose.model("contactUs", contactUsSchema);

module.exports = contactUsModel;

console.log("i am contactUsModel");
