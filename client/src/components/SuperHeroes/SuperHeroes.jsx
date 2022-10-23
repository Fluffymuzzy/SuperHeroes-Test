import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuperHeroes } from "../../store/superheroesSlice/superheroesSlice";
import Spinner from "../Spinner/Spinner";
import Wrapper from "../Wrapper/Wrapper";
import SuperHeroesList from "../SuperHeroesList/SuperHeroesList";

import styles from "./SuperHeroes.module.css";

const SuperHeroes = () => {
  const dispatch = useDispatch();
  const { superheroes, isLoading } = useSelector((state) => state.superheroes);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(6);
  const [pageLimit, setPageLimit] = useState(3);
  const [maxPageLimit, setMaxPageLimit] = useState(3);
  const [minPageLimit, setMinPageLimit] = useState(0);

  useEffect(() => {
    dispatch(getSuperHeroes());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const pages = [];
  console.log(superheroes.length);
  for (let i = 1; i <= Math.ceil(superheroes.length / charactersPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * charactersPerPage;
  const indexOfFirstItem = indexOfLastItem - charactersPerPage;
  const currentCharacters = superheroes.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const paginate = pages.map((pageNumber) => {
    if (pageNumber < maxPageLimit + 1 && pageNumber > minPageLimit) {
      return (
        <li
          key={pageNumber}
          id={pageNumber}
          onClick={handleClick}
          className={currentPage === pageNumber ? "active" : null}
        >
          {pageNumber}
        </li>
      );
    } else {
      return null;
    }
  });

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageLimit);
      setMinPageLimit(minPageLimit - pageLimit);
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageLimit);
      setMinPageLimit(minPageLimit + pageLimit);
    }
  };

  return (
    <div>
      <Wrapper className={styles.superHeroesWrapper}>
        {superheroes && <SuperHeroesList superheroes={currentCharacters} />}
      </Wrapper>
      <ul className={styles.pagination}>
        <button
          onClick={handlePrev}
          disabled={currentPage === pages[0] ? true : false}
        >
          Prev
        </button>
        {paginate}
        <button
          onClick={handleNext}
          disabled={currentPage == pages[pages.length - 1] ? true : false}
        >
          Next
        </button>
      </ul>
    </div>
  );
};

export default SuperHeroes;
