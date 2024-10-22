import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//   shortListedMovies: [],
// };
export const shortListSlice = createSlice({
  name: 'shortList',
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    removeMovie: (state, action) => {
      return state.filter(movie => movie.id !== action.payload.id);
    },
  },
});

export const {addMovie, removeMovie} = shortListSlice.actions;

export default shortListSlice.reducer;
