"use client";
import logo from "../Images/logo.svg";
import Image from "next/image";
import cart from "../Images/icon-cart.svg";
import navImg from "../Images/image-avatar.png";
import menu from "../Images/icon-menu.svg";
import "../Styles/Navbar.css";
import { cartActions } from "../store/shopping-cart/cartSlice";
import close from "../Images/icon-close.svg";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../store/shopping-cart/cartUiSlice";
import CartItem from "../UI/CartItem";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const toogleOn = () => {
    setIsOpen(!isOpen);
  };
  const cartToggle = () => {
    setCartOpen(!cartOpen);
  }
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const totalQuantity = useSelector((state) => state.cart.totalQuantity ?? 0);
  
  const cartProducts = useSelector((state) => state.cart.cartItems);
  console.log(cartProducts);
  return (
    <div>
      <div className="head">
        <header>
          <nav>
            <div className="logo_list">
              <div className="menu_logo">
                <Image
                  src={isOpen ? close : menu}
                  alt=""
                  width={20}
                  height={20}
                  className="menu"
                  onClick={toogleOn}
                />
                <Image src={logo} alt="" width={140} height={30} />
              </div>
              <div className="header_list">
                <ul>
                  <li>Collections</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="images">
              <Image
                src={cart}
                alt=""
                width={30}
                height={30}
                className="cart"
                onClick={cartToggle}
                style={{ cursor: "pointer" }}
              />
              <span className="cart__badge">{totalQuantity}</span>
              <Image
                src={navImg}
                alt=""
                width={40}
                height={40}
                className="navimg"
              />
            </div>
          </nav>
        </header>
        <hr className="hr_line" />
      </div>
      {isOpen && (
        <div className="dropdownmenu">
          <div className="dropdown">
            <Image
              src={isOpen ? close : menu}
              alt=""
              width={20}
              height={20}
              className="menu"
              onClick={toogleOn}
            />
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
      {cartOpen && (
        <div className="cartopen">
        <div className="cartwrapper">
          <h1>Cart</h1>
          <hr className="hr_cart" />
          <div className="empty_cart">
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
      </div>
      )}
       {/* <div className="cartopen">
        <div className="cartwrapper">
          <h1>Cart</h1>
          <hr className="hr_cart" />
          <div className="empty_cart">
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
      </div>  */}
      
    </div>
  );
};

export default Navbar;
