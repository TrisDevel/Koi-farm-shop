import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const KoiDetails = () => {
  const { id } = useParams();
  // Trong thực tế, bạn sẽ fetch dữ liệu từ API dựa trên id
  const koi = {
    id: id,
    name: 'Kohaku Koi',
    image: '/images/kohaku-koi.jpg',
    description: 'A beautiful Kohaku koi with vibrant red and white coloration.',
    origin: 'Japan',
    gender: 'Female',
    age: '2 years',
    size: '18 inches',
    breed: 'Kohaku',
    personality: 'Active and friendly',
    foodAmount: '50 grams per day',
    price: 1000
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={koi.image} alt={koi.name} />
            <Card.Body>
              <Card.Title>{koi.name}</Card.Title>
              <Card.Text>{koi.description}</Card.Text>
              <Button variant="primary">Add to Cart - ${koi.price}</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <h2>Koi Details</h2>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Origin:</strong> {koi.origin}</ListGroup.Item>
            <ListGroup.Item><strong>Gender:</strong> {koi.gender}</ListGroup.Item>
            <ListGroup.Item><strong>Age:</strong> {koi.age}</ListGroup.Item>
            <ListGroup.Item><strong>Size:</strong> {koi.size}</ListGroup.Item>
            <ListGroup.Item><strong>Breed:</strong> {koi.breed}</ListGroup.Item>
            <ListGroup.Item><strong>Personality:</strong> {koi.personality}</ListGroup.Item>
            <ListGroup.Item><strong>Food Amount:</strong> {koi.foodAmount}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default KoiDetails;