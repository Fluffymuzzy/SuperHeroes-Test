import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import img from "./img.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>SuperHeroes</h1>
        <p className={styles.desc}>
          Flacko order quarter coke that straight from Sosa man
        </p>
      </div>
      <img src={img} className={styles.img} />
    </div>
  );
};

export default Header;
