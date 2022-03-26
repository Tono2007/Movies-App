import axios from '../axios';

export function getAllMovieGenres() {
  return axios.get(`/genre/movie/list`);
}
export function getRatedMovies(data) {
  return axios.get(`/movie/now_playing`, data);
}
