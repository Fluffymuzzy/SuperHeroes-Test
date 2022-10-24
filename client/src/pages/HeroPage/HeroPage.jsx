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
    <>
      <button onClick={() => navigate(-1)}>back</button>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.img__container}>
            <img
              className={styles.image}
              src={superhero.images}
              alt={superhero.nickname}
            />
          </div>
          <div className={styles.info}>
            <h1 className={styles.nickname}>{superhero.nickname}</h1>
            <li className={styles.list__item}>
              <span className={styles.item__title}>
                real name: {superhero.real_name}
              </span>
            </li>
            <li className={styles.list__item}>
              <span className={styles.item__title}>
                superpowers: {superhero.superpowers}
              </span>
            </li>
            <li className={styles.list__item}>
              <span className={styles.item__title}>
                catch phrase: {superhero.catch_phrase}
              </span>
            </li>
            <li className={styles.list__item}>
              <span className={styles.item__title}>
                origin: {superhero.origin_description}
              </span>
            </li>
            <div className={styles.itemBtns}>
              <button onClick={() => navigate("/")}>edit</button>
              <button onClick={() => navigate("/")}>delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
