import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import '../assets/home.css';
const Home = () => {
  return (
    <Container fluid className="p-0">
      {/* Hero Section */}
      <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: '700px', objectFit: 'cover' }}
                    src="./farm.jpg"
                    alt="Koi Pond"
                />
                <Carousel.Caption className="carousel-caption-custom">
                    <h1>Welcome to Koi Paradise</h1>
                    <p>The best Japanese koi for sale online and by phone!</p>
                    <Button variant="primary" href="/koi">View Koi for Sale</Button>
                    <Button variant="outline-light" href="/account/create">Create Account</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      

      {/* Main Content */}
      <Container className="section-padding">
        {/* Farm Introduction */}
        <Row className="mb-5">
          <Col>
            <h2>Highest Quality Japanese Koi Fish (Nishikigoi) for Sale</h2>
            <p>Our farm imports and raises Japanese koi for sale only from Niigata, Japan. These beautiful Nishikigoi koi for sale are raised with the best quarantining procedures to provide a safe and positive experience buying live koi fish that are small or jumbo koi.</p>
          </Col>
        </Row>

        {/* Featured Sections */}
        <Row className="mb-5">
          <Col md={4}>
            <Card className="h-100">
              <Card.Img variant="top" src="/images/koi-varieties.jpg" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Koi Varieties</Card.Title>
                <Card.Text>Explore our wide range of beautiful koi varieties.</Card.Text>
                <Button variant="primary" href="/koi-varieties" className="mt-auto">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/images/koi-care.jpg" />
              <Card.Body>
                <Card.Title>Koi Care Guide</Card.Title>
                <Card.Text>Learn how to properly care for your koi fish.</Card.Text>
                <Button variant="primary" href="/koi-care">Read Guide</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/images/koi-food.jpg" />
              <Card.Body>
                <Card.Title>Premium Koi Food</Card.Title>
                <Card.Text>Shop our selection of high-quality koi food.</Card.Text>
                <Button variant="primary" href="/shop/food">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Blog Section */}
        <Row className="mb-5">
          <Col>
            <h2>Blog về chăm sóc cá Koi</h2>
            <p>Chia sẻ kiến thức và kinh nghiệm về cách chăm sóc cá Koi.</p>
            {/* Thêm liên kết đến blog */}
          </Col>
        </Row>

        {/* Newsletter Signup */}
        <Row className="mb-5">
          <Col md={6} className="mx-auto">
            <Card>
              <Card.Body>
                <Card.Title>Sign Up for Our Newsletter</Card.Title>
                <Card.Text>Stay up-to-date with current auctions, promotions, and updates from our team.</Card.Text>
                <form>
                  <input type="email" className="form-control mb-2" placeholder="Enter your email" />
                  <Button variant="primary" type="submit">Subscribe</Button>
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