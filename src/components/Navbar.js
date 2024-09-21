import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../assets/navbar.css";

function CustomNavbar() {
  const [cartCount, setCartCount] = useState(0);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  return (
    <>
      <header className="header text-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <span>0372899192</span> | <span>info@Koiparadise.com</span>
          </div>
          <div>
            <a href="#" className="text-white mx-2">
              Check Out Koi Food
            </a>
            <a href="#" className="text-white mx-2">
              Buy Koi Food Supplies
            </a>
            <a href="#" className="text-white mx-2">
              Wholesale Sign Up
            </a>
            <a href="#" className="text-white mx-2">
              Careers
            </a>
            <a href="#" className="text-white mx-2">
              {<span className="cart-count">{cartCount}</span>}
            </a>
          </div>
        </div>
      </header>
      <Navbar variant="dark" expand="lg" className="navbar-custom">
        <div className="container">
          <Navbar.Brand href="/">
            <img src="./logo.png" alt="Kodama Koi Farm" height={150} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/login">Login/Register</Nav.Link>
              <Nav.Link href="#">Instructions</Nav.Link>
              <NavDropdown 
                title="Search" 
                id="searchDropdown" 
                show={dropdownOpen1} 
                onMouseEnter={() => setDropdownOpen1(true)} 
                onMouseLeave={() => setDropdownOpen1(false)}
              >
                <NavDropdown.Item href="#">All Fixed Price Koi</NavDropdown.Item>
                <NavDropdown.Item href="#">Kodama Small Koi Packs</NavDropdown.Item>
                <NavDropdown.Item href="#">Taro’s Summer Collection</NavDropdown.Item>
                <NavDropdown.Item href="#">Koi of the week</NavDropdown.Item>
                <NavDropdown.Item href="#">Fixed Price Over $500</NavDropdown.Item>
                <NavDropdown.Item href="#">Fixed Price Under $500</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown 
                title="Fixed Price Koi" 
                id="fixedPriceKoiDropdown" 
                show={dropdownOpen2} 
                onMouseEnter={() => setDropdownOpen2(true)} 
                onMouseLeave={() => setDropdownOpen2(false)}
              >
                <NavDropdown.Item href="#">All Fixed Price Koi</NavDropdown.Item>
                <NavDropdown.Item href="#">Kodama Small Koi Packs</NavDropdown.Item>
                <NavDropdown.Item href="#">Taro’s Summer Collection</NavDropdown.Item>
                <NavDropdown.Item href="#">Koi of the week</NavDropdown.Item>
                <NavDropdown.Item href="#">Fixed Price Over $500</NavDropdown.Item>
                <NavDropdown.Item href="#">Fixed Price Under $500</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Auction</Nav.Link>
              <Nav.Link href="#">Service</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
