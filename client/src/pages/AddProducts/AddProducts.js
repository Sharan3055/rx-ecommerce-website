import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddProducts.css"; // Import CSS file for custom styling
import { Slide, Flip, ToastContainer, toast } from "react-toastify";
import axios from "axios";

const AddProducts = () => {
  const max = 10000;
  const min = 150;
  const [formData, setFormData] = useState({
    id: 0,
    img: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    company: "",
    title: "",
    color: "",
    category: "",
    prevPrice: "",
    newPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const notify = () =>
    toast.error("Product ID already existed", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });

  const notify2 = () =>
    toast.success("Product has been added", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:4000/api/products/addproduct", { data: formData })
      .then((response) => {
        if (response.data.result) {
          // Clear form fields after successful submission
          setFormData({
            id: "",
            img: "",
            img2: "",
            img3: "",
            img4: "",
            img5: "",
            company: "",
            title: "",
            color: "",
            category: "",
            prevPrice: "",
            newPrice: "",
          });
          console.log("Product has been added");
          notify2();
        } else {
          notify();
        }
      })
      .catch((error) => {
        console.error("Server error:", error);
        // Handle error
      });
  };

  return (
    <div className="add-product-container">
      <ToastContainer />
      <div className="left-section">
        <iframe
          src="https://lottie.host/embed/0a0c10b8-cab6-4b5f-bbe2-4b02e6442329/kEVpWmwTn8.json"
          title="animation"
          frameBorder="0"
          width="100%"
          height="300px"
        />
      </div>
      <div className="right-section">
        <h2>Add Product</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="id" className="form-group">
            <Form.Label>Product ID:</Form.Label>
            <Form.Control
              type="Number"
              name="id"
              placeholder="Enter product ID"
              onChange={handleChange}
              required
              autoFocus
            />
          </Form.Group>

          <Form.Group controlId="title" className="form-group">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter product title"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="category" className="form-group">
            <Form.Label>Category:</Form.Label>
            <Form.Control
              as="select"
              name="category"
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="sneakers">Sneaker</option>
              <option value="heels">Heel</option>
              <option value="sandals">Sandal</option>
              <option value="formals">Formals</option>
              <option value="sports">Sports</option>
              {/* Add more options as needed */}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="company" className="form-group">
            <Form.Label>Company:</Form.Label>
            <Form.Control
              type="text"
              name="company"
              placeholder="Enter company name"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="color" className="form-group">
            <Form.Label>Color:</Form.Label>
            <Form.Control
              as="select"
              name="color"
              onChange={handleChange}
              required
            >
              <option value="">Select Color</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="gray">Gray</option>
              <option value="black">Black</option>
              {/* Add more options as needed */}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="img" className="form-group">
            <Form.Label>Main Image URL:</Form.Label>
            <Form.Control
              type="text"
              name="img"
              placeholder="Enter main image URL"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="img2" className="form-group">
            <Form.Label>Additional Image 1 URL:</Form.Label>
            <Form.Control
              type="text"
              name="img2"
              placeholder="Enter additional image URL"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="img3" className="form-group">
            <Form.Label>Additional Image 2 URL:</Form.Label>
            <Form.Control
              type="text"
              name="img3"
              placeholder="Enter additional image URL"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="img4" className="form-group">
            <Form.Label>Additional Image 3 URL:</Form.Label>
            <Form.Control
              type="text"
              name="img4"
              placeholder="Enter additional image URL"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="img5" className="form-group">
            <Form.Label>Additional Image 4 URL:</Form.Label>
            <Form.Control
              type="text"
              name="img5"
              placeholder="Enter additional image URL"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="prevPrice" className="form-group">
            <Form.Label>Previous Price:</Form.Label>
            <Form.Control
              type="Number"
              name="prevPrice"
              placeholder="Enter previous price"
              onChange={handleChange}
              min={min}
              max={max}
              required
            />
          </Form.Group>

          <Form.Group controlId="newPrice" className="form-group">
            <Form.Label>New Price:</Form.Label>
            <Form.Control
              type="Number"
              name="newPrice"
              placeholder="Enter new price"
              onChange={handleChange}
              min={min}
              max={max}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="bts">
            Add Product
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddProducts;
