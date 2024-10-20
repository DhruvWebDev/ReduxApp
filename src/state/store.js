import { configureStore } from '@reduxjs/toolkit';
import reducers from './Reducer/index';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});
