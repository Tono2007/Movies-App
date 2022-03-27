import axios from '../axios';

export function getPopularMovies() {
  return axios.get(`/movie/now_playing`);
}
export function getRatedMovies() {
  return axios.get(`/movie/now_playing`);
}
export function getMovie(id) {
  return axios.get(`/movie/${id}`);
}
export function getMovieKeywords(id) {
  return axios.get(`/movie/${id}/keywords`);
}
export function getMovieCredits(id) {
  return axios.get(`/movie/${id}/credits`);
}
