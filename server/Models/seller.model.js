const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Eamil is required"],
    index: { unique: true, errmsg: "Email must be unique" },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
    maxlength: [20, "Password must be at most 20 characters long"],
  },
  name: String,
  address: String,
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "transaction",
    },
  ],
});

const sellerModel = new mongoose.model("sellers", sellerSchema);

module.exports = sellerModel;
