import { configureStore } from "@reduxjs/toolkit";
import superheroesSlice from "./superheroesSlice/superheroesSlice";
export const store = configureStore({
  reducer: {
    superheroes: superheroesSlice,
  },
});
