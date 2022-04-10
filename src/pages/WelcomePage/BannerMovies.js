/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
//MUI
import Box from '@mui/material/Box';
//Components
import Banner from '../../components/Banner';
import Loader from '../../components/Loader';
//API
import { getPlayingMovies } from '../../api/services/movies';
// Swiper
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function BannerSection({ genres }) {
  const [isLoading, setIsLoading] = useState(true);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const response = await getPlayingMovies();
        //console.log(response);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);
  return isLoading ? (
    <Loader my="20vh" />
  ) : (
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
          mb: { xs: 2, sm: 0 },
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
