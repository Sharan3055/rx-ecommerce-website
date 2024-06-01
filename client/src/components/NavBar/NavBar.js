import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie =
      "authentication_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  };

  const cart = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className="main-navbar">
      <Container>
        <div className="top-navbar">
          <Navbar.Brand>
            <img
              alt="rx-logo"
              src="./images/main-logo.png"
              width="50"
              height="40"
              className="d-inline-block"
            />
            <span className="brand-name">Stride with Pride</span>
          </Navbar.Brand>
          {/* <div className="search-container">
            <input type="text" placeholder="Search " className="search-bar" />
            <button className="search-button">
              <i className="fa fa-search"></i>
            </button>
          </div> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="main">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/allproducts" className="nav-link">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              Contact Us
            </Nav.Link>
            <NavDropdown
              title="Profile"
              id="basic-nav-dropdown"
              className="nav-link"
              style={{ paddingTop: "0px", paddingBottom: "3px" }}
            >
              <NavDropdown.Item as={Link} to="/product">
                Trending 🔥
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Men's FootWare
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Women's FootWare
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wishlist">
                Wish List 💙
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cart">
                MyCart
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/seller/dashboard">
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signin">
                SignIn
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">
                SignUp
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout} style={{ color: "red" }}>
                LogOut
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link to="cart">
          <i className="fa fa-cart-shopping position-relative fa-sl">
            <span
              style={{ backgroundColor: "#86D6F9" }}
              className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle"
            >
              <span className="">{cart.length}</span>
            </span>
          </i>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
