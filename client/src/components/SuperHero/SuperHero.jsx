import { Link } from "react-router-dom";

import styles from "./SuperHero.module.css";

const SuperHero = ({ _id = "", nickname = "", images = "" }) => {
  return (
    <ul className={styles.container}>
      <Link to={`/superheroes${_id}`} className={styles.item}>
        <div className={styles.nickname}>{nickname}</div>
        {images && (
          <img src={images} alt={nickname} className={styles.itemImg} />
        )}
      </Link>
    </ul>
  );
};

export default SuperHero;
