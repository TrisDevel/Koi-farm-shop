import React, { useState, useEffect } from "react";
import {
  Accordion,
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Modal,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { faqsShipping } from "../components/Custom/custom-faqs";
import "../assets/koidetail.css";
import { useCart } from "../contexts/CartContext";
import Breadcrumb from "../components/breadcrumb";
import PopupNotification from "../components/PopupNotification";
import api from "../config/axios";

const KoiDetails = () => {
  const { id } = useParams();
  const [koi, setKoi] = useState(null);
  const { addToCart, cartItems } = useCart(); // Lấy cartItems từ useCart
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    fetchKoiDetails();
  }, [id]);

  const fetchKoiDetails = async () => {
    try {
      const response = await api.get(`/invidualKoi/get/${id}`);
      if (response.data) {
        setKoi(response.data);
      } else {
        console.error("No koi data found.");
        setKoi(null);
      }
    } catch (error) {
      console.error("Error fetching koi details:", error);
      setKoi(null);
    }
  };

  const handleAddToCart = () => {
    if (cartItems.some((item) => item.id === koi.id)) {
      // Kiểm tra nếu sản phẩm đã có trong giỏ hàng
      setNotificationMessage(`${koi.name} is already in your cart!`);
    } else {
      addToCart(koi); // Gọi hàm addToCart
      setNotificationMessage(`${koi.name} has been added to your cart!`);
    }
    setShowNotification(true);
  };

  return (
    <>
      <Breadcrumb title="Koi Details" />
      <div className="koidetail-container">
        <Container className="my-5">
          {koi ? (
            <Row>
              <Col md={4}>
                <Card style={{ border: "none" }}>
                  <Card.Img
                    className="img-koi"
                    variant="top"
                    src={koi.image}
                    alt={koi.name}
                    onClick={() => setShowModal(true)}
                    style={{ cursor: "pointer" }}
                  />
                </Card>
              </Col>
              <Col md={8}>
                <h2 style={{fontFamily: 'Balthazar', fontSize: '40px', color: '#333333'}}>{koi.name}</h2>
                <ListGroup variant="flush">
                <ListGroup.Item>
                    <strong className="text-strong"></strong> <span style={{fontSize: '26px', color: '#C54125', padding:'0 10px 0 10px'}}>{koi.price}$</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong className="text-strong">Origin:</strong> {koi.origin}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong className="text-strong">Gender:</strong> {koi.gender}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong className="text-strong">Age:</strong> {koi.age}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong className="text-strong" >Size:</strong> {koi.size} cm
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong className="text-strong" >Breed:</strong> {koi.breed}
                  </ListGroup.Item>
                  {/* <ListGroup.Item>
                    <strong className="text-strong" >Personality:</strong> {koi.personality}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong className="text-strong" >Food Amount:</strong> {koi.foodAmount}
                  </ListGroup.Item> */}
                </ListGroup>
                <Button
                  className="btn-add-to-cart"
                  variant="primary"
                  onClick={handleAddToCart}
                >
                  {cartItems.some((item) => item.id === koi.id)
                    ? "In Cart"
                    : "Add to Cart"}{" "}
                  {/* Thay đổi nội dung nút */}
                </Button>

                <div className="social-icon">
                  <IoLogoFacebook size={30} />
                  <FaInstagram size={30} />
                  <FaYoutube size={30} />
                </div>
              </Col>
            </Row>
          ) : (
            <p>Loading Koi details...</p>
          )}
        </Container>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Body>
            {koi && (
              <img src={koi.image} alt={koi.name} style={{ width: "100%" }} />
            )}
          </Modal.Body>
        </Modal>

        <PopupNotification
          show={showNotification}
          handleClose={() => setShowNotification(false)}
          title="Notification"
          message={notificationMessage}
        />
      </div>

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
                {koi ? (
                  <iframe
                    width="1100"
                    height="700"
                    src={koi.description}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ cursor: "pointer", marginTop: "50px" }}
                  ></iframe>
                ) : (
                  "Loading..."
                )}
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <h2 style={{ margin: "30px 0 30px 0" }}>Shipping FAQs</h2>
                <p style={{ color: "#C54125" }}>
                  PLEASE CONTACT US WITH ANY QUESTIONS BEFORE ORDERING.
                </p>
                <Accordion defaultActiveKey="0">
                  {faqsShipping.map((faqShipping, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                      <Accordion.Header>
                        <span style={{ marginRight: "10px" }}>
                          {faqShipping.icon}
                        </span>
                        {faqShipping.question}
                      </Accordion.Header>
                      <Accordion.Body>{faqShipping.answer}</Accordion.Body>
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
                  shipping koi for many years and has learned what works best
                  for a safe delivery of your koi. The shipping formula is not
                  absolute. However, when packing koi, Kodama Koi Farm takes
                  into consideration the condition of the koi, water
                  temperature, delivery time, and so on. Kodama Koi Farm also
                  factors in the size of the koi, as larger koi require more
                  space and may require additional time for acclimation. <br />
                  <strong style={{ marginTop: "30px" }}>
                    If your koi is large (over 8 inches), we recommend shipping
                    during warmer months (April-October). If your koi is under 8
                    inches, we can ship them year-round.
                  </strong>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default KoiDetails;
