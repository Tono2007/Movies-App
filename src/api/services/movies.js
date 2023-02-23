import axios from '../axios';

export function getPopularMovies() {
  return axios.get(`/movie/popular`);
}
export function getPlayingMovies() {
  return axios.get(`/movie/now_playing`);
}
export function getRatedMovies() {
  return axios.get(`/movie/top_rated`);
}
export function getUpcomingMovies() {
  return axios.get(`/movie/upcoming`);
}
export function getLatestMovie() {
  return axios.get(`/movie/latest`);
}
export function getSimilarMovies(id) {
  return axios.get(`/movie/${id}/similar`);
}
export function getDiscoverMovies(params) {
  return axios.get(`/discover/movie${params}`);
}
//-------------------------

export function getMovie(id) {
  return axios.get(`/movie/${id}`);
}
export function getMovieTitles(id) {
  return axios.get(`/movie/${id}/alternative_titles`);
}
export function getMovieVideos(id) {
  return axios.get(`/movie/${id}/videos`, {
    params: {
      language: 'en',
    },
  });
}
export function getMovieKeywords(id) {
  return axios.get(`/movie/${id}/keywords`);
}
export function getMovieCredits(id) {
  return axios.get(`/movie/${id}/credits`);
}
export function getMovieImages(id) {
  return axios.get(`/movie/${id}/images`, {
    params: {
      language: 'en',
    },
  });
}
export function getMovieReviews({ idMovie, page, language = 'en' }) {
  return axios.get(`/movie/${idMovie}/reviews`, {
    params: {
      language,
      page,
    },
  });
}
