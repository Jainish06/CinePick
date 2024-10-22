import axios from 'axios';

// Set up Axios instance
const API_KEY = '6d03be10a541e2688f064cf8a7c16ddb';
const tmdbAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export const fetchMovies = async () => {
  try {
    const response = await tmdbAPI.get('/movie/popular');
    // console.log(response);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
