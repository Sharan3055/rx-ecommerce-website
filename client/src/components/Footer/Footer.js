import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
// import "./Footer.css";

// Footer component

function Footer() {
  // Function to redirect to the specified URL
  const redirectTo = (url) => {
    window.open(url, "_blank");
  };

  // position: "absolute",
  // bottom: 0,
  // width: "100%",
  // backgroundColor: "#143D59",
  // color: "#fff",
  // padding: "10px",

  return (
    <footer
      style={{
        backgroundColor: "#143D59",
        color: "#fff",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Col sm={12} lg={3} className="phone-center">
            <ul
              className="footer-contact"
              style={{ margin: "0", padding: "0" }}
            >
              <li style={{ fontWeight: "bold" }}>CALL US</li>
              <li>+91 798 742 3212</li>
            </ul>
            <ul style={{ margin: "0", padding: "0" }}>
              <li style={{ fontWeight: "bold" }}>LOCATION</li>
              <li>
                56rd Street and Fifth Avenue in <br />
                New York City, United States
              </li>
            </ul>
            <ul style={{ margin: "0", padding: "0" }}>
              <li style={{ fontWeight: "bold" }}>EMAIL</li>
              <li>
                <a>rxshoesonline@gmail.com</a>
              </li>
            </ul>
          </Col>
          <Col sm={12} lg={3} className="phone-center">
            <div className="footer-links">
              <ul>
                <li>Resources</li>
                <li>Online Selling Guide</li>
                <li>Products in Demand</li>
                <li>Success Stories</li>
                <li>Seller Learning Center</li>
                <li>News</li>
                <li>API Documentation</li>
              </ul>
            </div>
          </Col>
          <Col sm={12} lg={3} className="phone-center">
            <div className="footer-links">
              <ul>
                <li>FAQs</li>
                <li>General</li>
                <li>Fees and Charges</li>
                <li>Managing your Account</li>
                <li>Services and Fulfillment by Rx (FRX) Stride with Pride</li>
              </ul>
            </div>
          </Col>
          <Col sm={12} lg={3} className="phone-center">
            <div className="google-map">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.14140602967!2d-74.11808625536668!3d40.70582563031865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1584642386538!5m2!1sen!2sca"
                width="100%"
                height="100%"
                frameBorder="10px"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="footer-icons" style={{ textAlign: "center" }}>
              <i
                className="fab fa-instagram"
                onClick={() => redirectTo("https://www.instagram.com/")}
                style={{ marginRight: "20px" }}
              ></i>
              <span className="icon-gap"></span> {/* Add gap here */}
              <i
                className="fab fa-linkedin"
                onClick={() => redirectTo("https://www.linkedin.com/")}
                style={{ marginRight: "20px" }}
              ></i>
              <span className="icon-gap"></span> {/* Add gap here */}
              <i
                className="fab fa-facebook-square"
                onClick={() => redirectTo("https://www.facebook.com/")}
                style={{ marginRight: "20px" }}
              ></i>
              <span className="icon-gap"></span> {/* Add gap here */}
              <i
                className="fab fa-twitter"
                onClick={() => redirectTo("https://twitter.com/")}
                style={{ marginRight: "20px" }}
              ></i>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Col sm={6} className="phone-center">
            {/* <div style={{ display: "flex", alignItems: "center" }}>
                            <Image height={"30px"} src="../images/rx-logo.png" alt="Rx Logo" style={{ marginRight: "10px" }} />
                            <p>©2024 Rx. All rights reserved</p>
                        </div> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
