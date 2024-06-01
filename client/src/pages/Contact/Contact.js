import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { Slide, ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:4000/api/contact/contactUs", {
        name: formData.fullName,
        emailId: formData.email,
        mobileNumber: formData.phoneNumber,
        messageBody: formData.message,
      })
      .then((response) => {
        console.log(response);
        notify(response.data.message);
      })
      .catch((err) => {
        notify(err.response.data.message);
      });
  };

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
      <div className="contact-container">
        <div className="contact-image-section">
          <img
            src="./images/contact_us.jpg"
            alt="Contact us"
            className="contact-image"
          />
        </div>
        <div className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email id"
              required
            />
            <input
              type="phone"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter mobile number"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="10"
              placeholder="Type your message here.."
              required
            />
            <div className="contact-submit-button">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
