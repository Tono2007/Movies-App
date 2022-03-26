import axios from '../axios';

export function getPopularMovies() {
  return axios.get(`/movie/now_playing`);
}
export function getRatedMovies(data) {
  return axios.get(`/movie/now_playing`, data);
}
