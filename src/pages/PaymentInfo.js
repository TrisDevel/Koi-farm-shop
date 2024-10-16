import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../assets/paymentinfo.css';
import Breadcrumb from "../components/breadcrumb";
import api from '../config/axios';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const PaymentInfo = () => {
    const [userInfo, setUserInfo] = useState({
        fullName: "",
        email: "",
        phone_number: "",
        address: "",
        created_at: "",
    });

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userId = localStorage.getItem("userId");
                if (!userId) throw new Error("User ID not found.");

                const response = await api.get(`/customers/${userId}`);
                console.log("User data:", response.data); // Kiểm tra dữ liệu
                setUserInfo(response.data);
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };

        fetchUserInfo();
    }, []);

    const { cartItems, calculateTotal } = useCart();
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);

    // State để quản lý tùy chọn giấy chứng nhận
    const [addCertificate, setAddCertificate] = useState(false);

    // Hàm tính tổng bao gồm giá của giấy chứng nhận nếu được chọn
    const calculateFinalTotal = () => {
        let total = calculateTotal();
        if (addCertificate) {
            total += 20; // Thêm $20 nếu người dùng chọn giấy chứng nhận
        }
        return total;
    };

    const handleFormSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            console.log("Processing payment...");
            navigate('/payment');
        }
        setValidated(true);
    };

    return (
        <Container>
            <Breadcrumb title="Shipping Information" />
            <Row>
                <Col md={8}>
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                        <h2 className='payment-title'>Shipping Information</h2>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder={userInfo.email}
                                required
                                pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder={userInfo.name} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder={userInfo.address} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="state">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder={userInfo.phone_number} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="zip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Zip Code"
                                required
                                pattern="\d{5}(-\d{4})?"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid 5-digit ZIP code.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                <h6 className="rtn-to-cart">
                                    <ArrowBackIosIcon style={{ fontSize: '20px' }} />
                                    {' '}
                                    <Link to="/cart">Return to Cart</Link>
                                </h6>
                            </Col>
                            <Col md={6} className='btn-to-payment'>
                                <Button variant="primary" type="submit" className='ctn-to-payment'>
                                    Continue to payment
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col md={4}>
                    <h2 className='payment-title'>Order Summary</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr className='payment-summary'>
                                <th>Product</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody className='payment-summary'>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <img 
                                            src={item.image || '/images/default-product.jpg'}
                                            alt={item.name} 
                                            style={{ width: '100px' }} 
                                        />
                                        <br />
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    {/* Thêm nút chọn giấy chứng nhận */}
                    <Form.Group controlId="addCertificate">
                        <Form.Check
                            type="checkbox"
                            label="Add a certificate for an additional $20"
                            checked={addCertificate}
                            onChange={(e) => setAddCertificate(e.target.checked)}
                        />
                    </Form.Group>

                    {/* Mô tả chỉ hiển thị nếu người dùng chọn checkbox */}
                    {addCertificate && (
                        <p>Get an official certificate as proof of purchase, beautifully designed and printed on premium paper.</p>
                    )}

                    {/* Tính tổng tiền bao gồm giấy chứng nhận nếu được chọn */}
                    <div className="totals">
                        <h6>Subtotal: <span className="price">${calculateTotal()}</span></h6>
                        <h6>Shipping: <span className="shipping">Calculated at next step</span></h6>
                        <hr />
                        <h4>Total: <span className="price">${calculateFinalTotal()}</span></h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PaymentInfo;
