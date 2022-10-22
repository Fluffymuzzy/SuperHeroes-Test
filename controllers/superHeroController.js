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

const createSuperHero = async (req, res) => {
  try {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
    } = req.body;

    const superhero = await SuperHero.create({
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
    });

    res.status(201).json(superhero);
  } catch (err) {
    res.status(500).json({
      message: "it seems like... superhero doesn't want to be created 0_o",
    });
  }
};

module.exports = {
  getSuperHeroes,
  createSuperHero,
};
