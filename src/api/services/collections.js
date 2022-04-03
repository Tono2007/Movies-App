import axios from '../axios';

export function getCollection(id) {
  return axios.get(`/collection/${id}`);
}
export function getCollectionImages(id) {
  return axios.get(`/collection/${id}/images`);
}
