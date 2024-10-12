import React from 'react';
import { Container, Row, Col, Form, Button, Table, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../assets/payment.css';
import Breadcrumb from "../components/breadcrumb";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

const Payment = () => {
    const { cartItems, calculateTotal } = useCart();
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Processing payment...");
        navigate('/order-confirmation');
    };

    return (
        <Container>
            <Breadcrumb title="Checkout - Payment" />
            <Row>
                <Col md={8}>
                    <Form onSubmit={handleFormSubmit}>
                        <h2 className='payment-title'>Payment Method</h2>
                        <Row>
                            <Col md={4}>
                                <Form.Check
                                    type="radio"
                                    id="creditCard"
                                    name="paymentMethod"
                                    label="Credit Card"
                                    className="mb-3"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Check
                                    type="radio"
                                    id="paypal"
                                    name="paymentMethod"
                                    label="PayPal"
                                    className="mb-3"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Check
                                    type="radio"
                                    id="vnPay"
                                    name="paymentMethod"
                                    label="Vn Pay"
                                    className="mb-3"
                                />
                            </Col>
                        </Row>
                        <InputGroup className="mb-3">
                            <FormControl placeholder="Card Number" aria-label="Card Number" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            
                            <FormControl placeholder="First Name" aria-label="First Name" />
                            <FormControl placeholder="Last Name" aria-label="Last Name" />
                        </InputGroup>

                        <InputGroup className="mb-3">
                        <FormControl placeholder="Name on Card" aria-label="Name on Card" />
                        </InputGroup>
                        
                        <InputGroup className="mb-3">
                            <FormControl placeholder="MM/YY" aria-label="Expiration Date" />
                            <FormControl placeholder="CVC" aria-label="CVC" />
                        </InputGroup>
                        <Row>
                            <Col md={8}>
                                <h6>
                                    <ArrowBackIosIcon fontSize="20px" />
                                    {' '}
                                    <Link to="/paymentinfo" className="cp-link">  Return to Shipping Information  </Link>
                                </h6>
                            </Col>
                            <Col md={4} className='btn-to-checkout'>
                                <Button variant="primary" type="submit" className='checkout' onClick={() => navigate('/payment')} >
                                    Checkout
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
                                <th>Price</th>
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
                                            style={{ width: '50px' }}
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
                        <p>Subtotal: <span className="payment-price">${calculateTotal().toFixed(2)}</span></p>
                        <p>Shipping: <span className="payment-shipping">Calculated at next step</span></p>
                        <hr />
                        <h4>Total: <span className="payment-total">${calculateTotal().toFixed(2)}</span></h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Payment;