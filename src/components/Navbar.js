import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../assets/navbar.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

function CustomNavbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = localStorage.getItem("name");
      if (userData) {
        setUser(userData);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <header className="header text-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="header-info">
            <span style={{ fontWeight: "bold" }}>
              <i className="fa fa-phone"></i> 0372899192
            </span>

            <span style={{ fontWeight: "bold" }}>
              <i className="fa fa-envelope"></i> info@Koiparadise.com
            </span>
          </div>
          <div className="d-flex align-items-center">
            <a href="#" className="text-white mx-2">
              Sign Up
            </a>
            <span style={{ marginRight: "20px" }} className="mx-2">
              <i style={{ color: "#C8D8A1" }} className="fa fa-shopping-cart">
                <a href="/cart"> Cart</a>
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
              {user ? (
                <Nav.Link href="/user-profile">{user}</Nav.Link>
              ) : (
                <Nav.Link href="/login">Login/Register</Nav.Link>
              )}
              <NavDropdown title="Search Koi" id="basic-nav-dropdown">
                <NavDropdown.Item href="/koi">Invidual Koi</NavDropdown.Item>
                <NavDropdown.Item href="/koi">Batch Koi</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#">Auction</Nav.Link> */}
              <NavDropdown title="Consignment" id="basic-nav-dropdown">
                <NavDropdown.Item href="/consignment">
                  Consignment
                </NavDropdown.Item>
                <NavDropdown.Item href="/consignmentPolicy">
                  Consignment Policy
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/faqs">FAQs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
