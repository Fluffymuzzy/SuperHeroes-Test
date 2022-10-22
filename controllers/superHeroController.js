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
  const errors = {};

  if (!req.body.nickname) {
    errors.nickname = { message: "enter a nickname" };
  }

  if (!req.body.real_name) {
    errors.real_name = { message: "enter a real name" };
  }

  if (!req.body.origin_description) {
    errors.origin_description = { message: "enter a description" };
  }

  if (req.body.origin_description && req.body.origin_description.length > 200) {
    errors.origin_description = { message: "too long description" };
  }

  if (!req.body.superpowers) {
    errors.superpowers = { message: "enter a superpowers" };
  }

  if (!req.body.catch_phrase) {
    errors.catch_phrase = { message: "enter a phrase" };
  }

  if (!req.file) {
    errors.images = { message: "add a picture" };
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

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
