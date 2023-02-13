import { createSlice } from '@reduxjs/toolkit';

const selectMovieDataSlice = createSlice({
  name: 'selectedMovieData',
  initialState: {
    data: null
  },
  reducers: {
    setMovieSelectedData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setMovieSelectedData } = selectMovieDataSlice.actions;

export default selectMovieDataSlice.reducer;