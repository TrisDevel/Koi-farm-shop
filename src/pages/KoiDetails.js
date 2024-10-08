import React, { useState } from "react";
import { Accordion, Container, Row, Col, Card, Button, ListGroup, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { faqsShipping } from "../components/Custom/custom-faqs";
import "../assets/koidetail.css"; // Import tệp CSS
import Breadcrumb from "../components/breadcrumb";
const KoiDetails = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false); // State để quản lý modal

  const koi = {
    id: id,
    name: "Kohaku Koi",
    image: "./koi-care.jpg",
    description: "A beautiful Kohaku koi with vibrant red and white coloration.",
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
    <>
    <Breadcrumb title="Koi Details" />
    <div className="koidetail-container">
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Card style={{ border: "none" }}>
              <Card.Img
                className="img-koi"
                variant="top"
                src="../koi1.jpg"
                alt={koi.name}
                onClick={() => setShowModal(true)} 
                style={{ cursor: "pointer" }} 
              />
              <Card.Body></Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <h2 style={{ fontFamily: 'font-family: Balthazar, Georgia, Times New Roman, serif' }}>{koi.name}</h2>
            <ListGroup variant="flush">
              <ListGroup.Item className="koi-detail-item">
                <strong>Origin:</strong> {koi.origin}
              </ListGroup.Item>
              <ListGroup.Item className="koi-detail-item">
                <strong>Gender:</strong> {koi.gender}
              </ListGroup.Item>
              <ListGroup.Item className="koi-detail-item">
                <strong>Age:</strong> {koi.age}
              </ListGroup.Item>
              <ListGroup.Item className="koi-detail-item">
                <strong>Size:</strong> {koi.size}
              </ListGroup.Item>
              <ListGroup.Item className="koi-detail-item">
                <strong>Breed:</strong> {koi.breed}
              </ListGroup.Item>
              <ListGroup.Item className="koi-detail-item">
                <strong>Personality:</strong> {koi.personality}
              </ListGroup.Item>
              <ListGroup.Item className="koi-detail-item">
                <strong>Food Amount:</strong> {koi.foodAmount}
              </ListGroup.Item>
            </ListGroup>
            <Button className="btn-add-to-cart" variant="primary">
              Add to Cart
            </Button>
            <div className="social-icon">
              <IoLogoFacebook size={30} />
              <FaInstagram size={30} />
              <FaYoutube size={30} />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal hiển thị hình ảnh Koi */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body>
          <img
            src="../koi1.jpg" // Thay đổi đường dẫn nếu cần
            alt={koi.name}
            style={{ width: "100%", height: "auto" }} // Đảm bảo hình ảnh chiếm toàn bộ modal
          />
        </Modal.Body>
      </Modal>

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
                  Description
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
                  Shipping FAQs
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
                  Shipping Koi
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                {koi.description}
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <h2 style={{ margin: '30px 0 30px 0' }}>Shipping FAQs</h2>
                <p style={{ color: '#C54125' }}>PLEASE CONTACT US WITH ANY QUESTIONS BEFORE ORDERING.</p>
                <Accordion defaultActiveKey="0">
                  {faqsShipping.map((faqShipping , index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                      <Accordion.Header>
                        <span style={{ marginRight: "10px" }}>
                          {faqShipping.icon}
                        </span>
                        {faqShipping.question}
                      </Accordion.Header>
                      <Accordion.Body>
                        {faqShipping.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
              <div
                className="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabIndex="0"
              >
                <h2 style={{ marginTop: "30px" }}>Shipping Koi</h2>
                <strong style={{ color: "#C54125" }}>
                  SHIPPING IS CHARGED SEPARATELY AFTER PURCHASE & KOI IS
                  PREPARED FOR DELIVERY.
                  <br />
                </strong>
                <strong style={{ color: "#C54125", marginTop: "20px" }}>
                  PLEASE CONTACT US WITH ANY QUESTIONS BEFORE ORDERING.
                  <br />
                </strong>
                <p>
                  <strong>Important - </strong>All koi shipments need 7–10 days
                  notice prior to shipping in order to stop the feeding and
                  prepare your koi for a safe journey. Kodama Koi Farm has been
                  shipping koi for many years and have learned what works best
                  for a safe delivery of your koi. The shipping formula is not
                  absolute. However, when packing koi, Kodama Koi Farm takes
                  into consideration the condition of the koi, water
                  temperature, delivery time, and so on. Kodama Koi Farm
                  reserves the right to determine how many koi can be shipped in
                  a box.
                </p>
                <p>
                  Our 24 hour koi health guarantee is based on our farm’s
                  packing recommendation for your shipment. Any request to alter
                  the shipping/packing recommendation requires a waiver of the
                  24 hour koi health guarantee to be sent to Kodama Koi Farm via
                  E-mail.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default KoiDetails;