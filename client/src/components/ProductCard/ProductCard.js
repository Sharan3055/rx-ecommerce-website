import "./ProductCard.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Card, Col, Container, Pagination, Row } from "react-bootstrap";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err, "error fetching products");
      });
  }, []);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    notify(product);
  };

  const notify = (product) =>
    toast(`${product.title} Added To Cart`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const navigateToProduct = (id) => {
    console.log("clicked", id);
    navigate("/product", { state: { id: id } });
  };

  return (
    <>
      <Container className="productcard-container justify-content-center">
        <Row xs={1} md={2} lg={4} className="g-4">
          {products.length > 0
            ? products.slice(0, 8).map((product) => (
                <Col key={product.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={product.img}
                      onClick={() => navigateToProduct(product.id)}
                      height="300"
                    />
                    <Card.Body>
                      <div className="add-to-cart">
                        <Card.Title>{product.title}</Card.Title>
                        <button
                          className="btn-add-to-cart"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add To Cart
                        </button>
                      </div>
                      <Card.Text>{product.company}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : null}
        </Row>
      </Container>
      ;
    </>
  );
}

export default ProductCard;
