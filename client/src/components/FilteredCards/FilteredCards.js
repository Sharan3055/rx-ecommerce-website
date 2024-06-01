import React from "react";
import "./FilteredCards.css";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function FilteredCards({
  id,
  img,
  company,
  title,
  color,
  category,
  prevPrice,
  newPrice,
  addtoCart,
}) {
  const navigate = useNavigate();

  const navigateToProduct = (id) => {
    console.log("clicked", id);
    navigate("/product", { state: { id: id } });
  };

  return (
    <>
      <Col lg={3}>
        <Card className="filtered-card-hover" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            height="250px"
            src={img}
            onClick={() => navigateToProduct(id)}
          />

          <Card.Body>
            <div className="add-to-cart">
              <Card.Title>{company}</Card.Title>
              <button
                className="btn-add-to-cart"
                onClick={() =>
                  addtoCart({
                    id,
                    img,
                    company,
                    title,
                    color,
                    category,
                    prevPrice,
                    newPrice,
                  })
                }
              >
                Add To Cart
              </button>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                ₹<del id="prevprice">{prevPrice}</del>{" "}
                <span id="newprice">{newPrice}</span>
              </div>
              <Card.Text>{title}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default FilteredCards;
