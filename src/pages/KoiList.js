import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
<<<<<<< Updated upstream
import { Link } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb";
=======
>>>>>>> Stashed changes
import "../assets/KoiList.css";
import KoiCard from "../components/KoiCard";
import axios from "axios";
import ReactPaginate from "react-paginate";


const KoiList = () => {
  // State for koi cards and filtered koi
  const [cards, setCards] = useState([
    {
      id:"1",
      imgSrc: "w0819t003-260x421.jpg",
      title: "Kin Showa – koi",
      price: "800$",
      breeder: "Kanno Koi Farm",
      sex: "Male",
      bornIn: "2023",
      size: "10.00 inch / 27.5 cm",
      variety: "Kin Showa",
    },
    // ... (other koi cards)
      {
      imgSrc: "w0819t003-260x421.jpg",
      title: "map – koi",
      price: "800$",
      breeder: "Dainichi Koi Farm",
      sex: "Male",
      bornIn: "2023",
      size: "10.00 inch / 27.5 cm",
      variety: "Kin Showa",
    },
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
      title: "map2 – koi",
      price: "800$",
      breeder: "Kanno Koi Farm",
      sex: "Female",
      bornIn: "2023",
      size: "10.00 inch / 27.5 cm",
      variety: "Kin Showa",
    },
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
      title: "Kin Showa – koi",
      price: "800$",
      breeder: "Kanno Koi Farm",
      sex: "Male",
      bornIn: "2023",
      size: "10.00 inch / 27.5 cm",
      variety: "Kin Showa",
    },
    
    
    
  ]);

  const [filteredCards, setFilteredCards] = useState(cards);

  // State for filter inputs
  const [searchText, setSearchText] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedBreeder, setSelectedBreeder] = useState("");
  const [selectedVariety, setSelectedVariety] = useState("");

  // Optional: Fetch from API if needed
  const fetchCardsData = async () => {
    try {
      const response = await axios.get("https://api.example.com/koi-cards"); // Replace with your API URL
      setCards(response.data);
      setFilteredCards(response.data); // Set the initial filtered cards as all cards
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle filter button click
  const handleFilter = () => {
    const filtered = cards.filter((card) => {
      return (
        (searchText === "" || card.title.toLowerCase().includes(searchText.toLowerCase())) &&
        (selectedSex === "" || card.sex === selectedSex) &&
        (selectedBreeder === "" || card.breeder === selectedBreeder) &&
        (selectedVariety === "" || card.variety === selectedVariety)
      );
    });
    setFilteredCards(filtered); // Update filtered cards state
    setCurrentPage(0); // Reset to the first page when filtering
  };

  const ITEMS_PER_PAGE = 12; // Set limit to 12 cards per page
  const [currentPage, setCurrentPage] = useState(0); // Page index starts from 0

  // Get the subset of filtered cards for the current page
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const selectedCards = filteredCards.slice(startIndex, startIndex + ITEMS_PER_PAGE); // Use filtered cards for pagination

  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <>
<<<<<<< Updated upstream
      <Breadcrumb title="High Quality Koi" />
      <div className="container">
=======
      <div className="container">
        {/* Breadcrumb and header */}
        <div className="breadcrumb-wrapper">
          <nav className="woocommerce-breadcrumb">
            <a href="https://www.kodamakoifarm.com/" className="breadcrumb-link">
              Home
            </a>
            /
            <a href="https://www.kodamakoifarm.com/shop/live-koi/" className="breadcrumb-link">
              Search Live Koi Fish for Sale
            </a>
            / High Quality Koi
          </nav>
        </div>
      </div>
      
      <div className="container" >
>>>>>>> Stashed changes
        <header className="products-header">
          <h1 className="products-header__title page-title">High Quality Koi</h1>
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
                    <option value="Dainichi Koi Farm">Dainichi Koi Farm</option>
                    <option value="Kanno Koi Farm">Kanno Koi Farm</option>
                    {/* Add more options as needed */}
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
          <div className="submit-search-container">
            <button className="button submit-search-form" onClick={handleFilter}>
              Filter
            </button>
          </div>
        </div>

        {/* Display filtered koi cards */}
        <Container fluid className="no-padding card-k">
          <Row>
            {selectedCards.map((card, index) => (
              <Col key={index} md={3}>
                <KoiCard
                  id={card.id}
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
