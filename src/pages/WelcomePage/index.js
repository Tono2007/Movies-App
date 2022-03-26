/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
//MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//Components
import SwiperNavigation from '../../components/SwiperNavigation';
import PopularMovies from './PopularMovies';
import Banner from '../../components/Banner';
import TopRatedMovies from './TopRatedMovies';
import GenreList from './GenreList';
import LatestMovies from './LatestMovies';
import TvShows from './TvShows';
//API
import { getPopularMovies } from '../../api/services/movies';
import { getAllMovieGenres } from '../../api/services/catalog';
// Swiper
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
      <BannerSection genres={genres} />
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

function BannerSection({ genres }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getPopularMovies();
        console.log(response);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    };
    getMovies();
  }, []);
  return (
    <Box
      component={Swiper}
      loop
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }}
      pagination={{ clickable: true }}
      sx={{
        '& span.swiper-pagination-bullet': {
          bgcolor: 'primary.light',
        },
        '& .swiper-pagination': {
          mb: 9,
        },
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide component={SwiperSlide} key={movie.id}>
          <Banner caption="MoviesAPP" movieBtn movie={movie} genres={genres} />
        </SwiperSlide>
      ))}
      <SwiperNavigation />
    </Box>
  );
}

export default WelcomePage;
