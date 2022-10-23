import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <li>
          <Link className={styles.create} to={`/create`}>Create</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
