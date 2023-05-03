import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";

const CartItems = () => {
  const listItems = useSelector((state) => state.cart.listItems);
  
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {listItems.map((item) => (
          <li key={item.id}>
            {""}
            <CartItem
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              total={item.totalPrice}
            />
            {""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
