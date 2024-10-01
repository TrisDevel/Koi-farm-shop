import React, { useState } from "react"; // Thêm useState
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import "../assets/home.css";
import { Lock, Edit, Search } from "@mui/icons-material";

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
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
            <Col style={{ marginTop: "20px", fontSize: "17px" }}>
              <strong>
                Kodama Koi Farm is not a Store Front. An appointment is needed
                to schedule a tour or order pickup.
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
                    Kodama Koi Farm imports and raises Japanese koi for sale
                    only from Niigata, Japan. These beautiful Nishikigoi koi for
                    sale are raised with the best quarantining procedures to
                    provide a safe and positive experience buying live koi fish
                    that are small or jumbo koi. Our family farm uses proven
                    techniques from the Niigata breeders for our koi fish for
                    sale and sells the best koi pond supplies, koi food,
                    educational books, and more to raise beautiful living
                    jewels.
                    <a href="#">Learn more about our family history</a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Container className="body">
          {/* <Row style={{marginTop:'0px'}} className="mb-5">
          <Col>
            <div style={{textAlign:'center'}}>
            <img style={{width:'80%'}} src="./koi-farm.jpeg" alt="Koi Farm" className="img-fluid" />
            </div>
          </Col>
        </Row> */}

          <Row className="mb-5">
            <Col className="md-6 mx-auto">
              <h2 style={{ textAlign: "center" }}>
                3 Secrets for Buying Koi Fish From the Koi Master, Mamoru Kodama
              </h2>
              <iframe
                width="600"
                height="350"
                src="https://www.youtube.com/embed/jCl9cXZjCAU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onClick={() => setShowVideo(true)} // Mở modal khi nhấn vào video
                style={{ cursor: "pointer", marginTop: "50px" }} // Thay đổi con trỏ khi di chuột
              ></iframe>
            </Col>
            <Col className="md-6 mx-auto">
              <Card style={{ border: "2px dashed #c3432c" }}>
                <Card.Body>
                  <Card.Title style={{ textAlign: "center", fontSize: "34px" }}>
                    Sign Up For Our Newsletter to Receive 10% Off Koi Food
                    Coupon
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center", fontSize: "16px" }}>
                    Stay up-to-date with current auctions, promotions, new blog
                    posts and updates from the Kodama Koi Farm team.
                  </Card.Text>
                  <p style={{ textAlign: "center", color: "red" }}>
                    <em>"*"</em> indicates required fields
                  </p>
                  <form style={{ padding: "20px" }}>
                    <div className="form-group">
                      <label htmlFor="firstName">Name *</label>
                      <div className="name-inputs">
                        <input
                          type="text"
                          className="form-control mb-2"
                          id="firstName"
                          placeholder="First"
                          required
                        />
                        <input
                          type="text"
                          className="form-control mb-2"
                          id="lastName"
                          placeholder="Last"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        className="form-control mb-2"
                        id="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <Button variant="primary" type="submit">
                      Sign-up
                    </Button>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Modal for Video */}
          {/* <Modal show={showVideo} onHide={() => setShowVideo(false)} size="lg">
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
        </Modal> */}

          {/* <Row className="mb-5">
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
        </Row> */}

          <Row style={{ marginTop: "100px" }} className="mb-5 mid-body">
            <h2>
              How to Get Started and Buy Live Koi Online at Paradise Koi Farm
            </h2>
            <p>
              Sign up for an account on our website to view all koi for sale,
              koi prices, and more koi details. Read our{" "}
              <a href="#">welcome guide</a> and <a href="#">FAQs</a> to learn
              more about how our new website operates. You can buy koi fish
              online or on the phone. Please call us Monday – Friday at:{" "}
              <a href="tel:0327899192">0372899192</a>; When you cannot reach us
              by phone, please contact us via EMAIL at:{" "}
              <a href="mailto:info@koiparadise.com">info@koiparadise.com</a>{" "}
              with any questions. Sign up for wholesale here.
            </p>
          </Row>
          <Row className="text-center mb-5 mid-body">
            <Col>
              <a href="/login">
                <Lock style={{ fontSize: "70px", color: "#C53125" }} />
                <div>Login</div>
              </a>
            </Col>
            <Col>
              <a href="/login">
                <Edit style={{ fontSize: "70px", color: "#C53125" }} />
                <div>Sign Up</div>
              </a>
            </Col>
            <Col>
              <a href="/koi">
                <Search style={{ fontSize: "70px", color: "#C53125" }} />
                <div>View All Koi</div>
              </a>
            </Col>
          </Row>

          {/* Latest News */}
        </Container>
      </Container>
      <Container fluid style={{ backgroundColor: "#f4f0e7", padding: "80px" }}>
        <Row className="mb-5 text-center">
          <Col>
            <h2>Blog on Koi Care</h2>
            <p>Share knowledge and experiences on how to care for Koi fish.</p>
          </Col>
        </Row>
        <Row style={{}}>
          <Col style={{ paddingLeft: "100px" }} md={6}>
            <Card className="card-blog" style={{ width: "500px" }}>
              <Card.Img className="img-blog" src="./koipack.jpg" />
              <Card.Body>
                <Card.Title className="title-blog">
                  <h2>Small Koi Packs!</h2>
                </Card.Title>
                <Card.Text className="text-blog">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="btn-blog">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingLeft: "100px" }} md={6}>
            <Card className="card-blog" style={{ width: "500px" }}>
              <Card.Img className="img-blog" src="./koioftheweek.jpg" />
              <Card.Body>
                <Card.Title className="title-blog">
                <h2>Koi Of The Week This Week!</h2>
                </Card.Title>
                <Card.Text className="text-blog">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="btn-blog">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Col style={{ paddingLeft: "100px" }} md={6}>
            <Card className="card-blog" style={{ width: "500px" }}>
              <Card.Img className="img-blog" src="./koipack.jpg" />
              <Card.Body>
                <Card.Title className="title-blog">
                <h2>Koi Of The Month!</h2>
                </Card.Title>
                <Card.Text className="text-blog">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="btn-blog">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingLeft: "100px" }} md={6}>
            <Card className="card-blog" style={{ width: "500px" }}>
              <Card.Img className="img-blog" src="./koipack.jpg" />
              <Card.Body>
                <Card.Title className="title-blog">
                <h2>Koi Of The Year!</h2>
                </Card.Title>
                <Card.Text className="text-blog">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="btn-blog">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container style={{ padding: "80px" }}>
        <Row className="mb-5">
          <Col>
            <h2>Latest News</h2>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h2>Frequently Asked Questions</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
