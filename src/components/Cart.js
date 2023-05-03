import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./Cart.css";
const Cart = () => {

  const dispatch = useDispatch()

  const handleShow=()=>{
    dispatch(cartActions.showProducts())
  }

  const quantity = useSelector(state=> state.cart.totalQuantity)
  return (
    <div onClick={handleShow}  className="cartIcon">
      <h3 >Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
