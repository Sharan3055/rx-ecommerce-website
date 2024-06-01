import React from "react";
import { Container, Image } from "react-bootstrap";
import "./Sale.css";

function Sale() {
  return (
    <div className="sale-container">
      <Container className="sale-inside-container">
        <div>
          <Image src="../images/sale.png" />
          {/* <Image src="../images/sale1.jpg" /> */}
        </div>
        <div className="sale-data">
          <h1>Why Choose Us ?</h1>
          <hr />
        </div>
      </Container>
    </div>
  );
}

export default Sale;
