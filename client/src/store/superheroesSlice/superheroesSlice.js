import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import superheroesService from "../services/superheroesService";

/* Creating a thunk that will be used to fetch data from the API. */
export const getSuperHeroes = createAsyncThunk(
  "GET_SUPERHEROES",
  async (_, thunkApi) => {
    try {
      return await superheroesService.getSuperHeroes();
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

/* Creating a slice of the state. */
const superheroesSlice = createSlice({
  name: "superheroes",
  initialState: {
    superheroes: null,
    isError: false,
    isLoading: false,
    message: "",
  },

  extraReducers: (builder) => {
    builder.addCase(getSuperHeroes.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getSuperHeroes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.superheroes = action.payload;
    });

    builder.addCase(getSuperHeroes.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.superheroes = null;
    });
  },
});

export default superheroesSlice.reducer;
