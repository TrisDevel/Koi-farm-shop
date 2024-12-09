import React, { useState } from "react"; // Thêm useState
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import "../assets/home.css";
import { Lock, Edit, Search } from "@mui/icons-material";
import axios from "../config/axios"; // Import axios instance

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/email/signup", formData); // Gửi form data đến backend
      if (response.status === 200) {
        setSuccess("Thank you for signing up! Please check your email.");
        setError(null);
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      setSuccess(null);
    }
  };

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
          <Row
            style={{
              backgroundImage: "url(./menu-bg.jpg)",
              padding: "20px 0 20px 0",
            }}
            className="text-center"
          >
            <Col style={{ margin: "15px 0 15 px 0", fontSize: "23px" }}>
              <strong style={{ justifyContent: "center" }}>
                Paradise Koi Farm is not a Store Front. An appointment is needed
                to schedule a tour or order pickup.
              </strong>
              <strong>
                Please call us at (03)-72899192 or email us at{" "}
                <a href="mailto:info@koiparadise.com">
                  info@paradisekoifarm.com
                </a>
              </strong>
            </Col>
          </Row>
          <Row className="mb-5 text-center">
            <Col>
              <div className="banner">
                <div className="banner-content">
                  <h1>
                    Highest Quality Japanese Koi Fish (Nishikigoi) for Sale from
                    Vung Tau, Vietnam
                  </h1>
                  <p>
                    Paradise Koi Farm imports and raises Japanese koi for sale
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
                // onClick={() => setShowVideo(true)} // Mở modal khi nhấn vào video
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
                    posts and updates from the Paradise Koi Farm team.
                  </Card.Text>
                  <p style={{ textAlign: "center", color: "red" }}>
                    <em>"*"</em> indicates required fields
                  </p>
                  <form style={{ padding: "20px" }} onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="firstName">Name *</label>
                      <div className="name-inputs">
                        <input
                          type="text"
                          className="form-control mb-2"
                          label="First"
                          id="firstName"
                          placeholder="First"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                        <input
                          type="text"
                          className="form-control mb-2"
                          label="Last"
                          id="lastName"
                          placeholder="Last"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        className="form-control mb-2"
                        label="Email"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {success && <p style={{ color: "green" }}>{success}</p>}

                    <Button variant="primary" type="submit">
                      Sign up
                    </Button>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
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
          <Col md={2}></Col>
          <Col style={{}} md={4}>
            <Card className="card-blog" style={{ width: "500px" }}>
              <Card.Img className="img-blog" src="./koipack.jpg" />
              <Card.Body>
                <Card.Title className="title-blog">
                  <h2>Small Koi Packs!</h2>
                </Card.Title>
                <div style={{ margin: "10px 0 10px 0" }}></div>
                <Card.Text className="text-blog">
                  It is our pleasure to introduce the <span style={{color:'#C53125'}}>Build a Pack and Kodama's
                  Choice Pack for Small Koi</span>, each with low or even free shipping
                  options! We now offer two types of small koi mixes that vary
                  by size, and variety. Buy our small koi mixes to easily and
                  quickly purchase groups of koi. <br />
                  <br />
                  <span style={{ color: "#C53125" }}>
                    Visit the landing page to learn more about these buying
                    options.
                  </span>
                </Card.Text>
                <Button
                  className="btn-blog"
                  onClick={() => (window.location.href = "/koi")}
                >
                  View all available koi
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingLeft: "100px" }} md={4}>
            <Card className="card-blog" style={{ width: "500px" }}>
              <Card.Img className="img-blog" src="./koioftheweek.jpg" />
              <Card.Body>
                <Card.Title className="title-blog">
                  <h2>Koi Of The Week This Week!</h2>
                </Card.Title>
                <Card.Text className="text-blog">
                  This week I will be showcasing an elegant Sanke from Marudo
                  Koi Farm. Sanke or Sanshoku means three colors in Japanese. So
                  the quality and the balance of the three colors determines the
                  beauty and the value of Koi. If you do not own a Sanke in your
                  pond she is highly recommended.<br/><br/><span style={{color:'#C53125'}}> Click the link button below to
                  learn more about this koi!</span>
                </Card.Text>
                <Button className="btn-blog" onClick={() => (window.location.href = "/koi")}>View Koi</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
