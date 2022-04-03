import { constants } from '../../utils/constants';
//
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';

//Icons
import StarIcon from '@mui/icons-material/Star';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
//
import MovieCard from '../../components/MovieCard';
//
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Pagination, Scrollbar } from 'swiper';
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
        height="330px"
        component={Swiper}
        grabCursor
        spaceBetween={30}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Scrollbar]}
        scrollbar={{
          draggable: true,
          dragSize: 100,
        }}
        slidesPerView={5}
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
              img={`${constants.api.site}/original${img?.file_path}`}
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
