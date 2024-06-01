import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./SingleCard.css";

function SingleCard() {
  return (
    <Container className="mt-2 mb-2 scard-flex justify-content-center">
      <Card style={{ width: "18rem", overflow: "hidden" }}>
        <Card.Img
          className="sc-zoomin"
          variant="top"
          src="../images/girls-section.jpg"
        />
        <span className="sc-center position-absolute top-50 start-50 translate-middle">
          Womens
        </span>
      </Card>
      <Card style={{ width: "18rem", overflow: "hidden" }}>
        <Card.Img
          className="sc-zoomin"
          style={{ height: "100%" }}
          variant="top"
          src="../images/sale.jpg"
        />
      </Card>
      <Card style={{ width: "18rem", overflow: "hidden" }}>
        <Card.Img
          className="sc-zoomin"
          variant="top"
          src="../images/boys-section.jpg"
        />
        <span className="sc-center position-absolute top-50 start-50 translate-middle">
          Men's
        </span>
      </Card>
    </Container>
  );
}

export default SingleCard;
