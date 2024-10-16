import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from '@mui/material/Slider'; // Import Slider from MUI
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import Breadcrumb from "../components/breadcrumb";
import "../assets/KoiList.css";
import KoiCard from "../components/KoiCard";
import api from "../config/axios"; // Import axios config
import ReactPaginate from "react-paginate";
import RangeSlider from "react-bootstrap-range-slider"; // Import range slider

const KoiList = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedBreeder, setSelectedBreeder] = useState("");
  const [selectedVariety, setSelectedVariety] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [breeders, setBreeders] = useState([]);
  const [minSize, setMinSize] = useState(0); // Trạng thái cho kích thước tối thiểu
  const [maxSize, setMaxSize] = useState(100); // Trạng thái cho kích thước tối đa
  const ITEMS_PER_PAGE = 12;

  useEffect(() => {
    fetchCardsData();
  }, []);

  const fetchCardsData = async () => {
    try {
      const response = await api.get("/invidualKoi/get"); // Replace with actual API endpoint
      setCards(response.data);
      setFilteredCards(response.data); // Initially set filtered cards to all cards
      
      const uniqueBreeders = [...new Set(response.data.map(card => card.breed))];
      setBreeders(uniqueBreeders);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilter = () => {
    const filtered = cards.filter((card) => {
      const cardSize = parseFloat(card.size); // Chuyển đổi kích thước của cá sang số thực
      return (
        (searchText === "" ||
          card.name.toLowerCase().includes(searchText.toLowerCase())) &&
        (selectedSex === "" || card.gender === selectedSex) &&
        (selectedBreeder === "" || card.breed === selectedBreeder) &&
        (selectedVariety === "" || card.variety === selectedVariety) &&
        (cardSize >= minSize && cardSize <= maxSize) // Kiểm tra kích thước
      );
    });
    setFilteredCards(filtered);
    setCurrentPage(0); // Reset to the first page when filtering
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const selectedCards = filteredCards.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
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
          {/* Description Content */}
        </div>

        <div className="product-search-form">
          <div className="search-heading">Search All Our Available Koi</div>
          <div className="search-box">
            <div className="search-form">
              <div className="text-search-container">
                <div className="search-overlay" />
                <div className="search-inner">
                  <div>
                    <input
                      id="text-search"
                      className="text-input"
                      name="search_text"
                      type="search"
                      placeholder="Search by title"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                  </div>
                </div>
                <div className="select-inner">
                  <select
                    className="meta-select"
                    name="select_sex"
                    value={selectedSex}
                    onChange={(e) => setSelectedSex(e.target.value)}
                  >
                    <option value="">Search by sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                  </select>
                </div>
                <div className="select-inner">
                  <select
                    className="meta-select breeder-select"
                    name="breeder"
                    value={selectedBreeder}
                    onChange={(e) => setSelectedBreeder(e.target.value)}
                  >
                    <option value="">Search by breeder</option>
                    {breeders.map((breeder, index) => (
                      <option key={index} value={breeder}>
                        {breeder}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="select-inner">
                  <select
                    className="meta-select variety-select"
                    name="variety"
                    value={selectedVariety}
                    onChange={(e) => setSelectedVariety(e.target.value)}
                  >
                    <option value="">Search by variety</option>
                    <option value="Kin Showa">Kin Showa</option>
                    <option value="Asagi">Asagi</option>
                    {/* Add more options as needed */}
                  </select>
                </div>                
              </div>
            </div>
          </div>

          {/* Thanh trượt cho kích thước */}
          <div  className="size-slider">
            <span className="size-slider-text">{minSize} cm</span>
            <Slider style={{ color: "#666666" }}
              value={[minSize, maxSize]}
              onChange={(event, newValue) => {
                setMinSize(newValue[0]);
                setMaxSize(newValue[1]);
                handleFilter(); // Lọc lại khi thay đổi kích thước
              }}
              valueLabelDisplay="auto"
              min={0}
              max={100}
              marks
            />
            <span className="size-slider-text">{maxSize} cm</span>
          </div>

          <div className="submit-search-container">
            <button
              className="button submit-search-form"
              onClick={handleFilter}
            >
              Filter
            </button>
          </div>
        </div>

        <Container fluid className="no-padding card-k">
          <Row>
            {selectedCards.length > 0 ? (
              selectedCards.map((card) => (
                <Col key={card.id} md={3}>
                  <KoiCard
                    id={card.id}
                    image={card.image}
                    title={card.name}
                    price={card.price}
                    breeder={card.breed}
                    sex={card.gender}
                    size={card.size}
                    type={card.type}
                  />
                </Col>
              ))
            ) : (
              <p className="text-center w-100">
                No koi available at the moment.
              </p>
            )}
          </Row>
        </Container>

        <nav className="woocommerce-pagination">
          <ReactPaginate
            breakLabel="..."
            nextLabel="→"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={Math.ceil(filteredCards.length / ITEMS_PER_PAGE)} // Update with your total page count
            previousLabel="←"
            pageClassName="page-numbers"
            pageLinkClassName="page-link"
            previousClassName="page-numbers"
            previousLinkClassName="page-link"
            nextClassName="page-numbers"
            nextLinkClassName="page-link"
            breakClassName="page-numbers"
            breakLinkClassName="page-link"
            containerClassName="page-numbers"
            activeClassName="current"
          />
        </nav>
      </div>
    </>
  );
};

export default KoiList;
