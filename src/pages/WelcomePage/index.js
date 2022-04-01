/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
//MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//Components
import PopularMovies from './PopularMovies';
import Banner from '../../components/Banner';
import TopRatedMovies from './TopRatedMovies';
import GenreList from './GenreList';
import LatestMovies from './LatestMovies';
import TvShows from './TvShows';
import BannerMovies from './BannerMovies';

//API
import { getPlayingMovies } from '../../api/services/movies';
import { getAllMovieGenres } from '../../api/services/catalog';
// Swiper
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function WelcomePage() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const responseGenres = await getAllMovieGenres();
        console.log(responseGenres);
        setGenres(responseGenres.data.genres);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    };
    getGenres();
  }, []);

  return (
    <>
      {/* <Stack m="auto" px="4%" spacing={3}></Stack> */}
      {/*       <Banner caption="MoviesAPP" movieBtn movie={movies[1]} genres={genres} />
       */}
      <BannerMovies genres={genres} />
      <PopularMovies />
      <TopRatedMovies />
      <Grid container spacing={0} m="auto" px="4%" my={9}>
        <Grid item xs={9}>
          <LatestMovies />
        </Grid>
        <Grid item xs={3}>
          <GenreList />
        </Grid>
      </Grid>
      <TvShows />
      <h2>Series:</h2>
    </>
  );
}

export default WelcomePage;
