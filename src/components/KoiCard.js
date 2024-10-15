import Card from 'react-bootstrap/Card';
import "../assets/KoiList.css";
import { Link } from 'react-router-dom'; 
import { useCart } from '../contexts/CartContext';
import React, { useState } from "react";

function KoiCard({ id, image, title,price, breeder,sex,bornIn,size,variety}) {

    const { addToCart } = useCart();
    const handleAddToCart = () => {
        console.log("Adding to cart:", { id, image, title, price, breeder, sex, bornIn, size, variety }); // Log product details
        addToCart({ id, image, title, price, breeder, sex, bornIn, size, variety }); // Pass product details to addToCart
    };
    return (
        <Card className='mb-5'>
            <div>
                <Link to={`/koi/${id}`}>
                    <img src={image} alt={title} className="koi-image" />
                </Link>
            </div>
            <Card.Body className='cardlist'>
                <Card.Title className='tittle-name-koi'>{title || 'Card Title'}</Card.Title>
                <Card.Text  className='price-koi '><strong>price:</strong> {price || 'Unknown'}</Card.Text>
                <Card.Text  className='breeder-koi '><strong>Breeder:</strong> {breeder || 'Unknown'}</Card.Text>
                <Card.Text  className='sex-koi '><strong>Sex:</strong> {sex || 'Unknown'}</Card.Text>
                <Card.Text  className='size-koi '><strong>Size:</strong> {size || 'Unknown'}</Card.Text>
                <button onClick={handleAddToCart} className='add-to-cart'  variant="primary">ADD TO CART</button>
            </Card.Body>
        </Card>
    );
}
export default KoiCard;
