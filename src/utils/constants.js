export const constants = {
  name: 'Antonio Ayola',
  avatar: 'https://avatars.githubusercontent.com/u/35477201?v=4',
  profilesUrls: {
    linkedin: 'https://www.linkedin.com/in/antonio-ayola/',
    github: 'https://github.com/Tono2007',
    email: 'antonio.ayola.cortes@gmail.com',
  },
  language: 'es_mx',
  siteData: {
    siteUrl: 'https://movies-app-tono2007.vercel.app/',
    siteRepo: 'https://github.com/Tono2007/Movies-App',
  },
  api: {
    apiUrl: 'https://api.themoviedb.org/3',
    site: 'https://image.tmdb.org/t/p',
    keyV3: process.env.REACT_APP_API_KEY_V3,
    keyV4: process.env.REACT_APP_API_KEY_V4,
  },
};
export default constants;
