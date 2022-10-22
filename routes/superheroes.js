const express = require("express");
const router = express.Router();
const path = require("path");

// get all superheroes
router.get("/", (req, res) => res.send("get all heroes"));
// get superhero by ID
router.get("/:id", (req, res) => res.send("get hero"));
// create superhero
router.post("/", (req, res) => res.send("create hero"));

module.exports = router;
