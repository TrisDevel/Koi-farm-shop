import React from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../assets/payment.css'; 
import Breadcrumb from "../components/breadcrumb";


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
             <Breadcrumb title="Shipping Information" />
            <Row>
                <Col md={8}>
                    <Form onSubmit={handleFormSubmit}>
              
                        <h2 className='payment-title'>Shipping Information</h2>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
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
                            <Form.Control type="text" placeholder="Zip Code" required />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='btn'>
                            Continue to Shipping
                        </Button>
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
                                    <td>  <img 
                                            src={item.image || '/images/default-product.jpg'} //sau này bỏ hình dô đây nhóe hoặc lấy api r có hình trong đó
                                            alt={item.name} 
                                            style={{ width: '100px' }} 
                                        />
                                        <br />
                                        {item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td >{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <h6>Subtotal:   <span className="price">${calculateTotal()}</span></h6>
                    <h6>Shipping: <span className="shipping"> Calculate at next step</span></h6>
                    <hr />
                    <h4>Total: <span className="price">${calculateTotal()}</span></h4>
                </Col>
            </Row>
        </Container>
    );
};

export default Payment;