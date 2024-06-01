import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { Flip, ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import "./SellerSignUp.css";

const auth = getAuth(app);

function SellerSignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const reduxData = useSelector((state) => state.cart);
  console.log(reduxData);
  let redirect = useNavigate();
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const notify = () =>
    toast.error("User Already Exists ! Try To SignIn", {
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
      .post("http://localhost:4000/api/users/Registration", {
        name: formData.username,
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.result) {
          redirect("/signin");
        } else {
          notify();
        }
      })
      .catch(() => {
        console.log("server error: ");
      });

    //firebase signup code...

    // createUserWithEmailAndPassword(auth, formData.email, formData.password)
    //   .then((data) => {
    //     updateProfile(auth.currentUser, { displayName: formData.username });
    //     // .then((data) => console.log(data, "dd"));
    //     localStorage.setItem("isLoggedIn", true);
    //     localStorage.setItem("currentUser", JSON.stringify(formData));
    //     // console.log(data);
    //     redirect("home");
    //   })
    //   .catch((error) => {
    //     if (error.code == "auth/email-already-in-use") {
    //       notify();
    //     } else {
    //       console.log(error);
    //     }
    //   });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(credential, token, user);
        // redirect("/home");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <Container className="main-container ">
      <ToastContainer />
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Image src="./images/login.jpg" fluid />
        </Col>
        <Col md={5}>
          <Form onSubmit={handleSubmit}>
            <Image className="logo" src="./images/main-logo.png" />
            <Form.Group controlId="formUsername">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name.."
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
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
            <p className="mt-1">
              Already a user ? {<Link to="/signin">SignIn...</Link>}
            </p>
            <p className="mt-1">
              Forgot Password ? {<Link to="/signin">Reset...</Link>}
            </p>
            <Button className="mt-1 w-100" variant="primary" type="submit">
              Sign Up
            </Button>
            <Button className="mt-1 my-btn w-100" onClick={handleGoogleLogin}>
              <img src="./images/google.png" fluid /> Login With Google
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SellerSignUp;
