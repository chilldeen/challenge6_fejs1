import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { fetchDetail } from './actions/detail';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware.withExtraArgument({ fetchDetail })],
});

export default store;

