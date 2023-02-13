import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDetailsMovie = createAsyncThunk(
  "movieDetailsPost/getdetailsmovie",
  async (rank) => {
    return fetch(
      "http://localhost:3000/results?" +
        new URLSearchParams({
          rank: rank,
        })
    ).then((response) => response.json());
  }
);

const postMovieSlice = createSlice({
  name: "movieDetailsPost",
  initialState: {
    movieDetailsPost: [],
    loading: false,
  },
  extraReducers: {
    [getDetailsMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [getDetailsMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.movieDetailsPost = action.payload;
    },
    [getDetailsMovie.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default postMovieSlice.reducer;
