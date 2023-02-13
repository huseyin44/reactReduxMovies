import { createSlice } from '@reduxjs/toolkit';

const selectMovieCategoryDataSlice = createSlice({
  name: 'selectedMovieCategoryData',
  initialState: {
    data: null
  },
  reducers: {
    setMovieCategorySelectedData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setMovieCategorySelectedData } = selectMovieCategoryDataSlice.actions;

export default selectMovieCategoryDataSlice.reducer;