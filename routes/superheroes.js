const express = require("express");
const router = express.Router();
const {
  getSuperHeroes,
  createSuperHero,
  getSuperHeroById
} = require("../controllers/superHeroController");
const path = require("path");
const multer = require("multer");

// path for downloadable files
const storage = multer.diskStorage({
  destination: "./assets/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({storage});

// get all superheroes
router.get("/", getSuperHeroes);
// get superhero by ID
router.get("/:id", getSuperHeroById);
// create superhero
router.post("/", upload.single("images"), createSuperHero);

module.exports = router;
