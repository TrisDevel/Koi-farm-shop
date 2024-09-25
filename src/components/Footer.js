import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../assets/footer.css";
const Footer = () => {
  return (
    <>
    <footer className="mt-5 footer-top">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Koi Fish Farm</h5>
            <p>Providing high-quality Japanese koi since 2023</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/koi">Koi for Sale</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>Email: info@koifishfarm.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <div className="icon">
            <img
                className="icon-youtube"
                src="https://www.coolmate.me/images/footer/icon-youtube.svg"
                onClick={() => window.open('https://www.youtube.com/channel/UC9J9f5J9QJnZ9v8Z2b7v9jw')}
                style={{ width: '35px', height: '35px', cursor: 'pointer', margin: '10px' }}
                alt="YouTube"


            />
            <img
                className="icon-facebook"
                src="https://mcdn.coolmate.me/image/June2023/mceclip1_43.png"
                onClick={() => window.open('https://www.facebook.com/Shop-System-Ho-Chi-Minh-Branch-101925154381829')}
                style={{ width: '35px', height: '35px', cursor: 'pointer' }}
                alt="Facebook"

            />
            <img
                className="icon-ig"
                src="https://www.coolmate.me/images/footer/icon-instar.svg"
                onClick={() => window.open('https://www.instagram.com/shop.system.hcm/')}
                style={{ width: '35px', height: '35px', cursor: 'pointer' }}
                alt="Instagram"
            />
            <img
                className="icon-zalo"
                src="https://mcdn.coolmate.me/image/June2023/mceclip2_68.png"
                onClick={() => window.open('https://zalo.me/your-zalo-link')}
                style={{ width: '35px', height: '35px', cursor: 'pointer' }}
                alt="Zalo"
            />
        </div>
          </Col>
        </Row>
      </Container >
    </footer>
    <footer className="footer-bottom">
<Container>
 <Row>
  <Col>
    <p>© 2023 Koi Fish Farm. All rights reserved.</p>
  </Col>
 </Row>
</Container>
    </footer>


    </>
  );


};

export default Footer;