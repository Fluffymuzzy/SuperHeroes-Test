import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSuperHero } from "../../store/superheroSlice/superheroSlice";
import Spinner from "../../components/Spinner/Spinner";

import styles from "./HeroPage.module.css";

const HeroPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { superhero, isLoading } = useSelector((state) => state.superhero);

  useEffect(() => {
    dispatch(getSuperHero(id));
  }, [dispatch, id]);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.superhero}>
      <div className={styles.info}>
        <button onClick={() => navigate(-1)}>back</button>
        <button onClick={() => navigate("/")}>edit</button>
        <button onClick={() => navigate("/")}>delete</button>
        <h1 className={styles.nickname}>superhero name: {superhero.nickname}</h1>
        <h3 className={styles.realname}>real name: {superhero.real_name}</h3>
        <h3 className={styles.superpowers}>superpowers: {superhero.superpowers}</h3>
        <h3 className={styles.catch_phrase}>catch phrase: {superhero.catch_phrase}</h3>
        <p className={styles.description}>origin: {superhero.origin_description}</p>
      </div>
      <div>
        <img
          className={styles.image}
          src={superhero.images}
          alt={superhero.nickname}
        />
      </div>
    </div>
  );
};

export default HeroPage;
