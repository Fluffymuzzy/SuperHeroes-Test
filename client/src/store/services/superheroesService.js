import axios from "axios";

/**
 * It's an async function that returns a promise that resolves to an array of superhero objects.
 * @returns An object with a single method called getSuperHeroes.
 */
const getSuperHeroes = async () => {
  const superheroes = await axios.get("/api/superheroes/");
  return superheroes.data;
};

const superheroesService = {
  getSuperHeroes,
};

export default superheroesService;
