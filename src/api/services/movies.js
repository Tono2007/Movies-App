import axios from '../axios';

export function getPopularMovies() {
  return axios.get(`/movie/now_playing`);
}
export function getRatedMovies() {
  return axios.get(`/movie/now_playing`);
}
export function getSimilarMovies(id) {
  return axios.get(`/movie/${id}/similar`);
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
export function getMovieImages(id) {
  return axios.get(`/movie/${id}/images`);
}
