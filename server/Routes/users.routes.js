const express = require("express");
const router = express.Router();
const userModel = require("../Models/users.model");
const bcrypt = require("bcrypt");
const {
  encryptPasswordFunction,
  comparePasswordFunction,
} = require("../controllers/helper.controllers");
const jwt = require("jsonwebtoken");
const Cookies = require("js-cookie");
const {
  purchaseMail,
  registraionMail,
  contactUsMail,
} = require("../services/email.service");

//get all users
router.get("/", async (req, res) => {
  // console.log("hey");
  try {
    let data = await userModel.find();
    res.status(200).send({ result: true, data: data });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ result: false, message: err });
  }
});

router.post("/Registration", async (req, res) => {
  try {
    let { name, email, password } = req.body;
    console.log(name, email, password);
    let emailExists = await userModel.findOne({ email: email });
    if (!emailExists) {
      encryptPasswordFunction(password)
        .then(async (encryptPassword) => {
          // Create user account
          await userModel.create({
            name: name,
            email: email,
            password: encryptPassword,
          });

          // Sending registration email asynchronously
          registraionMail(email, name)
            .then(() => {
              console.log("Registration email sent successfully");
            })
            .catch((err) => {
              console.error("Error sending registration email:", err);
            });

          // Respond to the user immediately
          res
            .status(200)
            .send({ result: true, message: "User created successfully" });
        })
        .catch((err) => {
          console.log("Internal error", err);
          res.status(500).send("Internal error");
        });
    } else {
      res.status(400).send({ result: false, message: "Email already exists" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal error");
  }
});

router.post("/sendPurchaseMail", async (req, res) => {
  try {
    const { productList } = req.body;
    const token = req.cookies["authentication_token"];
    const decodedToken = jwt.verify(token, "mysecretkey");
    let data = await purchaseMail(
      decodedToken.email,
      decodedToken.username,
      productList
    );
    res.status(200).send({
      result: true,
      message: `Sucessfully Email Sended To ${decodedToken.email}`,
    });
  } catch (err) {
    console.log("internal server error in /sendPurchaseMail", err.message);
    res.status(500).send({
      result: false,
      message: "internal server error kindly try again..",
    });
  }
});

// router.post("/sendRegistrationMail", async (req, res) => {
//   const { userEmail, userName, productList } = req.body;
//   let data = await registraionMail(userEmail, userName);
//   res
//     .status(201)
//     .send({ message: "Sucessfully Email Sended To Users", data: data });
//   // res.sendStatus(200);
// });

router.post("/Login", async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log(email);
    const emailExists = await userModel.findOne({ email: email });
    console.log(emailExists);
    let username = emailExists.name || "customer";
    console.log(username);
    if (emailExists) {
      comparePasswordFunction(password, emailExists.password)
        .then((passwordMatched) => {
          if (passwordMatched) {
            const token = jwt.sign({ email, username }, "mysecretkey", {
              expiresIn: "2d",
            });
            res.cookie("authentication_token", token, {
              maxAge: 2 * 24 * 60 * 60 * 1000,
            });
            res
              .status(200)
              .send({ result: true, message: "logged in successfully" });
          } else {
            res
              .status(400)
              .send({ result: false, message: "password dont match" });
          }
        })
        .catch((err) => {
          console.log(err.message);
          res.status(500).send("internal server error");
        });
    } else {
      res.status(400).send("Email does not exist");
    }
  } catch (err) {
    console.log("err in userLogin", err);
  }
});

router.get("/verifyToken", (req, res) => {
  const token = req.cookies["authentication_token"];
  // console.log(token);
  if (token) {
    jwt.verify(token, "mysecretkey", (err, decoded) => {
      if (err) {
        console.log("workin error");
        res.status(500).send({ result: false, message: "invalid token" });
      } else {
        res
          .status(200)
          .send({ result: true, message: "logged in successfully" });
      }
    });
  } else {
    res.status(400).send("invalid token");
  }
});

module.exports = router;
