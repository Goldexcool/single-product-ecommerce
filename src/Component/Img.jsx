import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Img = ({img}) => {
  return (
    <div>
      <div>
        <Image
          src={imageproduct}
          alt=""
          width={500}
          height={500}
          className={styles.img}
        />
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
    </div>
  );
};

export default Img;
