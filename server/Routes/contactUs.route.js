const express = require("express");
const router = express.Router();

const { contactUsMail } = require("../services/email.service");
const contactUsModel = require("../Models/contactus.model");

//contact us route
router.post("/contactUs", async (req, res) => {
  try {
    const { name, emailId, mobileNumber, messageBody } = req.body;
    if (!emailId || !mobileNumber) {
      res.status(400).send({
        result: false,
        message: "Email or Phone number is compulsory",
      });
      return;
    }
    let data = await contactUsMail(name, emailId, mobileNumber, messageBody);
    console.log("data", data);
    res
      .status(200)
      .send({ result: true, message: "email sended successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ result: false, message: "intenal server error" });
  }
});

module.exports = router;
