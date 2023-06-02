import { combineReducers } from 'redux';
import movieReducer from './post';
import auth from './auth';
import detailReducer from './detail';

const rootReducer = combineReducers({
  auth,
  movie: movieReducer,
  detail: detailReducer,
});

export default rootReducer;
