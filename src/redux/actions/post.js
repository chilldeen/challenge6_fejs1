import tmdbApi from '../../api/tmdbApi';

export const FETCH_POPULAR_MOVIES_SUCCESS = 'FETCH_POPULAR_MOVIES_SUCCESS';

export const fetchPopularMoviesSuccess = (movies) => ({
  type: FETCH_POPULAR_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchPopularMovies = () => async (dispatch) => {
  try {
    const response = await tmdbApi.getMoviesList('popular');
    const movies = response.results;
    dispatch(fetchPopularMoviesSuccess(movies));
  } catch (error) {
    // Handle error if needed
  }
};