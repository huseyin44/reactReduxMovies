import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovieCategory = createAsyncThunk(
  "movieDetailsPost/getmoviecategory",
  async (genre) => {
    return fetch("http://localhost:3000/results")
      .then((response) => response.json())
      .then((data) => data.filter((movie) => movie.genre.includes(genre)));
  }
);

const postMovieCategorySlice = createSlice({
  name: "movieCategoryPost",
  initialState: {
    movieCategoryPost: [],
    loading: false,
  },
  extraReducers: {
    [getMovieCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [getMovieCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.movieCategoryPost = action.payload;
    },
    [getMovieCategory.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default postMovieCategorySlice.reducer;
