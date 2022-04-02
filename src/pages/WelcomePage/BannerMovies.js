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
//API
import { getPlayingMovies } from '../../api/services/movies';
import { getAllMovieGenres } from '../../api/services/catalog';
// Swiper
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function BannerSection({ genres }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getPlayingMovies();
        //console.log(response);
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
        delay: 8000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation={{
        prevEl: '.swiper-button-prev__welcomePage--banner',
        nextEl: '.swiper-button-next__welcomePage--banner',
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
          <Banner
            caption="MoviesAPP"
            movieBtn
            movie={movie}
            id={movie.id}
            genres={genres}
          />
        </SwiperSlide>
      ))}
      <SwiperNavigation
        classBtns={[
          'swiper-button-prev__welcomePage--banner',
          'swiper-button-next__welcomePage--banner',
        ]}
        zIndex={1}
        mx={1}
        top="40%"
      />
    </Box>
  );
}
export default BannerSection;
