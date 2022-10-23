import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuperHeroes } from "../../store/superheroesSlice/superheroesSlice";
const SuperHeroes = () => {
  const dispatch = useDispatch();
  const { superheroes, isLoading } = useSelector((state) => state.superheroes);

  useEffect(() => {
    dispatch(getSuperHeroes());
  }, [dispatch]);

  return <div>SuperHeroes</div>;
};

export default SuperHeroes;
