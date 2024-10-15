import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import Breadcrumb from "../components/breadcrumb";
import "../assets/KoiList.css";
import KoiCard from "../components/KoiCard";
import api from "../config/axios"; // Import axios config
import ReactPaginate from "react-paginate";

const KoiList = () => {
  const [cards, setCards] = useState([]); // Empty initial state
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedSex, setSelectedSex] = useState("");
  const [selectedBreeder, setSelectedBreeder] = useState("");
  const [selectedVariety, setSelectedVariety] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = 12;

  // Fetch koi cards data from API when the component mounts
  useEffect(() => {
    fetchCardsData();
  }, []);

  const fetchCardsData = async () => {
    try {
      const response = await api.get("/invidualKoi/get"); // Replace with actual API endpoint
      setCards(response.data);
      setFilteredCards(response.data); // Initially set filtered cards to all cards
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilter = () => {
    const filtered = cards.filter((card) => {
      return (
        (searchText === "" ||
          card.title.toLowerCase().includes(searchText.toLowerCase())) &&
        (selectedSex === "" || card.sex === selectedSex) &&
        (selectedBreeder === "" || card.breeder === selectedBreeder) &&
        (selectedVariety === "" || card.variety === selectedVariety)
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
