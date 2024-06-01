const express = require("express");
const app = express();
const cors = require("cors");
const productsroute = require("./Routes/products.routes");
const userroute = require("./Routes/users.routes");
const sellerroute = require("./Routes/seller.routes");
const contactUsroute = require("./Routes/contactus.route");
const paymentroute = require("./Routes/payment.route");
const cookieParser = require("cookie-parser");

//middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Custom CORS middleware
// const customCorsMiddleware = (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// };

// Use custom CORS middleware
// app.use(customCorsMiddleware);

app.use(express.json());
app.use(cookieParser());

//connection
require("./Connection");

//Routes
app.use("/api/products", productsroute);
app.use("/api/users", userroute);
app.use("/api/seller", sellerroute);
app.use("/api/contact", contactUsroute);
app.use("/api", paymentroute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(4000, () => {
  console.log("Example app listening on port 4000!");
});
