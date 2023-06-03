import tmdbApi from "../../api/tmdbApi";


export const setSearchResults = (results) => ({
  type: 'SET_SEARCH_RESULTS',
  payload: results,
});

export const searchMovies = (keyword) => async (dispatch) => {
  try {
    const response = await tmdbApi.search('movie', keyword);
    const results = response.results;
    dispatch(setSearchResults(results));
  } catch (error) {
    console.error('Error searching movies:', error);
  }
};
