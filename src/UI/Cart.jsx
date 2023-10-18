import React from "react";
import Image from "next/image";
import "../app/page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../store/shopping-cart/cartUiSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  console.log(cartProducts);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  <div className={styles.cart}>
    <i className= "bx bx-x cart__close" id="cart-close" onClick={toggleCart}></i>
    <div className={styles.cartwrapper}>
      <h1>Cart</h1>
      <hr />
      <div className={styles.empty_cart}>
        {cartProducts.length === 0 ? (
          <>
            <h2>Your cart is empty</h2>
          </>
        ) : (
          cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))
        )}
      </div>
    </div>
  </div>;
};

export default Cart;
