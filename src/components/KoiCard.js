import Card from "react-bootstrap/Card";
import "../assets/KoiList.css";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import Notification from "../components/notification"; // Import component Notification
import "../components/styles/koicard.css";
import React, { useState } from "react";

function KoiCard({ id, image, title, price, breeder, sex, size, type, quantity }) {
  const { addToCart, cartItems } = useCart();
  const [notification, setNotification] = useState(null); // State to manage notification

  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  const isInCart = cartItems.some((item) => item.id === id);

  const handleAddToCart = () => {
    console.log("Adding to cart:", { id, image, title, price, breeder, sex, size, type });
    addToCart({ id, image, title, price, sex, size, type, quantity });

    // Hiển thị thông báo
    setNotification({ message: `Add to cart successfully!`, type: 'success' });

    setTimeout(() => {
      setNotification(null); // Ẩn thông báo sau 3 giây
    }, 3000);
  };

  return (
    <Card style={{ maxHeight: '750px' }} className="mb-5">
      <div>
        <Link to={`/koi/${id}`}>
          <img src={image} alt={title} className="koi-image" />
        </Link>
      </div>
      <Card.Body className="cardlist">
        <Card.Title
          style={{
            fontSize: "1.5rem",
            fontFamily: "Lato, Helvetica, Arial, Lucida, sans-serif",
          }}
          className="tittle-name-koi"
        >
          {title || "Card Title"}
        </Card.Title>
        <Card.Text className="price-koi">
          {price || "Unknown"}$
        </Card.Text>
        <Card.Text className="breeder-koi">
          <strong>Breeder:</strong><span style={{ fontWeight: '520px' }}> {breeder || "Unknown"}</span>
        </Card.Text>
        <Card.Text className="sex-koi">
          <strong className="text-strong">Sex:</strong> {sex || "Unknown"}
        </Card.Text>
        <Card.Text className="size-koi">
          <strong className="text-strong">Size:</strong> {size || "Unknown"} cm
        </Card.Text>

        {type === "invidual" ? (
          <button
            onClick={handleAddToCart}
            className="add-to-cart"
            variant="primary"
            disabled={isInCart}
          >
            {isInCart ? "In Cart" : "ADD TO CART"}
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="add-to-cart"
            variant="primary"
          >
            ADD TO CART
          </button>
        )}
      </Card.Body>

      {/* Hiển thị thông báo nếu có */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)} // Đóng thông báo khi nhấn
        />
      )}
    </Card>
  );
}

export default KoiCard;
