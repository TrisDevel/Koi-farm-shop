import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import '../assets/koidetail.css'; // Import tệp CSS

const KoiDetails = () => {
  const { id } = useParams();
  // Trong thực tế, bạn sẽ fetch dữ liệu từ API dựa trên id
  const koi = {
    id: id,
    name: "Kohaku Koi",
    image: "/images/kohaku-koi.jpg",
    description:
      "A beautiful Kohaku koi with vibrant red and white coloration.",
    origin: "Japan",
    gender: "Female",
    age: "2 years",
    size: "18 inches",
    breed: "Kohaku",
    personality: "Active and friendly",
    foodAmount: "50 grams per day",
    price: 1000,
  };

  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="./koi-vari.jpg" alt={koi.name} />
              <Card.Body>
                <Card.Title>{koi.name}</Card.Title>
                <Card.Text>{koi.description}</Card.Text>
                <Button variant="primary">Add to Cart - ${koi.price}</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <h2>Koi Details</h2>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Origin:</strong> {koi.origin}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Gender:</strong> {koi.gender}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Age:</strong> {koi.age}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Size:</strong> {koi.size}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Breed:</strong> {koi.breed}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Personality:</strong> {koi.personality}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Food Amount:</strong> {koi.foodAmount}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={12}>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active custom-tab"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Home
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link custom-tab"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link custom-tab"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  Contact
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link custom-tab"
                  id="disabled-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#disabled-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="disabled-tab-pane"
                  aria-selected="false"
                  disabled
                >
                  Disabled
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0"
              >
                Hi
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
              >
                Hello
              </div>
              <div
                className="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabindex="0"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="disabled-tab-pane"
                role="tabpanel"
                aria-labelledby="disabled-tab"
                tabindex="0"
              >
                ...
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KoiDetails;
