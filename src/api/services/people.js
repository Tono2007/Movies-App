import axios from '../axios';

export function getPerson(id) {
  return axios.get(`/person/${id}`);
}
export function getPersonImages(id) {
  return axios.get(`/person/${id}/images`);
}
export function getPopularPeople() {
  return axios.get(`/person/popular`);
}
export function getLatestPeople() {
  return axios.get(`/person/latest`);
}
