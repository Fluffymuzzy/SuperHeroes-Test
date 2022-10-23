import axios from "axios";

const getSuperHeroes = async () => {
  const superheroes = await axios.get(`/api/superheroes/`);
  return superheroes.data;
};

const getSuperHero = async (id) => {
  const superhero = await axios.get(`/api/superheroes/${id}`);
  return superhero.data;
};

const superheroesService = {
  getSuperHeroes,
  getSuperHero,
};

export default superheroesService;
