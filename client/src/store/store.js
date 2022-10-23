import { configureStore } from "@reduxjs/toolkit";
import superheroesSlice from "./superheroesSlice/superheroesSlice";
import superheroSlice from "./superheroSlice/superheroSlice";

export const store = configureStore({
  reducer: {
    superheroes: superheroesSlice,
    superhero: superheroSlice,
  },
});
