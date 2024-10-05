import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { Link } from 'react-router-dom';

const KoiList = () => {
  const [kois, setKois] = useState([]);
  const [filteredKois, setFilteredKois] = useState([]);
  const [filters, setFilters] = useState({
    breeds: [],
    minPrice: 0,
    maxPrice: 5000,
    minSize: 0,
    maxSize: 30
  });

  const breeds = ['Kohaku', 'Sanke', 'Showa', 'Butterfly', 'Ogon'];

  useEffect(() => {
    // Trong thực tế, bạn sẽ fetch dữ liệu từ API
    const fetchedKois = [
      { id: 1, name: 'Kohaku Koi', breed: 'Kohaku', price: 1000, size: 18, image: './koi-care.jpg' },
      { id: 2, name: 'Sanke Koi', breed: 'Sanke', price: 1500, size: 20, image: './koi-care.jpg' },
      { id: 3, name: 'Showa Koi', breed: 'Showa', price: 2000, size: 22, image: './koi-care.jpg' },
      { id: 4, name: 'Butterfly Koi', breed: 'Butterfly', price: 2500, size: 24, image: './koi-care.jpg' },
      { id: 5, name: 'Ogon Koi', breed: 'Ogon', price: 1200, size: 16, image: './koi-care.jpg' },
    ];
    setKois(fetchedKois);
    setFilteredKois(fetchedKois);
  }, []);

  const handleBreedChange = (e) => {
    const { value, checked } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      breeds: checked
        ? [...prevFilters.breeds, value]
        : prevFilters.breeds.filter(breed => breed !== value)
    }));
  };

  const handlePriceChange = (value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      minPrice: value[0],
      maxPrice: value[1]
    }));
  };

  const handleSizeChange = (value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      minSize: value[0],
      maxSize: value[1]
    }));
  };

  const applyFilters = () => {
    let filtered = kois;
    if (filters.breeds.length > 0) {
      filtered = filtered.filter(koi => filters.breeds.includes(koi.breed));
    }
    filtered = filtered.filter(koi => 
      koi.price >= filters.minPrice && 
      koi.price <= filters.maxPrice &&
      koi.size >= filters.minSize &&
      koi.size <= filters.maxSize
    );
    setFilteredKois(filtered);
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setFilteredKois(kois.filter(koi => koi.name.toLowerCase().includes(searchTerm)));
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4">Koi Fish for Sale</h1>
      <Row>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
              <h4>Filters</h4>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Breeds</Form.Label>
                  {breeds.map(breed => (
                    <Form.Check 
                      key={breed}
                      type="checkbox"
                      id={`breed-${breed}`}
                      label={breed}
                      value={breed}
                      onChange={handleBreedChange}
                    />
                  ))}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Price Range (${filters.minPrice} - ${filters.maxPrice})</Form.Label>
                  <RangeSlider
                    value={[filters.minPrice, filters.maxPrice]}
                    onChange={e => handlePriceChange([e.target.value, filters.maxPrice])}
                    min={0}
                    max={5000}
                    step={100}
                  />
                  <RangeSlider
                    value={[filters.minPrice, filters.maxPrice]}
                    onChange={e => handlePriceChange([filters.minPrice, e.target.value])}
                    min={0}
                    max={5000}
                    step={100}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Size Range ({filters.minSize}" - {filters.maxSize}")</Form.Label>
                  <RangeSlider
                    value={[filters.minSize, filters.maxSize]}
                    onChange={e => handleSizeChange([e.target.value, filters.maxSize])}
                    min={0}
                    max={30}
                    step={1}
                  />
                  <RangeSlider
                    value={[filters.minSize, filters.maxSize]}
                    onChange={e => handleSizeChange([filters.minSize, e.target.value])}
                    min={0}
                    max={30}
                    step={1}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Tìm kiếm Koi</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tên Koi"
                    onChange={handleSearchChange}
                  />
                </Form.Group>
                <Button variant="primary" onClick={applyFilters}>Apply Filters</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <Row>
            {filteredKois.map(koi => (
              <Col key={koi.id} md={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={koi.image} />
                  <Card.Body> 
                    <Card.Title>{koi.name}</Card.Title>
                    <Card.Text>
                      Breed: {koi.breed}<br />
                      Price: ${koi.price}<br />
                      Size: {koi.size} inches
                    </Card.Text>
                    <Link to={`/koi/${koi.id}`}>
                      <Button variant="primary">View Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default KoiList;