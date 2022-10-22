import { createSlice } from "@reduxjs/toolkit";

const superheroesSlice = createSlice({
  name: "superheroes",
  initialState: {
    superheroes: null,
    isError: false,
    isLoading: false,
    message: "",
  },
});

export default superheroesSlice.reducer;
