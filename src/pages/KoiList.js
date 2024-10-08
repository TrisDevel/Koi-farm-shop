import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb";
import "../assets/KoiList.css";
import KoiCard from "../components/KoiCard";
import axios from "axios";
import ReactPaginate from 'react-paginate';
const KoiList = () => {
  /*
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
  );*/
  const [cards, setCards] = useState([
    {
      imgSrc: "w0819t003-260x421.jpg",
      title: "Kin Showa – koi",
      price: "800$",
      breeder: "Kanno Koi Farm",
      sex: "Male",
      bornIn: "2023",
      size: "10.00 inch / 27.5 cm",
      variety: "Kin Showa",
    },
    {
      imgSrc: "w0819t003-260x421.jpg",
      title: "Koi Fish 1",
      price: "900%",
      breeder: "Kanno Koi Farm",
      sex: "Male",
      bornIn: "2023",
      size: "10.00 inch / 27.5 cm",
      variety: "Kin Showa",
    },
    {
      imgSrc: "w0819t003-260x421.jpg",
      title: "Koi Fish 1",
      price: "1000$",
      breeder: "Kanno Koi Farm",
      sex: "Male",
      bornIn: "2023",
      size: "10.00 inch / 27.5 cm",
      variety: "Kin Showa",
    },
    {
      imgSrc: "w0819t003-260x421.jpg",
      title: "Koi Fish 1",
      price: "1100$",
      breeder: "Kanno Koi Farm",
      sex: "Male",
      bornIn: "2023",
      size: "10.00 inch / 27.5 cm",
      variety: "Kin Showa",
    },
    {
      imgSrc: "w0819t003-260x421.jpg",
      title: "Koi Fish 1",
      price: "1100$",
      breeder: "Kanno Koi Farm",
      sex: "Male",
      bornIn: "2023",
      size: "10.00 inch / 27.5 cm",
      variety: "Kin Showa",
    },
    {
      imgSrc: "w0819t003-260x421.jpg",
      title: "Koi Fish 1",
      price: "1100$",
      breeder: "Kanno Koi Farm",
      sex: "Male",
      bornIn: "2023",
      size: "10.00 inch / 27.5 cm",
      variety: "Kin Showa",
    },
    {
      imgSrc: "w0819t003-260x421.jpg",
      title: "Koi Fish 1",
      price: "1100$",
      breeder: "Kanno Koi Farm",
      sex: "Male",
      bornIn: "2023",
      size: "10.00 inch / 27.5 cm",
      variety: "Kin Showa",
    },
    {
      imgSrc: "w0819t003-260x421.jpg",
      title: "Koi Fish 1",
      price: "1100$",
      breeder: "Kanno Koi Farm",
      sex: "Male",
      bornIn: "2023",
      size: "10.00 inch / 27.5 cm",
      variety: "Kin Showa",
    },
  ]);

  // Optional: Fetch from API if needed
  const fetchCardsData = async () => {
    try {
      const response = await axios.get("https://api.example.com/koi-cards"); // Replace with your API URL
      setCards(response.data); // Assuming API returns an array of card objects
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //paginate
  const ITEMS_PER_PAGE = 10; // Number of items per page

  
    const [data, setData] = useState([]); // Store your fetched data
    const [currentPage, setCurrentPage] = useState(0); // Current page state
    const [totalPages, setTotalPages] = useState(0); // Total number of pages
  
    // Fetch data from API
    const fetchData = async (page) => {
      try {
        const response = await axios.get(`https://api.example.com/items?page=${page}&limit=${ITEMS_PER_PAGE}`);
        setData(response.data.items); // Assuming response.data.items contains the array of items
        setTotalPages(Math.ceil(response.data.totalCount / ITEMS_PER_PAGE)); // Assuming totalCount gives total items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    // Load data when the component mounts or when currentPage changes
    useEffect(() => {
      fetchData(currentPage + 1); // API page index typically starts at 1
    }, [currentPage]);
  
    // Handle page change
    const handlePageClick = (event) => {
      setCurrentPage(event.selected);
    };
  

  return (
    <>
      <Breadcrumb title="High Quality Koi" />
      <div className="container">
        <header className="products-header">
          <h1 className="products-header__title page-title">
            High Quality Koi
          </h1>
        </header>
        <div className="koi-description container my-5">
          <div className="row">
            <div className="col-md-8 koi-column koi-column-main">
              <strong>Gokujo is a special expression for the Japanese.</strong>
              <p>
                We use Gokujo to describe the highest quality article, time, and
                even a space. Our family is committed to raising the best
                quality koi in the world and only select Japanese Koi from the
                Niigata region. In the past, these carefully raised Gokujo class
                of Koi have been introduced one-by-one, on an off-line request
                basis. We are happy to now have the opportunity to offer you our
                Gokujo class of high-quality koi fish online.
              </p>
              <strong>
                We have Gokujo class Nishikigoi available to buy if shown below
                the search field. If not, please contact us with what you are
                looking for, and we will help find the right koi.
              </strong>
            </div>
            <div className="col-md-4 koi-column koi-column-image">
              <span className="koi-image-wrap">
                <img
                  className="img-fluid koi-image"
                  src="https://www.kodamakoifarm.com/wp-content/uploads/2018/02/g-g-2.jpg"
                  alt="Koi Fish"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="product-search-form">
          <div className="search-heading">Search All Our Available Koi</div>
          <div className="search-box">
            <div className="search-form">
              <div className="text-search-container">
                <div className="search-overlay" />
                <div className="search-inner">
                  <div>
                    <a className="search-button" />
                    <input
                      id="text-search"
                      className="text-input"
                      name="search_text"
                      type="search"
                      placeholder="Search by title"
                    />
                  </div>
                </div>
                <div className="select-inner">
                  <select className="meta-select" name="select_sex">
                    <option value="0">Search by sex</option>
                    <option value="1">Male (348)</option>
                    <option value="2">Female (549)</option>
                    <option value="3">Unknown (245)</option>
                  </select>
                </div>
                <div className="select-inner">
                  <select className="meta-select breeder-select" name="breeder">
                    <option value="0">Search by breeder</option>
                    <option value="dainichi-koi-farm">
                      Dainichi Koi Farm (86)
                    </option>
                    <option value="dainichi-toyota">
                      Dainichi Koi Farm Toyota (1)
                    </option>
                    <option value="hiroi-koi-farm">Hiroi Koi Farm (96)</option>
                    <option value="isa-koi-farm">Isa Koi Farm (39)</option>
                    <option value="izumiya-koi-farm">
                      Izumiya Koi Farm (26)
                    </option>
                    <option value="kaneko-koi-farm">
                      Kaneko Koi Farm (31)
                    </option>
                  </select>
                </div>

                <div className="select-inner">
                  <select className="meta-select variety-select" name="variety">
                    <option value="0">Search by variety</option>
                    <option value="aigoromo">Aigoromo (21)</option>
                    <option value="aka-matsuba">Aka Matsuba (5)</option>
                    <option value="aka-matsuba-ogon">
                      Aka Matsuba Ogon (1)
                    </option>
                    <option value="aragoke">Aragoke (5)</option>
                    <option value="asagi">Asagi (29)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="submit-search-container">
            <button className="button submit-search-form">Filter</button>
          </div>
        </div>
        <div>
          <p className="woocommerce-result-count">
            Showing 1–16 of 133 results
          </p>
          <select
            className="orderby"
            name="orderby"
            defaultValue="date"
            aria-label="Shop order"
          >
            <option value="popularity">Sort by popularity</option>
            <option value="date">Sort by latest</option>
            <option value="price">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
            <option value="auction_sort">Sort by Auction</option>
            <option value="bid_asc">Sort by current bid: Low to high</option>
            <option value="bid_desc">Sort by current bid: High to low</option>
            <option value="auction_end">Sort auction by ending soonest</option>
            <option value="auction_started">
              Sort auction by recently started
            </option>
            <option value="auction_activity">
              Sort auction by most active
            </option>
          </select>
        </div>

        <Container fluid className="no-padding card-k">
          <Row>
            {cards.map((card, index) => (
              <Col key={index} md={3}>
                <KoiCard
                  imgSrc={card.imgSrc}
                  title={card.title}
                  price={card.price}
                  breeder={card.breeder}
                  sex={card.sex}
                  bornIn={card.bornIn}
                  size={card.size}
                  variety={card.variety}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <nav className="woocommerce-pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="→"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={10} // Update with your total page count
        previousLabel="←"
        pageClassName="page-numbers" // Use your existing class
        pageLinkClassName="page-link" // Use your existing class
        previousClassName="page-numbers" // Consistent class
        previousLinkClassName="page-link" // Use your existing class
        nextClassName="page-numbers" // Consistent class
        nextLinkClassName="page-link" // Use your existing class
        breakClassName="page-numbers" // Use your existing class
        breakLinkClassName="page-link" // Use your existing class
        containerClassName="page-numbers" // Optional, if you want a similar structure
        activeClassName="current" // Matches your original active class
      />
    </nav>
      </div>
    </>
  );
};

export default KoiList;
