import React from 'react';
//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
//Components
import MovieCard from '../../components/MovieCard';
//Swiper
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Scrollbar } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

function RelatedMovies({ similarMovies, genres }) {
  return (
    <Box my={3} position="relative">
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h5" mb={0}>
          Peliculas Relacionadas
          <Divider
            variant="middle"
            sx={{ bgcolor: (theme) => theme.palette.primary.dark }}
          />
        </Typography>
      </Stack>
      <Box
        mx="auto"
        pb={5}
        width={{
          xs: 'calc(100% - 85px)',
          sm: 'calc(100% - 100px)',
          xl: 'calc(100% - 200px)',
        }}
        height={{ xs: '550px', md: '500px', xl: '600px' }}
        component={Swiper}
        grabCursor
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Scrollbar]}
        scrollbar={{
          draggable: true,
          dragSize: 100,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1700: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          2000: {
            slidesPerView: 8,
            spaceBetween: 40,
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next__moviePage--relatedMovies',
          prevEl: '.swiper-button-prev__moviePage--relatedMovies',
        }}
        sx={{
          '& .swiper-scrollbar': {
            height: '10px',
            mt: 1,
            mb: '-0px',
            bgcolor: 'rgb(23, 26, 43)',
            '& .swiper-scrollbar-drag:hover': {
              bgcolor: 'primary.dark',
            },
          },
        }}
      >
        {similarMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} genres={genres} />
          </SwiperSlide>
        ))}
      </Box>
      <SwiperNavigation
        classBtns={[
          'swiper-button-prev__moviePage--relatedMovies',
          'swiper-button-next__moviePage--relatedMovies',
        ]}
        zIndex={0}
      />
      {/*   <Grid container spacing={4}>
        {similarMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}

        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <MovieCard />
        </Grid>
      </Grid> */}
    </Box>
  );
}

export default RelatedMovies;
