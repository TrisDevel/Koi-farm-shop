import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Nếu bạn cần sử dụng axios cho các API

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children, userId }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Lấy dữ liệu giỏ hàng từ localStorage khi khởi động ứng dụng
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Mỗi khi cartItems thay đổi, cập nhật vào localStorage
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log("Current cart items:", cartItems);
    }, [cartItems]);

    // Hàm thêm sản phẩm vào giỏ hàng
    const addToCart = (product) => {
        const updatedCart = cartItems.some(item => item.id === product.id)
            ? cartItems.map(item =>
                  item.id === product.id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
              )
            : [...cartItems, { ...product, quantity: 1 }];

        setCartItems(updatedCart);
        console.log("Updated cart items:", updatedCart);

        // Gọi API để cập nhật giỏ hàng trên backend (nếu cần)
        // try {
        //    await axios.post(`/api/cart/${userId}`, { cartItems: updatedCart });
        // } catch (error) {
        //    console.error('Error updating cart:', error);
        // }
    };

    const updateQuantity = (productId, newQuantity) => {
        const updatedCart = cartItems.map(item =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCart);
        console.log("Updated cart items after quantity change:", updatedCart);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
        console.log("Updated cart items after removal:", updatedCart);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const value = {
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        calculateTotal,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
