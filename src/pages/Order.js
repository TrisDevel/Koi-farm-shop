import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Order = () => {
  const [orderForm, setOrderForm] = useState({
    name: '',
    email: '',
    address: '',
    koiType: '',
    quantity: 1
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderForm({ ...orderForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the order data to your backend
    console.log('Order submitted:', orderForm);
    setOrderPlaced(true);
  };

  return (
    <Container className="my-5">
      <h1>Order Koi Fish</h1>
      {orderPlaced ? (
        <Alert variant="success">
          Your order has been placed successfully! We will contact you soon.
        </Alert>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={orderForm.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={orderForm.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              name="address"
              value={orderForm.address}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Koi Type</Form.Label>
            <Form.Control
              as="select"
              name="koiType"
              value={orderForm.koiType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a Koi type</option>
              <option value="kohaku">Kohaku</option>
              <option value="sanke">Sanke</option>
              <option value="showa">Showa</option>
              <option value="butterfly">Butterfly Koi</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={orderForm.quantity}
              onChange={handleInputChange}
              min="1"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Place Order
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default Order;