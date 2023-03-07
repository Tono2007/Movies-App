import axios from '../axios';
import { getSessionId } from '../../utils/helpers/helpers';

export function getAccountDetails(sessionId) {
  if (!sessionId) {
    return {};
  }

  const config = {
    params: {
      session_id: sessionId,
    },
  };
  return axios.get(`/account`, config);
}
export function getMyFavoriteMovies(accountId) {
  return axios.get(`/account/${accountId}/favorite/movies`);
}
