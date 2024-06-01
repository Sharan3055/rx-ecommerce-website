import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
// import img1 from "./hero1.jpg";
// import img2 from "./hero2.jpg";
// import img3 from "./hero3.jpg";
// import img4 from "../../../../public/images/about_us.png";
import "./MyCarousel.css";
function MyCarousel() {
  return (
    <Carousel className="my-carousel">
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src="/images/hero1.jpg" className="block w-100" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/hero2.jpg" className="block w-100" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/hero3.jpg" className="block w-100" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
