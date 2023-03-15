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

export function getMyFavoriteMovies() {
  return axios.get(`/account/1/favorite/movies`, getSessionParamConfig());
}

export function getAccountStates({ movieId }) {
  return axios.get(`/movie/${movieId}/account_states`, getSessionParamConfig());
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
