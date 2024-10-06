// src/pages/Cart.js
import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { useCart } from '../contexts/CartContext'; // Sử dụng useCart để lấy thông tin giỏ hàng
import { useNavigate } from 'react-router-dom';
// import '../assets/cart.css';

const Cart = () => {
    const { cartItems } = useCart(); // Lấy giỏ hàng từ context
    const navigate = useNavigate();

    // Hàm tính tổng giá trị các sản phẩm trong giỏ
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    // Hàm để quay lại trang chủ
    const handleReturnHome = () => {
        navigate('/');
    };

    return (
        <Container>
            <h1 className='cart-title'>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                // Khi giỏ hàng rỗng
                <Typography variant="h6" className='cart-text'>
                    There are no products in the cart yet.
                    <br/>
                    <Button variant="primary" onClick={handleReturnHome}>
                        Return to Home Page
                    </Button>
                </Typography>
            ) : (
                // Khi có sản phẩm trong giỏ hàng
                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        {/* Hiển thị hình ảnh sản phẩm hoặc ảnh mặc định */}
                                        <img 
                                            src={item.image || '/images/default-product.jpg'} 
                                            alt={item.name} 
                                            style={{ width: '100px' }} 
                                        />
                                        <br />
                                        {item.name}
                                    </td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <h3>Total: ${calculateTotal()}</h3>
                </>
            )}
        </Container>
    );
};

export default Cart;
