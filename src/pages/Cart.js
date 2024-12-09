import React, { useEffect } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { Typography } from "@mui/material";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "../assets/cart.css";
import Breadcrumb from "../components/breadcrumb";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Cart items in Cart component:", cartItems);
  }, [cartItems]);

  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total, item) => total + parseFloat(item.price || 0) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const handleQuantityChange = (productId, event, type) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0 && type !== "invidual") {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <Container>
      <Breadcrumb title="Your Cart" />
      <h1 className="cart-title">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <Typography variant="h6" className="cart-text">
          There are no products in the cart yet.
          <br />
          <Button
            style={{ marginTop: "50px" }}
            variant="primary"
            onClick={() => navigate("/")}
          >
            Return to Home Page
          </Button>
        </Typography>
      ) : (
        <>
          <Table striped bordered hover className="table">
            <thead className="cart-text">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="cart-text">
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "100px" }}
                    />
                    <br />
                    <a
                      style={{
                        color: "#C54125",
                        textDecoration: "none",
                        fontWeight: "600",
                      }}
                      href={`/koi/${item.id}`}
                    >
                      {item.title}
                    </a>
                  </td>
                  <td className="price">${item.price}</td>
                  <td>
                    {item.type !== "invidual" ? (
                      <Form.Control
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(event) =>
                          handleQuantityChange(item.id, event, item.type)
                        }
                        style={{ width: "80px" }}
                      />
                    ) : (
                      <span>{item.quantity}</span>
                    )}
                  </td>
                  <td className="price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="button-of-cart">
                    <Button
                      variant="danger"
                      onClick={() => handleRemove(item.id)}
                      style={{
                        backgroundColor: "#efe9d9",
                        border: "2px solid red",
                        color: "red",
                      }}
                    >
                      X
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3 className="cart-total">Total: ${calculateTotal()}</h3>
          <Button
            variant="success"
            onClick={() => navigate("/paymentinfo")}
            className="go-to-checkout"
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
