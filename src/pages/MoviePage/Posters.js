import { constants } from '../../utils/constants';
//
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
//Swiper
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Scrollbar } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageCard from '../../components/ImageCard';

function PostersTab({ imgs }) {
  return (
    <Box position="relative">
      <Divider textAlign="center" sx={{ my: 0 }}>
        <Typography variant="caption" mb={0} fontWeight="400" my={0}>
          Posters
        </Typography>
      </Divider>
      <Box
        mx="auto"
        pb={5}
        my={1}
        width="calc(100% - 100px)"
        height={{ xs: '400px', md: '330px', xl: '500px' }}
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
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1600: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next__moviePage--posters',
          prevEl: '.swiper-button-prev__moviePage--posters',
        }}
        sx={{
          '& .swiper-scrollbar': {
            height: '10px',
            mb: '0',
            bgcolor: 'rgb(23, 26, 43)',
            '& .swiper-scrollbar-drag:hover': {
              bgcolor: 'primary.dark',
            },
          },
        }}
      >
        {imgs?.posters?.map((img, index) => (
          <SwiperSlide key={index}>
            <ImageCard
              img={`${constants.api.site}/w300${img?.file_path}`}
              alt="poster"
            />
          </SwiperSlide>
        ))}
      </Box>
      <SwiperNavigation
        classBtns={[
          'swiper-button-prev__moviePage--posters',
          'swiper-button-next__moviePage--posters',
        ]}
        top="45%"
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

export default PostersTab;
