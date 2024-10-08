import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Box, Typography, TextField, Checkbox, FormControlLabel } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from "../components/breadcrumb";
import '../assets/contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, phone, message, checked });

        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setChecked(false);
    };

    return (
        <>
        <Breadcrumb title="Contact Us" />       
        <Container>
            <Row className="mt-5">
                <Col md={6}>
                    <Typography variant="h5" color='#212529' className="contact-title">
                        <strong>Contact KOI PARADAISE</strong>
                    </Typography>
                    <Typography variant="body2" color='#212529' className="contact-text">
                        Thank you for visiting our website. We hope to find the perfect Japanese Koi for your pond.
                    </Typography>
                    <Typography variant="body2" color='#212529' className="contact-text">
                        If you have any questions or concerns please call us at:
                        <br /> <span style={{ color: 'red' }}>+84 KOI PARADISE SUPPORT (84-8567-1020)</span>
                        <br /> When you cannot reach us by phone, please contact us via <strong>EMAIL</strong> at:
                        <br /> <strong>info@koiparadise.com</strong>
                    </Typography>
                    <Typography variant="body2" color='#212529' className="contact-text">
                        <span className="hours-title"><strong>Hours of Operation</strong></span>
                        <br /> Monday - Friday: 9:00 AM - 5:00 PM
                        <br /> Saturday: 10:00 AM - 2:00 PM
                        <br /> Sunday: Closed
                    </Typography>
                    <Typography variant="body2" color='#212529' className="contact-text">
                        <span className="farm-title"><strong>Farm Address</strong></span>
                        <br /> Đường D1, Long Thạnh Mỹ,
                        <br /> Quận 9, Thành Phố Thủ Đức,
                        <br /> Thành Phố Hồ Chí Minh
                    </Typography>
                </Col>
                <Col md={6}>
                    <img
                        src="https://japandeluxetours.com/uploads/2017/05/20170502125611_5908e45b4bb09.jpg"
                        alt="Description of the image"
                        style={{ width: '100%', height: '550px', marginBottom: '20px' }}
                    />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={12}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.999999999999!2d106.8073081!3d10.8411329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2sTr%C6%B0%E1%BB%9Dng%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20FPT%20TP.%20HCM!5e0!3m2!1sen!2s!4v1630000000000!5m2!1sen!2s"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </Col>
            </Row>
            <Typography component="h1" variant="h5" className="contact-title" >
                <strong>Contact Us</strong>
            </Typography>
            <Typography variant="body2" color='#212529' className="contact-text">
                Inquiries received from Saturday 2:01 PM to Monday morning will be responded to on Monday.
            </Typography>
            <Typography variant="body2" color='#212529'  className="contact-title" >
                <strong>Quick Reference Links:</strong>
                <br /> <a href="/" style={{ color: 'red', textDecoration: 'none' }}>Home Page</a>
                <br /> <a href="/koi" style={{ color: 'red', textDecoration: 'none' }}>Koi Fish</a>
                <br /> <a href="/order" style={{ color: 'red', textDecoration: 'none' }}>Order Now</a>
                <br /> <a href="/consignment" style={{ color: 'red', textDecoration: 'none' }}>Consignment Info</a>
                <br /> <a href="/contact" style={{ color: 'red', textDecoration: 'none' }}>Contact Us</a>
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate className="mt-3">
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="message"
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Typography variant="body2" color='#767676' className="mt-3">
                    0 of 500 max characters
                </Typography>
                <Typography variant="body2" color='#212529' className="contact-text">
                    Sign Me Up For Special Offers of <strong>KOI PARADISE</strong>
                </Typography>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            color="primary"
                        />
                    }
                    label={<Typography variant="body1" className ='tick'>I want to sign-up to receive special offers</Typography>}
                />
                <Button
                    variant="success"
                    type="submit"
                    style={{marginTop: '5px', marginBottom: '8px', backgroundColor: '#efe9d9', border: '2px solid red', color: 'red' }}
                >
                    Submit
                </Button>
            </Box>

        </Container>
        </>
    );
};

export default Contact;
