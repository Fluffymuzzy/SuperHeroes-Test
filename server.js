const express = require("express");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();
const port = process.env.PORT || 8000;

/* A middleware that parses the body of the request and makes it available on the request object. */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static(__dirname + "/assets"));

app.use("/api/superheroes", require("./routes/superheroes"));

mongoose.connect("mongodb://localhost:27017").then(() => {
  app.listen(port, () => {
    console.log(`god bless it's working on ${port}`);
  });
});
