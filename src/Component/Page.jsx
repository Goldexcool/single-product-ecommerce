"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import Image from "next/image";
import styles from "../../src/app/page.module.css";
import imageMinus from "../Images/icon-minus.svg";
import imagePlus from "../Images/icon-plus.svg";
import cart from "../Images/icon-cart.svg";

const Page = (props) => {
  const { id, title, description, image01, price } = props.item;
  const totalQuantity = useSelector((state) => state.cart.totalQuantity ?? 0);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };
  const incrementItem = () => {
    dispatch(cartActions.addItem({ id, title, image01, price }));
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <div>
      <div className={styles.hero_content}>
        <div className={styles.heder_con}>
          <h1>sneaker company</h1>
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>

        <div className={styles.price}>
          <div className={styles.price_discount}>
            <h4>${price}.00</h4>
            <h5>$250.00</h5>
          </div>
          <div className={styles.percent}>
            <h5>50%</h5>
          </div>
        </div>

        <div className={styles.cart_section}>
          <div className={styles.addtocart}>
            <div className={styles.add}>
              <Image
                src={imageMinus}
                alt=""
                width={15}
                height={4}
                onClick={decreaseItem}
                style={{ cursor: "pointer" }}
                // onClick={decreaseItem}
              />
              <p className={styles.dynamic_number}>{totalQuantity}</p>
              <Image
                src={imagePlus}
                alt=""
                width={13}
                height={12}
                onClick={incrementItem}
                style={{ cursor: "pointer" }}
                // onClick={incrementItem}
              />
            </div>
            <div className={styles.add_cart}>
              {/* <Image
                src={cart}
                alt=""
                width={15}
                height={15}
                className={styles.cart_img}
                onClick={addToCart}
                style={{cursor: "pointer"}}
              /> */}
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  className={styles.fill_cart}  fill="#69707D"
                  fill-rule="nonzero"
                />
              </svg>
              <p onClick={addToCart}>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
