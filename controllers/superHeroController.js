const SuperHero = require("../models/superhero");

const getSuperHeroes = async (req, res) => {
  try {
    const superheroes = await SuperHero.find();
    res.status(200).json(superheroes);
  } catch (err) {
    res
      .status(500)
      .json({ message: "damn... request error. try again later dude :)" });
  }
};

module.exports = {
    getSuperHeroes  
}