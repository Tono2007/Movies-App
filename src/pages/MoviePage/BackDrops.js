import { constants } from '../../utils/constants';
//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
//Components
import ImageCard from '../../components/ImageCard';
//Swipwer
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Scrollbar } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

function BackDropsTab({ imgs }) {
  return (
    <Box position="relative">
      <Divider textAlign="center" sx={{ my: 0 }}>
        <Typography variant="caption" mb={0} fontWeight="400" my={0}>
          Fondos
        </Typography>
      </Divider>
      <Box
        mx="auto"
        pb={5}
        my={1}
        width={{
          xs: 'calc(100% - 85px)',
          sm: 'calc(100% - 100px)',
          xl: 'calc(100% - 200px)',
        }}
        height={{ xs: '200px', sm: '330px' }}
        component={Swiper}
        grabCursor
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        /* spaceBetween={30}
        slidesPerView={2} */
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Scrollbar]}
        scrollbar={{
          draggable: true,
          dragSize: 100,
        }}
        navigation={{
          nextEl: '.swiper-button-next__moviePage--backdrops',
          prevEl: '.swiper-button-prev__moviePage--backdrops',
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
        {imgs?.backdrops?.map((img, index) => (
          <SwiperSlide key={index}>
            <ImageCard
              img={`${constants.api.site}/original${img?.file_path}`}
            />
          </SwiperSlide>
        ))}
      </Box>
      <SwiperNavigation
        classBtns={[
          'swiper-button-prev__moviePage--backdrops',
          'swiper-button-next__moviePage--backdrops',
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
export default BackDropsTab;
