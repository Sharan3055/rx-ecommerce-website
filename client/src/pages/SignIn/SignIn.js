import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../Firebase/firebaseConfig";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Flip, ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import "./SignIn.css";

const auth = getAuth(app);

function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  let dataFromCart = useLocation();
  console.log(dataFromCart);

  let redirect = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const notify = () =>
    toast.error("Either username or passwords dont match !", {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:4000/api/users/Login", {
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.result) {
          redirect("/payment");
        }
      })
      .catch((error) => {
        notify();
      });

    //firebase signupCode...

    // signInWithEmailAndPassword(auth, formData.email, formData.password)
    //   .then((data) => {
    //     localStorage.setItem("isLoggedIn", true);
    //     localStorage.setItem("currentUser", JSON.stringify(formData));
    //     redirect("/home", { state: { name: data.user.displayName } });
    //     // console.log(data);
    //     // console.log(data.user.displayName);
    //   })
    //   .catch((error) => {
    //     if (error.code == "auth/invalid-credential") {
    //       notify();
    //     } else {
    //       console.log(error);
    //     }
    //   });
  };

  return (
    <Container className="main-container mt-5">
      <ToastContainer />
      <Row className="justify-content-md-center">
        <Col md={5}>
          <Form onSubmit={handleSubmit}>
            <Image className="logo" src="./images/main-logo.png" />
            <Form.Group controlId="formUsername">
              {/* <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name.."
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              /> */}
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Registered email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <p className="mt-2">
              New user ? {<Link to="/signup">SignUp...</Link>}
            </p>
            <Button className="my-2 w-100" variant="primary" type="submit">
              Sign Up
            </Button>
            <Button className="my-2 my-btn w-100">
              <img src="./images/google.png" fluid /> Login With Google
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <Image id="signin-image" src="./images/signin.jpg" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
