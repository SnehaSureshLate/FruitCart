import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div style={styles.cartContainer}>
      <h1 style={styles.heading}>Your Shopping Cart</h1>
      {cart.items.length === 0 ? (
        <p style={styles.emptyCart}>Your cart is empty.</p>
      ) : (
        cart.items.map((item) => (
          <div key={item.id} style={styles.cartItem}>
            <img src={item.img} alt={item.name} style={styles.itemImage} />
            <div style={styles.itemDetails}>
              <h2 style={styles.itemName}>{item.name}</h2>
              <p style={styles.itemPrice}>Price: ${item.price}</p>
              <p style={styles.itemQuantity}>Quantity: {item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                style={styles.removeButton}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <div style={styles.cartFooter}>
        <h3>Total Items: {cart.totalQuantity}</h3>
        <h3>Total Price: {cart.totalPrice}</h3>
      </div>
    </div>
  );
};

const styles = {
  cartContainer: {
    margin: "20px auto",
    maxWidth: "800px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  emptyCart: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#555",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
    padding: "15px 0",
    marginBottom: "15px",
  },
  itemImage: {
    height: "100px",
    width: "100px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "20px",
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "10px",
  },
  itemPrice: {
    fontSize: "1.2rem",
    color: "#28a745",
    marginBottom: "10px",
  },
  itemQuantity: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "10px",
  },
  removeButton: {
    padding: "8px 15px",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "0.3s",
  },
  removeButtonHover: {
    backgroundColor: "#ff0000",
  },
  cartFooter: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#333",
  },
};

export default Cart;
