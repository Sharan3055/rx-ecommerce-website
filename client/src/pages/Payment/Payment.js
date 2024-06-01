import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Payment.css";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { Slide, ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Payment = () => {
  let [totalPrice, setTotalPrice] = useState(0);
  let cart = useSelector((state) => state.cart);

  const handleTotalPrice = () => {
    let totalPrice = cart.reduce((accumulator, curElm) => {
      return accumulator + Number(curElm.newPrice);
    }, 0);
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    handleTotalPrice();
  }, [cart]);

  const handleBilling = () => {
    let userEmail = "jharupesh669@gmail.com";
    let userName = "Rupesh";

    let productList = cart.map((product) => {
      return {
        item: product.title,
        brand: product.company,
        color: product.color,
        price: product.newPrice,
      };
    });

    axios
      .post(
        "http://localhost:4000/api/users/sendPurchaseMail",
        {
          productList,
        },
        { withCredentials: true }
      )
      .then((response) => {
        notify(response.data.message);
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };

  //old email.js

  // const handlePayment = () => {
  //   const service_id = "service_rasup57";
  //   const temple_id = "template_e7286cp";
  //   const public_key = "aPBI9980l4fvsy2Xh";

  //   let mydata = cart.map(
  //     (curElm) =>
  //       `
  //         Product Details order id: ${curElm.id}, color : ${curElm.color}, Brand name : ${curElm.company} ,Title ${curElm.title} ,Price : ${curElm.newPrice}
  //         `
  //   );
  //   let senderMail = JSON.parse(localStorage.getItem("currentUser"));
  //   console.log(senderMail.email);
  //   const templateParams = {
  //     form_name: "Rx",
  //     reply_to: senderMail.email,
  //     from_email: senderMail.email,
  //     to_name: "Rupesh",
  //     message: mydata,
  //   };
  //   emailjs
  //     .send(service_id, temple_id, templateParams, public_key)
  //     .then((response) => {
  //       console.log("email sent successfully ", response);
  //       notify("Order Confrim Mail Sent");
  //     });

  //   const notify = (text) =>
  //     toast.info(text, {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //       transition: Slide,
  //     });
  // };

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

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="row my-4">
          <div className="col-md-5 col-lg-4 order-md-last">
            <div className="card mb-4">
              <div className="card-header py-3 bg-light">
                <h5 className="mb-0">Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    {/* Products ({totalItems})<span>${Math.round(subtotal)}</span> */}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <img height="50px" src="./images/main-logo.png" />
                    {/* <span>${shipping}</span> */}
                    Shipping
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span id="p-t-amount">₹{totalPrice}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h4 className="mb-0">Billing address</h4>
              </div>
              <div className="card-body">
                <form className="needs-validation" novalidate>
                  {/* <div style={{ width:"600px", borderRadius:"10px",alignItems:"center"}}> */}
                  <div className="row g-3">
                    <div className="col-sm-6 my-1">
                      <label for="firstName" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Enter Name"
                        required
                      />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div className="col-sm-6 my-1">
                      <label for="lastName" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Enter last name"
                        required
                      />
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                    <div className="col-12 my-1">
                      <label for="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="you@example.com"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>

                    <div className="col-12 my-1">
                      <label for="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>

                    <div className="col-12">
                      <label for="address2" className="form-label">
                        Address 2 <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div>

                    <div className="col-md-5 my-1">
                      <label for="country" className="form-label">
                        Country
                      </label>
                      <br />
                      <select className="form-select" id="country" required>
                        <option value="">Choose...</option>
                        <option>India</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>

                    <div className="col-md-4 my-1">
                      <label for="state" className="form-label">
                        State
                      </label>
                      <br />
                      <select className="form-select" id="state" required>
                        <option value="">Choose...</option>
                        <option>Punjab</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                    <div className="col-md-3 my-1">
                      <label for="zip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>
                </form>

                <hr className="my-4" />

                <h4 className="mb-3">Payment</h4>

                <div className="row gy-3">
                  <div className="col-md-6">
                    <label for="cc-name" className="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                    />
                    <small className="text-muted">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label for="cc-number" className="form-label">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label for="cc-expiration" className="form-label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label for="cc-cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <button
                  className="w-100 btn btn-primary "
                  type="submit"
                  // disabled
                  // onClick={handlePayment}
                  onClick={handleBilling}
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
