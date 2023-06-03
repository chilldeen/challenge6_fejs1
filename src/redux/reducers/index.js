import { combineReducers } from 'redux';
import movieReducer from './post';
import auth from './auth';
import detailReducer from './detail';
import searchReducer from './search';

const rootReducer = combineReducers({
  auth,
  movie: movieReducer,
  detail: detailReducer,
  search: searchReducer,
});

export default rootReducer;
