import React from "react";
import Image from "next/image";
import home from "../Images/image-product-1-thumbnail.jpg";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import Products from "../Data/Product";
import "../Styles/Navbar.css";
const Cartitem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <div className="addedtocart">
      <article className="cart_pro">
        <div className="cartimage">
          <Image src={image01} alt="" width={50} height={50} />
        </div>
        <div className="name_title">
          <h3 style={{fontSize: "15px"}}>{title}</h3>
          <div className="quantity">
          <h5>$125.00 x{quantity}  <span style={{color: "black", fontWeight: "700", fontSize: "20px"}}>${totalPrice}</span></h5>
          
          </div>
        </div>
        <div className="trash_delete">
          <i
            className="bx bx-trash-alt cart__amount-trash"
            onClick={deleteItem}
          ></i>
        </div>
      </article>
      <button className="checkout">Checkout</button>
    </div>
  );
};

export default Cartitem;
