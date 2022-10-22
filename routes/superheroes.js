const express = require("express");
const router = express.Router();
const { getSuperHeroes } = require("../controllers/superHeroController");
const path = require("path");

// get all superheroes
router.get("/", getSuperHeroes);
// get superhero by ID
router.get("/:id", (req, res) => res.send("get hero"));
// create superhero
router.post("/", (req, res) => res.send("create hero"));

module.exports = router;
