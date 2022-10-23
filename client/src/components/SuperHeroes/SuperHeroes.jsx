import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuperHeroes } from "../../store/superheroesSlice/superheroesSlice";
import Spinner from "../Spinner/Spinner";
import Wrapper from "../Wrapper/Wrapper";
import SuperHero from "../SuperHero/SuperHero";

import styles from "./SuperHeroes.module.css";

const SuperHeroes = () => {
  const dispatch = useDispatch();
  const { superheroes, isLoading } = useSelector((state) => state.superheroes);

  console.log(superheroes);
  useEffect(() => {
    dispatch(getSuperHeroes());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Wrapper className={styles.superHeroesWrapper}>
        {superheroes &&
          superheroes.map((superhero) => (
            <SuperHero key={superhero._id} {...superhero} />
          ))}
      </Wrapper>
    </div>
  );
};

export default SuperHeroes;
