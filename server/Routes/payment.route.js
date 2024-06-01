const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const stripe = require("stripe")(
  "sk_test_51Ot2hASJUavBp7tK8O8EaMx03MOGMUTrdnVn9IechSQ3jLsbeIYmjDlEtnjk205cETRhdZAycN8lUlav8efJnZU500LRCJRgCK"
); // Replace 'sk_test_your_secret_key' with your actual Stripe secret key
const cors = require("cors");

router.use(bodyParser.json());
router.use(cors());

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { cart, country } = req.body;

    // Create line items for the Stripe checkout session
    const lineItems = cart.map((product) => ({
      price_data: {
        currency: country === "IN" ? "inr" : "usd", // Use INR for India, USD for other countries
        product_data: {
          name: product.title,
          description: product.description,
          images: [product.image],
        },
        unit_amount: Math.round(product.newPrice * 100), // Convert to cents
      },
      quantity: 1,
    }));

    // Configure session options
    const sessionOptions = {
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000",
      cancel_url: "http://localhost:3000/cancel",
    };

    // Add shipping address collection based on country
    if (country === "IN") {
      // For INR transactions in India, require shipping address outside India
      sessionOptions.shipping_address_collection = {
        allowed_countries: ["US", "CA", "GB", "IN", "AU"], // Add other allowed countries as needed
      };
    } else {
      // For non-INR transactions, require shipping address outside India
      sessionOptions.shipping_address_collection = {
        allowed_countries: ["US", "CA", "GB", "AU", "IN"], // Add other allowed countries as needed
      };
    }

    const session = await stripe.checkout.sessions.create(sessionOptions);

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

module.exports = router;
