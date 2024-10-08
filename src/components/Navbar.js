import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../assets/navbar.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from 'react-router-dom';

function CustomNavbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      // Giả sử thông tin người dùng được lưu trữ trong localStorage
      const userData = localStorage.getItem("username");
      if (userData) {
        setUser(userData); // Không cần JSON.parse nếu đã lưu dưới dạng chuỗi
      }
    };
  
    fetchUser(); // Gọi hàm fetchUser
  }, []); // Thêm mảng phụ thuộc để chạy một lần khi component mount
  

  return (
    <>
      <header className="header text-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="header-info">
            <span style={{fontWeight: 'bold'}}>
              <i className="fa fa-phone"></i> 0372899192
            </span>

            <span style={{fontWeight: 'bold'}}>
              <i className="fa fa-envelope"></i> info@Koiparadise.com
            </span>
          </div>
          <div className="d-flex align-items-center">
            <a href="/contact" className="text-white mx-2">
              Check Out Koi Food
            </a>
            <a href="#" className="text-white mx-2">
              Buy Koi Food Supplies
            </a>
            <a href="#" className="text-white mx-2">
              Wholesale Sign Up
            </a>
            <span style={{marginRight:'20px'}} className="mx-2">
              <i style={{color:'#C8D8A1'}} className="fa fa-shopping-cart">
                <a href="/cart"> Cart
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
            {user ? (
              <Nav.Link href="/user-profile">{user}</Nav.Link> // Sử dụng user trực tiếp
            ) : (
              <Nav.Link href="/login">Login/Register</Nav.Link>
            )}
              <NavDropdown title="Search Koi" id="basic-nav-dropdown">
                <NavDropdown.Item href="/koi">Action</NavDropdown.Item>
                <NavDropdown.Item href="/koi">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="/koi">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/koi">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Auction</Nav.Link>
              <NavDropdown title="Consignment" id="basic-nav-dropdown">
              <NavDropdown.Item href="/consignment">Consignment</NavDropdown.Item>
              <NavDropdown.Item href="consignment-Policy">Consignment Policy</NavDropdown.Item>
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
