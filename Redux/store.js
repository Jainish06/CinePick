import {configureStore} from '@reduxjs/toolkit';
import {shortListSlice} from './reducers';
import { addMovie, removeMovie } from './reducers';

const store = configureStore({
  reducer: {
    shortlist: shortListSlice.reducer,
  },
});

export default store;
