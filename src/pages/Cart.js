import React, { useEffect } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap'; // Thêm Form để sử dụng input
import { Typography } from '@mui/material';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import '../assets/cart.css';
import Breadcrumb from "../components/breadcrumb";

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCart(); // Nhận hàm updateQuantity từ context
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Cart items in Cart component:", cartItems);
    }, [cartItems]);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleQuantityChange = (productId, event) => {
        const newQuantity = parseInt(event.target.value);
        if (newQuantity > 0) {
            updateQuantity(productId, newQuantity); // Cập nhật số lượng
        }
    };

    const handleRemove = (productId) => {
        removeFromCart(productId); // Xóa sản phẩm khỏi giỏ hàng
    };

    return (
        <Container>
            <Breadcrumb title="Your Cart" />
            <h1 className='cart-title'>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <Typography variant="h6" className='cart-text'>
                    There are no products in the cart yet.
                    <br/>
                    <Button variant="primary" onClick={() => navigate('/')}>
                        Return to Home Page
                    </Button>
                </Typography>
            ) : (
                <>
                    <Table striped bordered hover className='table'>
                        <thead className='cart-text'>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody className='cart-text'>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <img 
                                            src={item.image || '/images/default-product.jpg'} //sau này bỏ hình dô đây nhóe hoặc lấy api r có hình trong đó
                                            alt={item.name} 
                                            style={{ width: '100px' }} 
                                        />
                                        <br />
                                        {item.name}
                                    </td>
                                    <td className='price'>${item.price.toFixed(2)}</td>
                                    <td >
                                        {/* Input để người dùng thay đổi số lượng */}
                                        <Form.Control
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(event) => handleQuantityChange(item.id, event)}
                                            style={{ width: '80px' }}
                                        />
                                    </td>
                                    <td className='price'>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td className='button-of-cart'>
                                        {/* Nút xóa sản phẩm */}
                                        <Button 
                                            variant="danger"
                                            onClick={() => handleRemove(item.id)}
                                            style={{ backgroundColor: '#efe9d9', border: '2px solid red', color: 'red' }}

                                        >
                                            X
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <h3 className='cart-total'>Total: ${calculateTotal()}</h3>
                    
                    {/* Nút Checkout */}
                    <Button variant="success" onClick={() => navigate('/paymentinfo')} className='go-to-checkout'
                    >
                        Proceed to Checkout
                    </Button>
                </>
            )}
        </Container>
    );
};

export default Cart;
