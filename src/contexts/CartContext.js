// src/contexts/CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import axios để gọi API

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children, userId }) => {
    const [cartItems, setCartItems] = useState([]);

    // Lấy giỏ hàng từ API khi user đăng nhập
    useEffect(() => {
        if (userId) {
            fetchCart(userId);
        }
    }, [userId]);

    const fetchCart = async (userId) => {
        try {
            const response = await axios.get(`/api/cart/${userId}`);
            setCartItems(response.data.cartItems || []);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    const addToCart = async (product) => {
        const updatedCart = cartItems.some(item => item.id === product.id)
            ? cartItems.map(item =>
                  item.id === product.id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
              )
            : [...cartItems, { ...product, quantity: 1 }];

        setCartItems(updatedCart);
        
        // Gọi API để cập nhật giỏ hàng trên backend
        //try {
        //    await axios.post(`/api/cart/${userId}`, { cartItems: updatedCart });
        //} catch (error) {
        //    console.error('Error updating cart:', error);
        //}
    };

    const value = {
        cartItems,
        addToCart,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
