import React from "react";
import { Container } from "react-bootstrap";
import "./PageNotFound.css";
function PageNotFound() {
  return (
    <div
      style={{
        backgroundImage: `url("./images/404.jpg")`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        margin: "5px 0",
      }}
    ></div>
  );
}

export default PageNotFound;
