import React, { useEffect, useState } from "react";
import "./Cart.css";
import CartCard from "../../components/CartCard/CartCard";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantityInCart } from "../../Redux/CartSlice";
import { Link, useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { addToWishList } from "../../Redux/WishList";
import axios from "axios";

function Cart() {
  let [totalPrice, setTotalPrice] = useState(0);
  let [discount, setdiscount] = useState("");
  let [qty, setQty] = useState(1);
  let [price, setPrice] = useState(0);
  let [qtyObj, setQtyObj] = useState({});

  // let cart = useSelector((state) => state.cart);
  const [cart, setCart] = useState([]);

  // Use useSelector to get the cart from the Redux store
  const reduxCart = useSelector((state) => state.cart);

  // Whenever the reduxCart changes, update the local cart state
  useEffect(() => {
    // Map over the products in the cart and add the qty field with a default value of 1
    const updatedCart = reduxCart.map((product) => ({
      ...product,
      qty: 1, // Set qty to 1 for each product by default
    }));

    // Update the local cart state
    setCart(updatedCart);
  }, [reduxCart]); // Depend on reduxCart changes

  const dispatch = useDispatch();

  const handleQuantityChange = (productId, newQuantity) => {
    // Update quantity for the specific product in the cart
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, qty: newQuantity } : item
      )
    );
  };

  const calculateTotalPrice = () => {
    let totalPrice = cart.reduce((accumulator, item) => {
      // Multiply price by quantity for each item and add to accumulator
      return accumulator + item.newPrice * item.qty;
    }, 0);

    // Update state with the new total price
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    // Calculate total price whenever cart or its quantities change
    calculateTotalPrice();
  }, [cart]);

  const notify = (text) =>
    toast.info(text, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  const handleDiscount = (e) => {
    e.preventDefault();
    console.log(discount);
    if (discount.toLocaleLowerCase() == "first50") {
      let discountedPrice = (totalPrice * 50) / 100;
      notify("please wait validating..... coupon " + discount);
      setTimeout(() => {
        setTotalPrice(discountedPrice);
      }, 3000);
    } else alert("fail");
  };

  const handleWishList = (product) => {
    dispatch(addToWishList(product));
    notify("Product Added To WishList");
  };

  const handleDelteFromCart = (id) => {
    dispatch(removeFromCart(id));
    // handleTotalPrice();
    calculateTotalPrice();
    notify("Item Removed From Sucessfully");
  };

  const service_id = "service_rasup57";
  const temple_id = "template_e7286cp";
  const public_key = "aPBI9980l4fvsy2Xh";

  let redirect = useNavigate();

  const handlePurChase = () => {
    if (cart.length != 0) {
      axios
        .get("http://localhost:4000/api/users/verifyToken", {
          withCredentials: true,
        })
        .then((response) => {
          if (response.data.result) {
            // redirect("/payment", { state: { totalPrice: totalPrice } });
            redirect("/payment");
          }
        })
        .catch((response) => {
          redirect("/signin", { state: { totalPrice: totalPrice } });
        });
    } else {
      notify("Please Select Any Item First");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="App">
        {/* <header class="section-header">
          <section class="header-main border-bottom">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-2 col-4">
                  <a href="#">Company Name</a>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <form action="#" class="search">
                    <div class="input-group w-100">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-lg-4 col-sm-6 col-12">
                  <div class="widgets-wrap float-md-right">
                    <div class="widget-header  mr-3">
                      <a href="#" class="icon icon-sm rounded-circle border">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                      <span class="badge badge-pill badge-danger notify">
                        0
                      </span>
                    </div>
                    <div class="widget-header icontext">
                      <a href="#" class="icon icon-sm rounded-circle border">
                        <i class="fa fa-user"></i>
                      </a>
                      <div class="text">
                        <span class="text-muted">Welcome!</span>
                        <div>
                          <a href="#">Sign in</a> |<a href="#">Register</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header> */}

        <section class="section-pagetop bg">
          <div class="container">
            <h2 class="title-page">Shopping cart</h2>
          </div>
        </section>

        <section class="section-content padding-y">
          <div class="container">
            <div class="row">
              <main class="col-md-9">
                <div class="card">
                  <table
                    class="table table-borderless table-shopping-cart"
                    style={{ verticalAlign: "baseline" }}
                  >
                    <thead class="text-muted">
                      <tr class="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width="120">
                          Quantity
                        </th>
                        <th scope="col" width="120">
                          Price
                        </th>
                        <th scope="col" class="text-right" width="200">
                          {" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((curElm) => (
                        <CartCard
                          id={curElm.id}
                          img={curElm.img}
                          title={curElm.title}
                          company={curElm.company}
                          prevPrice={curElm.prevPrice}
                          newPrice={curElm.newPrice}
                          color={curElm.color}
                          handleDelteFromCart={handleDelteFromCart}
                          // hadleQty={hadleQty}
                          handleQuantityChange={handleQuantityChange}
                          qty={curElm.qty}
                          handleWishList={handleWishList}
                          size={curElm.size}
                        />
                      ))}
                    </tbody>
                  </table>

                  <div class="card-body border-top">
                    <button
                      class="btn btn-primary float-md-right"
                      onClick={handlePurChase}
                    >
                      Make Purchase <i class="fa fa-chevron-right"></i>
                    </button>
                    <Link to="/allproducts">
                      <button class="btn btn-light">
                        <i class="fa fa-chevron-left"></i> Continue shopping
                      </button>
                    </Link>
                  </div>
                </div>

                <div class="alert alert-success mt-3">
                  <p class="icontext">
                    <i class="icon text-success fa fa-truck"></i> Free Delivery
                    within 1-2 weeks
                  </p>
                </div>
              </main>
              <aside class="col-md-3">
                <div class="card mb-3">
                  <div class="card-body">
                    <form>
                      <div class="form-group">
                        <label>Have coupon?</label>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            name=""
                            placeholder="Coupon code"
                            onChange={(evt) => setdiscount(evt.target.value)}
                          />
                          <span class="input-group-append">
                            <button
                              class="btn btn-primary"
                              onClick={handleDiscount}
                            >
                              Apply
                            </button>
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <dl class="dlist-align">
                      <dt>Total price:</dt>
                      <dd class="text-right">USD 568</dd>
                    </dl>
                    <dl class="dlist-align">
                      <dt>Discount:</dt>
                      <dd class="text-right">USD 658</dd>
                    </dl>
                    <dl class="dlist-align">
                      <dt>Total:</dt>
                      <dd class="text-right  h5">
                        <strong>₹{totalPrice}</strong>
                      </dd>
                    </dl>
                    <hr />
                    <p class="text-center mb-3">
                      <img src="./images/allcards.png" height="26" />
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div> 
        </section>

        <section class="section-name bg padding-y">
          <div class="container">
            <h6>Payment and refund policy</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cart;
