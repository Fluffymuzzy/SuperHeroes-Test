const SuperHero = require("../models/superhero");

/**
 * It's an async function that uses the SuperHero model to find all the superheroes in the database and
 * then sends them back to the client.
 * @param req - the request object
 * @param res - the response object
 */
const getSuperHeroes = async (req, res) => {
  try {
    const superheroes = await SuperHero.find();
    res.status(200).json(superheroes);
  } catch (err) {
    res
      .status(500)
      .json({ message: "damn... request error. try again later dude *-*" });
  }
};

/**
 * It's an async function that takes in a request and a response object, and it tries to find a
 * superhero by their id, and if it can't find one, it sends a 400 status code with a message saying
 * "can't find this superhero 0_0".
 * @param req - request
 * @param res - the response object
 */
const getSuperHeroById = async (req, res) => {
  try {
    const superhero = await SuperHero.find({ _id: req.params.id });
    res.status(200).json(superhero);
  } catch (err) {
    res.status(400).json({ message: "can't find this superhero 0_0" });
  }
};

/**
 * It creates a new superhero in the database.
 * @param req - the request object
 * @param res - the response object
 */
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
      message: "it seems like... superhero doesn't want to be created -_-",
    });
  }
};

module.exports = {
  getSuperHeroes,
  createSuperHero,
  getSuperHeroById,
};
