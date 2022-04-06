import axios from '../axios';

export function getPopularTvShows() {
  return axios.get(`/tv/popular`);
}
export function getPlayingTvShows() {
  return axios.get(`/tv/on_the_air`);
}
export function getRatedTvShows() {
  return axios.get(`/tv/top_rated`);
}

export function getLatestTvShow() {
  return axios.get(`/tv/latest`);
}
export function getSimilarTvShows(id) {
  return axios.get(`/tv/${id}/similar`);
}
//-------------------------

export function getTvShow(id) {
  return axios.get(`/tv/${id}`);
}
export function getTvShowTitles(id) {
  return axios.get(`/tv/${id}/alternative_titles`);
}
export function getTvShowVideos(id) {
  return axios.get(`/tv/${id}/videos`, {
    params: {
      language: 'en',
    },
  });
}
export function getTvShowKeywords(id) {
  return axios.get(`/tv/${id}/keywords`);
}
export function getTvShowCredits(id) {
  return axios.get(`/tv/${id}/credits`);
}
export function getTvShowImages(id) {
  return axios.get(`/tv/${id}/images`, {
    params: {
      language: 'en',
    },
  });
}
