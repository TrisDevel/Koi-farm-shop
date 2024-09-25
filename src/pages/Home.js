import React, { useState } from "react"; // Thêm useState
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Modal,
} from "react-bootstrap"; 
import "../assets/home.css";

const Home = () => {
  const [showVideo, setShowVideo] = useState(false); 

  return (
    <Container fluid className="p-0">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "700px", objectFit: "cover" }}
            src="./farm.jpg"
            alt="Koi Pond"
          />
          <div className="overlay" /> 
          <Carousel.Caption className="carousel-caption-custom">
            <h1>Welcome to Koi Paradise</h1>
            <p>The best Japanese koi for sale online and by phone!</p>
            <Button variant="primary" href="/koi">
              <div className="button-text">View Koi for Sale</div>
            </Button>
            <Button variant="outline-light" href="/account/create">
              <div className="button-text">Create Account</div>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="body">
        <Row className="mb-3 text-center">
          <Col style={{marginTop:'20px', fontSize:'23px'}}>
            <strong>
              Kodama Koi Farm is not a Store Front. An appointment is needed to
              schedule a tour or order pickup.
            </strong>
            <strong>
              Please call us at (833)-564-5683 or email us at{" "}
              <a href="mailto:info@koiparadise.com">info@kodamakoifarm.com</a>
            </strong>
          </Col>
        </Row>
        <Row className="mb-5 text-center">
          <Col>
            <div className="banner">
              <div className="banner-content">
                <h1>
                  Highest Quality Japanese Koi Fish (Nishikigoi) for Sale from
                  Niigata, Japan
                </h1>
                <p>
                  Kodama Koi Farm imports and raises Japanese koi for sale only
                  from Niigata, Japan. These beautiful Nishikigoi koi for sale
                  are raised with the best quarantining procedures to provide a
                  safe and positive experience buying live koi fish that are
                  small or jumbo koi. Our family farm uses proven techniques
                  from the Niigata breeders for our koi fish for sale and sells
                  the best koi pond supplies, koi food, educational books, and
                  more to raise beautiful living jewels.
                  <a href="#">Learn more about our family history</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Container className="section-padding body">
        <Row className="mb-5">
          <Col>
            <h2>Discover Our Koi Farm</h2>
            <p>
              We take pride in being one of the leading farms specializing in
              high-quality Koi fish. With over 20 years of experience, we are
              committed to providing you with the healthiest and most beautiful
              Koi.
            </p>
            <img style={{width:'80%'}} src="./koi-farm.jpeg" alt="Koi Farm" className="img-fluid" />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h2>3 Secrets for Buying Koi Fish</h2>
            <p>From the Koi Master, Mamoru Kodama</p>
            <iframe
              width="500"
              height="300"
              src="https://www.youtube.com/embed/jCl9cXZjCAU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onClick={() => setShowVideo(true)} // Mở modal khi nhấn vào video
              style={{ cursor: "pointer" }} // Thay đổi con trỏ khi di chuột
            ></iframe>
            <p>It's best to buy the one chosen from a thousand Koi.</p>
          </Col>
        </Row>

        {/* Modal for Video */}
        <Modal show={showVideo} onHide={() => setShowVideo(false)} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>3 Secrets for Buying Koi Fish</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="100%"
              height="500px" // Đặt chiều cao lớn hơn
              src="https://www.youtube.com/embed/jCl9cXZjCAU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Modal.Body>
        </Modal>

        {/* Featured Sections */}
        <Row className="mb-5">
          <Col md={4}>
            <Card className="h-100">
              <Card.Img variant="top" src="./koi-vari.jpg" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Koi Varieties</Card.Title>
                <Card.Text>
                  Explore our wide range of beautiful koi varieties.
                </Card.Text>
                <Button variant="primary" href="/koi" className="mt-auto">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="./koi-care.jpg" />
              <Card.Body>
                <Card.Title>Koi Care Guide</Card.Title>
                <Card.Text>
                  Learn how to properly care for your koi fish.
                </Card.Text>
                <Button variant="primary" href="/koi-care">
                  Read Guide
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="./koi-food.jpg" />
              <Card.Body>
                <Card.Title>Premium Koi Food</Card.Title>
                <Card.Text>
                  Shop our selection of high-quality koi food.
                </Card.Text>
                <Button variant="primary" href="/shop/food">
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Blog Section */}
        <Row className="mb-5">
          <Col>
            <h2>Blog on Koi Care</h2>
            <p>Share knowledge and experiences on how to care for Koi fish.</p>
            {/* Add blog link here */}
          </Col>
        </Row>

        {/* Newsletter Signup */}
        <Row className="mb-5">
          <Col md={6} className="mx-auto">
            <Card>
              <Card.Body>
                <Card.Title>Sign Up for Our Newsletter</Card.Title>
                <Card.Text>
                  Stay up-to-date with current auctions, promotions, and updates
                  from our team.
                </Card.Text>
                <form>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Last Name"
                    required
                  />
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Enter your email"
                    required
                  />
                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Latest News */}
        <Row className="mb-5">
          <Col>
            <h2>Latest News</h2>
            {/* Add news items here */}
          </Col>
        </Row>

        {/* FAQs */}
        <Row className="mb-5">
          <Col>
            <h2>Frequently Asked Questions</h2>
            {/* Add FAQ items here */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
