import axios from '../axios';
import { getSessionId } from '../../utils/helpers/helpers';

const getSessionParamConfig = () => {
  const sessionId = getSessionId();
  if (!sessionId) {
    return {};
  }
  const config = {
    params: {
      session_id: sessionId,
    },
  };
  return config;
};
export async function getAccountDetails() {
  const config = getSessionParamConfig();
  return axios.get(`/account`, config);
}
export function getAccountStates({ movieId }) {
  return axios.get(`/movie/${movieId}/account_states`, getSessionParamConfig());
}

export function getMyFavoriteMovies() {
  return axios.get(`/account/1/favorite/movies`, getSessionParamConfig());
}

export function markMovieFavorite({ movieId, favorite }) {
  return axios.post(
    `/account/null/favorite`,
    {
      media_type: 'movie',
      media_id: movieId,
      favorite,
    },
    getSessionParamConfig(),
  );
}

export function getMyMoviesWatchlist() {
  return axios.get(`/account/null/watchlist/movies`, getSessionParamConfig());
}
export function addMovieToWatchlist({ movieId, watchlist }) {
  const payload = {
    media_type: 'movie',
    media_id: movieId,
    watchlist,
  };
  return axios.post(
    `/account/null/watchlist`,
    payload,
    getSessionParamConfig(),
  );
}

export function getMyRatedMovies() {
  return axios.get(`/account/null/rated/movies`, getSessionParamConfig());
}

export function addMovieRate({ movieId, rate }) {
  const payload = {
    value: rate,
  };
  return axios.post(
    `/movie/${movieId}/rating`,
    payload,
    getSessionParamConfig(),
  );
}

export function deleteMovieRate(movieId) {
  return axios.delete(`/movie/${movieId}/rating`, getSessionParamConfig());
}
