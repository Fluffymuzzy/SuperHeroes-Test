import { Link } from "react-router-dom";

import styles from "./SuperHeroesListItem.module.css";

const SuperHeroesListItem = ({ superheroes }) => {
  return (
    <ul className={styles.container}>
      {superheroes.map(({ nickname, _id, images }) => (
        <li className={styles.item} key={_id}>
          <Link to={`/superheroes/${_id}`}>
            <img className={styles.itemImg} src={images} alt={nickname} />
            <h3>{nickname}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SuperHeroesListItem;
