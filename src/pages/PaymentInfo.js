import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../assets/paymentinfo.css';
import Breadcrumb from "../components/breadcrumb";
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const PaymentInfo = () => {
    const { cartItems, calculateTotal } = useCart(); 
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);

    const handleFormSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            console.log("Processing payment...");
            navigate('/payment'); 
        }
        setValidated(true);
    };

    return (
        <Container>
            <Breadcrumb title="Shipping Information" />
            <Row>
                <Col md={8}>
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                        <h2 className='payment-title'>Shipping Information</h2>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                required
                                pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="1234 Main St" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="zip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Zip Code"
                                required
                                pattern="\d{5}(-\d{4})?"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid 5-digit ZIP code.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                <h6 className="rtn-to-cart">
                                    <ArrowBackIosIcon style={{ fontSize: '20px' }} />
                                    {' '}
                                    <Link to="/cart">Return to Cart</Link>
                                </h6>
                            </Col>
                            <Col md={6} className='btn-to-payment'>
                                <Button variant="primary" type="submit" className='ctn-to-payment' >
                                    Continue to payment
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col md={4}>
                    <h2 className='payment-title'>Order Summary</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr className='payment-summary'>
                                <th>Product</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody className='payment-summary'>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <img 
                                            src={item.image || '/images/default-product.jpg'}
                                            alt={item.name} 
                                            style={{ width: '100px' }} 
                                        />
                                        <br />
                                        {item.name}
                                    </td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="totals">
                        <h6>Subtotal: <span className="price">${calculateTotal()}</span></h6>
                        <h6>Shipping: <span className="shipping">Calculated at next step</span></h6>
                        <hr />
                        <h4>Total: <span className="price">${calculateTotal()}</span></h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PaymentInfo;
