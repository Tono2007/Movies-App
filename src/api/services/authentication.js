import axios from '../axios';

export function authByLogin({ username, password, requestToken }) {
  return axios.post(`/authentication/token/validate_with_login`, {
    username,
    password,
    request_token: requestToken,
  });
}
export function getRequestToken() {
  return axios.get(`/authentication/token/new`);
}
export function createSession(requestToken) {
  return axios.post(`/authentication/session/new`, {
    request_token: requestToken,
  });
}
export function deleteSession(sessionId) {
  return axios.delete(`/authentication/session`, {
    data: { session_id: sessionId },
  });
}
