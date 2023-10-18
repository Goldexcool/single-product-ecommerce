"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import imageThumbnail from "../Images/image-product-1.jpg";
import imagepro from "../Images/image-product-1-thumbnail.jpg";
import imagepro1 from "../Images/image-product-2-thumbnail.jpg";
import imagepro2 from "../Images/image-product-3-thumbnail.jpg";
import imagepro3 from "../Images/image-product-4-thumbnail.jpg";
import imageMinus from "../Images/icon-minus.svg";
import imagePlus from "../Images/icon-plus.svg";
import cart from "../Images/icon-cart.svg";
import imageproduct from "../Images/image-product-1.jpg";
import imageproduct1 from "../Images/image-product-2.jpg";
import imageproduct2 from "../Images/image-product-3.jpg";
import imageproduct3 from "../Images/image-product-4.jpg";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
// import { cartActions } from "../store/cartSlice";
import Products from "../Data/Product";
import Page from "../Component/Page";
import { images } from "../../next.config";

// Import Swiper React components

const Home = () => {
  const [img, setImg] = useState([
    {
      id: 1,
      image: imageproduct,
    },
    {
      id: 2,
      image: imageproduct1,
    },
    {
      id: 3,
      image: imageproduct2,
    },
    {
      id: 4,
      image: imageproduct3,
    },
  ]);
const [image, setImage] = useState(false)
  // const targetImg = (e) => {
  //   console.log(e.target)
  // }

  const [select, setSelect] = useState(0);
  const [allProducts, setAllProducts] = useState(Products);

  useEffect(() => {
  const filteredProducts = Products.filter(
    (item) => item.category === "Products"
  );
  setAllProducts(filteredProducts);
}, []);


  return (
    <div className={styles.relative}>
      <main id={styles.main}>
        <div className={styles.hero}>
          
           <div className={styles.hero_wrapper}>
            <Image
              src={img[select].image}
              alt=""
              width={420}
              height={350}
              className={styles.thumbnail}
            />
            <div className={styles.imag_wrapper}>
            {img.map((item, i) => (
              
              <div key={item.id} className={`styles.img ${select === i ? styles.border : ""}`}>
                <Image
                  src={item.image}
                  alt=""
                  width={90}
                  height={70}
                  onClick={()=>setSelect(i)}
                  className={styles.thumb}
                />
              </div>

            ))
            }
            </div>
            {/* <div className={styles.image}>
              <Image
                src={imagepro}
                alt=""
                width={90}
                height={70}
                className={styles.thumb}
              />
              <Image
                src={imagepro1}
                alt=""
                width={90}
                height={70}
                className={styles.thumb}
              />
              <Image
                src={imagepro2}
                alt=""
                width={90}
                height={70}
                className={styles.thumb}
              />
              <Image
                src={imagepro3}
                alt=""
                width={90}
                height={70}
                className={styles.thumb}
              />
            </div> */}
          </div> 
          <div className={styles.hero_content}>
            <div className={styles.heder_con}>
              {allProducts.map((item) => (
                <Page key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </main>
      {/* <div className={styles.image_wrap}>
        <div className={styles.image_wrapper_}>
        <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={ [Pagination, Navigation] }
        className="mySwiper"
      >
        <SwiperSlide>
        <Image
            src={imageproduct}
            alt=""
            width={280}
            height={280}
            className={styles.dynamic_thumb}
          />
        </SwiperSlide>

        <SwiperSlide>
        <Image
            src={imageproduct1}
            alt=""
            width={280}
            height={280}
            className={styles.dynamic_thumb}
          />
        </SwiperSlide>

        <SwiperSlide>
        <Image
            src={imageproduct2}
            alt=""
            width={280}
            height={280}
            className={styles.dynamic_thumb}
          />
        </SwiperSlide>

        <SwiperSlide>
        <Image
            src={imageproduct3}
            alt=""
            width={280}
            height={280}
            className={styles.dynamic_thumb}
          />
        </SwiperSlide>
          
          </Swiper>
        </div>

        <div className={styles.bottom_}>
          <Image
            src={imagepro}
            alt=""
            width={90}
            height={70}
            className={styles.thumb2}
          />
          <Image
            src={imagepro1}
            alt=""
            width={90}
            height={70}
            className={styles.thumb2}
          />
          <Image
            src={imagepro2}
            alt=""
            width={90}
            height={70}
            className={styles.thumb2}
          />
          <Image
            src={imagepro3}
            alt=""
            width={90}
            height={70}
            className={styles.thumb2}
          />
        </div>
      </div> */}
    </div>
  );
}

export default Home;
