import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Consignment = () => {
  const [consignmentForm, setConsignmentForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    koiType: '',
    koiSize: '',
    koiAge: '',
    consignmentType: 'offline'
  });
  const [requestSent, setRequestSent] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setConsignmentForm({ ...consignmentForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the consignment request to your backend
    console.log('Consignment request submitted:', consignmentForm);
    setRequestSent(true);
  };

  return (
    <Container className="my-5">
      <h1>Koi Consignment</h1>
      {requestSent ? (
        <Alert variant="success">
          Your consignment request has been sent successfully! We will contact you soon to discuss the details.
        </Alert>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={consignmentForm.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={consignmentForm.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phoneNumber"
              value={consignmentForm.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Koi Type</Form.Label>
            <Form.Control
              type="text"
              name="koiType"
              value={consignmentForm.koiType}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Koi Size (inches)</Form.Label>
            <Form.Control
              type="number"
              name="koiSize"
              value={consignmentForm.koiSize}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Koi Age (years)</Form.Label>
            <Form.Control
              type="number"
              name="koiAge"
              value={consignmentForm.koiAge}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Consignment Type</Form.Label>
            <Form.Control
              as="select"
              name="consignmentType"
              value={consignmentForm.consignmentType}
              onChange={handleInputChange}
              required
            >
              <option value="offline">Offline (Normal care)</option>
              <option value="online">Online (For business)</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit Consignment Request
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default Consignment;