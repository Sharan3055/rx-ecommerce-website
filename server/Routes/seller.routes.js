const express = require("express");
const router = express.Router();

//Models
const sellerModel = require("../Models/seller.model");

router.get("/", async (req, res) => {
  try {
    const sellersData = await sellerModel.find();
    res.json(sellersData);
  } catch (errr) {
    console.log("Insert Server Error: EndPoint /sellers" + errr);
    res.status(500).send("Insert Server Error" + errr);
  }
});

router.post("/add-seller", async (req, res) => {
  try {
    console.log("seller");
    const { email, password, name, address } = req.body;
    // const singleseller = await sellerModel.findOne({ id: id });
    // if (singleseller) {
    //   res.status(200).json(singleseller);
    // } else {
    //   res.status(404).json({ message: "seller not found" });
    // }
    const newSeller = await sellerModel.create({
      email,
      password,
      name,
      address,
      //   transactions: [],
    });
    console.log(newSeller);
    res.status(200).send({ message: "success", data: newSeller });
  } catch (err) {
    res.status(500).send({ message: "internal error in", err: err.message });
    console.log(err);
    console.log(err.message);
    console.log("interal error in /singleseller");
  }
});

module.exports = router;
