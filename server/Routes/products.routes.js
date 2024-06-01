const express = require("express");
const router = express.Router();

//Models
const productModel = require("../Models/products.model");

router.get("/", async (req, res) => {
  try {
    const productsData = await productModel.find();
    res.json(productsData);
  } catch (errr) {
    console.log("Insert Server Error: EndPoint /products" + errr);
    res.status(500).send("Insert Server Error" + errr);
  }
});

//get products with pagination
router.get("/getProducts", async (req, res) => {
  try {
    let page = Number(req.query.page) || 1; // 2
    let limit = Number(req.query.limit) || 5; //4
    let skip = (page - 1) * limit;

    //fetch paginated products data
    const productsData = await productModel.find().skip(skip).limit(limit);

    //fetch total number of products for frontend pagination
    const totalNumberOfProducts = await productModel.countDocuments();

    res.json({
      length: productsData.length,
      data: productsData,
      totalCount: totalNumberOfProducts,
    });
  } catch (errr) {
    console.log("Insert Server Error: EndPoint /products" + errr);
    res.status(500).send("Insert Server Error" + errr);
  }
});

// Route for getting products by category
router.get("/getProductsByCategory", async (req, res) => {
  try {
    let { category, color, price } = req.query;

    // Create a query object with both conditions
    let query = {};
    if (category) {
      query.category = category;
    }
    if (color) {
      query.color = color;
    }
    if (price) {
      query.newPrice = price;
    }

    // Fetch paginated products data
    const productsData = await productModel.find(query);
    res.json({ length: productsData.length, data: productsData });
  } catch (err) {
    console.log("Server Error: Endpoint /getProductsByCategory", err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/singleProduct", async (req, res) => {
  try {
    const { id } = req.body;
    const singleProduct = await productModel.findOne({ id: id });
    if (singleProduct) {
      res.status(200).json(singleProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).send("internal error in");
    console.log("interal error in /singleproduct");
  }
});

//Add products
router.post("/addproduct", async (req, res) => {
  try {
    // const {
    //   id,
    //   img,
    //   img2,
    //   img3,
    //   img4,
    //   img5,
    //   company,
    //   title,
    //   color,
    //   category,
    //   prevPrice,
    //   newPrice,
    // } = req.body;
    let idExists = await productModel.findOne({ id: req.body.data.id });
    if (!idExists) {
      const newProduct = productModel({
        id: req.body.data.id,
        img: req.body.data.img,
        img2: req.body.data.img2,
        img3: req.body.data.img3,
        img4: req.body.data.img4,
        img5: req.body.data.img5,
        company: req.body.data.company,
        title: req.body.data.title,
        color: req.body.data.color,
        category: req.body.data.category,
        prevPrice: req.body.data.prevPrice,
        newPrice: req.body.data.newPrice,
      });
      await newProduct.save();
      console.log("product added");
      res
        .status(201)
        .json({ result: true, message: "Product added successfully" });
    } else {
      console.log("Product ID already existed");
      res
        .status(201)
        .json({ result: false, message: "Product ID already existed" });
    }
  } catch (error) {
    console.log("Insert error at point" + error);
    res.status(500).send("Insert Server Error: " + error);
  }
});

//
// router.post("/addproduct", async (req, res) => {
//   try {
//     const {
//       title,
//       description,
//       category,
//       color,
//       prevPrice,
//       newPrice,
//       company,
//       images,
//     } = req.body;
//     let idExists = await productModel.findOne({ id: id });
//     if (!idExists) {
//       const newProduct = await productModel.create({
//         title,
//         description,
//         category,
//         color,
//         prevPrice,
//         newPrice,
//         company,
//         images,
//       });
//       console.log(newProduct);
//       console.log("product added");
//       res
//         .status(201)
//         .json({ result: true, message: "Product added successfully" });
//     } else {
//       console.log("Product ID already existed");
//       res
//         .status(201)
//         .json({ result: false, message: "Product ID already existed" });
//     }
//   } catch (error) {
//     console.log("Insert error at point" + error);
//     res.status(500).send("Insert Server Error: " + error);
//   }
// });

router.post("/testProduct", async (req, res) => {
  const img1 = "abc",
    img2 = "Adasd",
    img3 = "Asdasd",
    img4 = "werwerwer";
  const data = await productModel.create({
    id: 301,
    images1: [img1, img2, img3, img4],
    company1: {
      name: "Woodland",
      address: "123 and address name",
      contact: "+123456789",
    },
    title: "Leather sneakers",
    color: "red",
    category: "sneakers",
    quantity: 10,
    price: {
      prev: 1500,
      current: 9999,
    },
    sellerInfo: {
      sellerId: 421,
      sellerRating: 3,
    },
  });
  res.status(200).send({ msg: "done", data: data });
});

router.put("/updateProduct", async (req, res) => {
  try {
    const {
      id,
      title,
      description,
      category,
      color,
      prevPrice,
      newPrice,
      company,
      qty,
    } = req.body;
    // console.log(JSON.stringify(updated))
    let idExists = await productModel.findOne({ id: id });
    if (idExists) {
      await productModel.findOneAndUpdate(
        { _id: idExists._id },
        {
          id,
          title,
          description,
          category,
          color,
          prevPrice,
          newPrice,
          company,
          qty: qty,
        }
      );
      // console.log(newProduct);
      console.log("product updated");
      res
        .status(201)
        .json({ result: true, message: "Product updated successfully" });
    } else {
      console.log("Product ID not existed");
      res
        .status(201)
        .json({ result: false, message: "Product ID not existed" });
    }
  } catch (error) {
    console.log("Insert error at point" + error);
    res.status(500).send("Insert Server Error: " + error);
  }
});

router.delete("/removeProduct/:id", async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    let idExists = await productModel.findOne({ id: id });
    if (idExists) {
      await productModel.findOneAndDelete({ _id: idExists._id });
      console.log("product deleted");
      res
        .status(201)
        .json({ result: true, message: "Product deleted successfully" });
    } else {
      console.log("Product ID not existed");
      res
        .status(201)
        .json({ result: false, message: "Product ID not existed" });
    }
  } catch (error) {
    console.log("Insert error at point" + error);
    res.status(500).send("Insert Server Error: " + error);
  }
});

module.exports = router;
