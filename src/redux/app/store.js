import { configureStore } from "@reduxjs/toolkit";
import PostReducers from "../features/moviesSlice";
import SelectMovieReducers from "../features/selectedMovieSlice";
import SelectMovieCategoryReducers from "../features/selectedMovieCategoriSlice";
import MovieDetailsReducers from "../features/detailsMovieSlice";
import MovieCategoryReducers from "../features/movieCategoriesSlice";

export default configureStore({
  reducer: {
    post: PostReducers,
    selectedData: SelectMovieReducers,
    movieDetails: MovieDetailsReducers,
    selectedCategoryData: SelectMovieCategoryReducers,
    movieCategory:MovieCategoryReducers,
  },
});
