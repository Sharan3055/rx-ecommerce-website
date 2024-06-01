import React, { useEffect } from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import SingleCard from "../../components/SingleCard/SingleCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import Sale from "../../components/Sale/Sale";
import Footer from "../../components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer, toast } from "react-toastify";
import Testiomonials from "../../components/Testimonials/Testiomonials";
import { Card, Container } from "react-bootstrap";
import CommonQueries from "../../components/CommonQueries/CommonQueries";
import Accordion from "react-bootstrap/Accordion";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  // console.log(location);
  const notify = () =>
    toast.success(
      `Welome Back ${location.state == null ? "user" : location.state.name} 😊`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      }
    );

  // useEffect(() => {
  //   notify();
  // }, []);

  return (
    <>
      {/* <NavBar /> */}
      <ToastContainer />
      <MyCarousel />
      <SingleCard />
      <ProductCard />
      <Sale />
      {/* Testimonials  */}
      <div class="container-lg">
        <div class="row">
          <div class="col-sm-12">
            <div id="myCarousel" class="t-carousel slide" data-ride="carousel">
              <h2 id="testi-monial-heading">
                Customer <b>Testimonials</b>
              </h2>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <Testiomonials
                      img="./images/rupesh.jpg"
                      review='"These shoes are absolute gems! The comfort they provide is
                      unmatched, and the design is effortlessly stylish. From casual
                      outings to long walks, they never disappoint. Highly recommend
                      investing in a pair!""'
                      name="Rupesh Jha"
                      position="Full Stack / Developer"
                    />
                    <Testiomonials
                      img="./images/rupesh.jpg"
                      review='"These shoes are absolute gems! The comfort they provide is
                      unmatched, and the design is effortlessly stylish. From casual
                      outings to long walks, they never disappoint. Highly recommend
                      investing in a pair!""'
                      name="Rupesh Jha"
                      position="Full Stack / Developer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* COMMON QUERIES  */}
      <Container>
        <h2 id="testi-monial-heading">
          Still Any Doubt left ? <b> Answer Is Here </b>
        </h2>
        <Accordion defaultActiveKey="0">
          <CommonQueries
            eventKey={0}
            question=" Is return or exchange allowed if the footwear doesn't fit or meet expectations? 🔄"
            answer="Yes, we offer hassle-free returns or exchanges within [number of days] days of purchase. Your satisfaction is our priority."
          />
          <CommonQueries
            eventKey={1}
            question="Are the products on this website genuine and authentic? 🛡️"
            answer="Absolutely! We guarantee that all the footwear available on our website is 100% genuine and sourced directly from reputable brands and manufacturers."
          />
          <CommonQueries
            eventKey={2}
            question="How can I track my order once it's been placed? 📦"
            answer="Once your order is confirmed, you'll receive a tracking number via email or SMS. You can use this tracking number to monitor the status of your shipment until it reaches your doorstep."
          />
          <CommonQueries
            eventKey={3}
            question="Do you offer international shipping? 🌍 "
            answer="Yes, we offer international shipping to many countries. Shipping costs and delivery times may vary depending on the destination. You can find more details during the checkout process."
          />
          <CommonQueries
            eventKey={4}
            question="Are there any additional charges, such as taxes or customs fees, for international orders? 💸"
            answer="The prices displayed on our website are inclusive of all applicable taxes within your country. However, for international orders, please note that customs duties or import taxes may apply depending on your country's regulations. These charges, if any, are the responsibility of the customer and are not included in the product price or shipping cost."
          />
        </Accordion>
      </Container>
      {/* <Footer /> */}
      {/* <ToastContainer /> */}
    </>
  );
}

export default Home;
