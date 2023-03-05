import axios from '../axios';
import { getSessionId } from '../../utils/helpers/helpers';

export function getAccountDetails() {
  const sessionId = getSessionId();

  const config = {
    header: {
      session_id: sessionId,
    },
  };
  return axios.get(`/account`, config);
}
export function getCollectionImages(id) {
  return axios.get(`/collection/${id}/images`);
}
