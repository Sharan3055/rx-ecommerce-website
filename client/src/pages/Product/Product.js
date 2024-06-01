import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Button from "react-bootstrap/Button";
import "./Product.css";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { useLocation, useNavigate } from "react-router-dom";
import database from "../../Database/Database";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";

function Product() {
  let [cartData, setCartData] = useState([]);
  let [similar, setSimilar] = useState([]);
  let [size, setSize] = useState("");
  let [color, setColor] = useState("");
  const obj = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  // Event handlers for mouse enter and leave
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const defaultId = 110; // Default ID to use when 'id' is not present

  useEffect(() => {
    const productId = obj.state && obj.state.id ? obj.state.id : defaultId;

    axios
      .post("http://localhost:4000/api/products/singleProduct/", {
        id: productId,
      })
      .then((response) => {
        setCartData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [obj.state.id]);

  //similar products
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/products")
      .then((res) => {
        let Sdata = res.data.filter((item) => {
          return item.category === cartData.category;
        });
        console.log(Sdata);
        setSimilar(Sdata);
        // setLoader(false);
      })
      .catch((err) => {
        console.log(err, "error fetching products");
      });
  }, [cartData.category]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    cartData = {
      ...cartData,
      color: color ? color : cartData.color,
      size: size,
    };
    dispatch(addToCart(cartData));
    navigate("/cart");
  };

  const handleAddToCart = () => {
    console.log(color);
    console.log(size);
    cartData = {
      ...cartData,
      color: color ? color : cartData.color,
      size: size,
    };
    console.log(cartData);
    dispatch(addToCart(cartData));
    notify(cartData);
  };

  const notify = (product) =>
    toast("${product.title} Added To Cart", {
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

  const SimliarProdsAddToCart = (product) => {
    dispatch(addToCart(product));
    notify(product);
  };
  //to navigate similar product selected by user but it is not working
  const navigateToProduct = (id) => {
    console.log("clicked", id);
    navigate("/product", { state: { id: id } });
  };

  return (
    <>
      {cartData.length != 0 ? (
        <Container fluid className="product-container">
          <ToastContainer />
          <Row className="">
            <Col className="mycol" lg={5}>
              <Row>
                <Col xs={2} lg={2} className="left-image-gallery">
                  <Row>
                    <Image className="product-image" src={cartData.img} />
                  </Row>
                  <Row>
                    <Image className="product-image" src={cartData.img2} />
                  </Row>
                  <Row>
                    <Image className="product-image" src={cartData.img3} />
                  </Row>
                  <Row>
                    <Image className="product-image" src={cartData.img4} />
                  </Row>
                  <Row>
                    <Image className="product-image" src={cartData.img5} />
                  </Row>
                </Col>
                <Col xs={10} lg={10}>
                  <Image
                    className="product-image main-product-image"
                    src={cartData.img}
                  />
                </Col>
              </Row>
            </Col>
            <Col className="mycol" lg={7}>
              <span className="p-fade">Campus 👟</span>
              <h6>
                Trendy {cartData.color} {cartData.category} {cartData.title} Men
                ({cartData.color})
              </h6>
              <span className="p-special-price">Special price</span>
              <p className="price-para">
                <span>
                  <b>₹{cartData.newPrice}</b>
                </span>
                <span>
                  <del>{cartData.prevPrice}</del>
                </span>
                <span className="p-off">75% off</span>
              </p>
              <div className="p-ratings">
                <span>3.6</span>
                <span>
                  <i class="fa-solid fa-star"></i>
                </span>
              </div>
              <span>17,286 ratings and 1,117 reviews</span>
              <div className="p-available-offers">
                <p>
                  <i class="fa-solid fa-tag"></i>
                  Bank Offer10% off on Bank of Baroda Credit Card and EMI
                  Transactions, up to ₹1500{" "}
                </p>
                <p>
                  <i class="fa-solid fa-tag"></i>
                  Special PriceGet extra 10% off (price inclusive of
                  cashback/coupon)T&C
                </p>
                <p>
                  <i class="fa-solid fa-tag"></i>
                  Bank Offer10% off on Canara Bank Credit Card Transactions, up
                  to ₹1,500 on orders of ₹5,000 and aboveT&C
                </p>
              </div>
              <div className="p-features">
                <div className="flx-dir-col">
                  <i class="fa-solid fa-hand-holding-dollar"></i>
                  <p>Secured Payment</p>
                </div>
                <div className="flx-dir-col">
                  <i class="fa-solid fa-truck-fast"></i>
                  <p>Free Shipping</p>
                </div>
                <div className="flx-dir-col">
                  <i class="fa-solid fa-person-walking-arrow-loop-left"></i>
                  <p>12 Days Return Policy</p>
                </div>
              </div>

              {/* <span>Color </span>
                <div id="white"></div>
                <div id="blue"></div>
                <div id="red"></div>
                <div id="orange"></div>
                <div id="navyblue"></div> */}
              <div className="p-choose-color">
                <span>Color</span>
                <select
                  class="form-control"
                  style={{ width: "200px" }}
                  onChange={(e) => setColor(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select the Color
                  </option>
                  <option value="White">White</option>
                  <option value="Black">Black</option>
                  <option value="Gray">Gray</option>
                  <option value="Blue">Blue</option>
                  <option value="Red">Red</option>
                </select>
              </div>

              {/* <div className="p-size">
                <span>Size</span>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                {/* <p>Size Chart</p> */}
              {/* </div> */}
              <div className="p-size">
                <span>Size</span>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      value="6"
                      onChange={(e) => setSize(e.target.value)}
                    />
                    6
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      value="7"
                      onChange={(e) => setSize(e.target.value)}
                    />
                    7
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      value="8"
                      onChange={(e) => setSize(e.target.value)}
                    />
                    8
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      value="9"
                      onChange={(e) => setSize(e.target.value)}
                    />
                    9
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      value="10"
                      onChange={(e) => setSize(e.target.value)}
                    />
                    10
                  </label>
                </div>
              </div>

              <div className="p-pincode">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>Deliver To</span>
                {/* <input placeholder="Enter Delivery Pincode" /> */}
                <select class="form-control" style={{ width: "200px" }}>
                  <option value="" disabled selected>
                    Select the Pincode
                  </option>
                  <option value="574475">574475</option>
                  <option value="700001">700001</option>
                  <option value="110001">110001</option>
                  <option value="400001">400001</option>
                  <option value="560001">560001</option>
                  <option value="600001">600001</option>
                  <option value="201301">201301</option>
                  <option value="500001">500001</option>
                  <option value="110075">110075</option>
                  <option value="380001">380001</option>
                  <option value="110085">110085</option>
                </select> 
                <button>Check</button>
              </div>
              <div className="p-buy-tocart">
                <button onClick={handleBuyNow}>Buy</button>
                <button onClick={handleAddToCart}>Add To Cart</button>
              </div>
              <div className="content">
                <p>
                  step into a realm of unparalleled comfort and unbridled style
                  with RINO from Campus, the shoes that redefine what it means
                  to stride in style. Feel the indulgence of the vamp upper of
                  these shoes for men. This second-skin comfort ensures your
                  feet are pampered and cradled, making each step a journey of
                  luxury. The Memory Foam Insole offers you with impeccable
                  cushioning and comfort. For the men who are always on the
                  move, RINO is your trusted companion. The lace-up design of
                  these ice blue, sky blue, and white shoes; ensures a secure
                  and snug fit, allowing you to conquer every step with
                  confidence. Experience the Nitrofly Outsole - the magic behind
                  RINO's unstoppable energy. The innovative Nitrofly outsole
                  technology offers better energy return with every step,
                  propelling you forward with each stride. No more worries about
                  loose shoes - it's all about a secure fit for the go-getter in
                  you.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      ) : null}
      <div className="p-similar-Products">
        <p id="similar-title">Check Out Similar Products You May Like :</p>
        <Marquee
          pauseOnHover={!isHovered}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {similar.map((product) => (
            <Card style={{ width: "18rem", marginRight: "10px" }}>
              <Card.Img
                variant="top"
                height="200px"
                src={product.img}
                onClick={() => navigateToProduct(product.id)}
              />
              <Card.Body className="p-similar-card-body">
                <Card.Title>{product.title}</Card.Title>
                <button onClick={() => SimliarProdsAddToCart(product)}>
                  Add To Cart
                </button>
              </Card.Body>
            </Card>
          ))}
          {/* <Card style={{ width: "18rem", marginRight: "10px" }}>
            <Card.Img variant="top" height="200px" src="./images/shoe2.jpg" />
            <Card.Body className="p-similar-card-body">
              <Card.Title>Puma Nuke 🔥</Card.Title>
              <button>Add To Cart</button>
            </Card.Body>
          </Card> */}
          {/* <Card style={{ width: "18rem", marginRight: "10px" }}>
            <Card.Img variant="top" height="200px" src="./images/shoe1.jpg" />
            <Card.Body className="p-similar-card-body">
              <Card.Title>Addidas Black</Card.Title>

              <button>Add To Cart</button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginRight: "10px" }}>
            <Card.Img variant="top" height="200px" src="./images/shoe3.jpeg" />
            <Card.Body className="p-similar-card-body">
              <Card.Title>Reebok Flash</Card.Title>

              <button>Add To Cart</button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginRight: "10px" }}>
            <Card.Img variant="top" height="200px" src="./images/shoe4.jpg" />
            <Card.Body className="p-similar-card-body">
              <Card.Title>Asain Bluma</Card.Title>

              <button>Add To Cart</button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginRight: "10px" }}>
            <Card.Img variant="top" height="200px" src="./images/shoe5.jpg" />
            <Card.Body className="p-similar-card-body">
              <Card.Title>Roadster Street</Card.Title>

              <button>Add To Cart</button>
            </Card.Body>
          </Card> */}
        </Marquee>
      </div>
    </>
  );
}

export default Product;
