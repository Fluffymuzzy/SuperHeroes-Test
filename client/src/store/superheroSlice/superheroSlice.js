import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import superheroesService from "../services/superheroesService";

export const getSuperHero = createAsyncThunk(
  "GET_SUPERHERO",
  async (id, thunkApi) => {
    try {
      return await superheroesService.getSuperHero(id);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

/* Creating a slice of the state. */
const superheroSlice = createSlice({
  name: "superhero",
  initialState: {
    superhero: "",
    isError: false,
    isLoading: false,
    message: "",
  },

  extraReducers: (builder) => {
    builder.addCase(getSuperHero.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getSuperHero.fulfilled, (state, action) => {
      state.isLoading = false;
      state.superhero = action.payload[0];
    });

    builder.addCase(getSuperHero.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.superhero = null;
    });
  },
});

export default superheroSlice.reducer;
