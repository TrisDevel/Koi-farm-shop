import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../assets/navbar.css";
import "font-awesome/css/font-awesome.min.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function CustomNavbar() {
  return (
    <>
      <header className="header text-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="header-info">
            <span>
              <i className="fa fa-phone"></i> 0372899192
            </span>

            <span>
              <i className="fa fa-envelope"></i> info@Koiparadise.com
            </span>
          </div>
          <div className="d-flex align-items-center">
            <a href="#" className="text-white mx-2">
              Check Out Koi Food
            </a>
            <a href="#" className="text-white mx-2">
              Buy Koi Food Supplies
            </a>
            <a href="#" className="text-white mx-2">
              Wholesale Sign Up
            </a>
            <span className="mx-2">
              <i className="fa fa-shopping-cart">
                <a href="/cart">Cart
            </a>
              </i>
            </span>
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
              <Nav.Link href="#">Search Koi</Nav.Link>
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
