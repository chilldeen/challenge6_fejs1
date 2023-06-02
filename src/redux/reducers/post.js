import { FETCH_POPULAR_MOVIES_SUCCESS } from '../actions/post';

const initialState = {
  popularMovies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        popularMovies: action.payload,
      });
    default:
      return state;
  }
};

export default movieReducer;
