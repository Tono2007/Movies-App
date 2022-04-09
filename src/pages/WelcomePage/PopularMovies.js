import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
//Components
import MovieCard from '../../components/MovieCard';
//API
import { getPopularMovies } from '../../api/services/movies';
//Swiper
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Scrollbar } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

function PopularMovies({ genres }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await getPopularMovies();
        console.log(response);
        setPopularMovies(response.data.results);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    };
    getDetails();
  }, []);
  return (
    <Box m="auto" mx="4%" my={5} position="relative">
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h5" mb={0}>
          Peliculas Populares
          <Divider
            variant="middle"
            sx={{ bgcolor: (theme) => theme.palette.primary.dark }}
          />
        </Typography>

        <Button
          size="medium"
          variant="contained"
          onClick={() =>
            navigate({
              pathname: '/movies',
              search: `?sort_by=popularity.desc`,
            })
          }
        >
          Ver todas
        </Button>
      </Stack>
      <Box
        mx="auto"
        pb={5}
        width="calc(100% - 100px)"
        height="400px"
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
        slidesPerView={4}
        navigation={{
          nextEl: '.swiper-button-next__welcomePage--popularMovies',
          prevEl: '.swiper-button-prev__welcomePage--popularMovies',
        }}
        sx={{
          '& .swiper-scrollbar': {
            height: '10px',
            mt: 1,
            mb: '-0px',
            bgcolor: (theme) => theme.palette.gray.dark,
            '& .swiper-scrollbar-drag:hover': {
              bgcolor: 'primary.dark',
            },
          },
        }}
      >
        {popularMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} genres={genres} />
          </SwiperSlide>
        ))}
      </Box>
      <SwiperNavigation
        classBtns={[
          'swiper-button-prev__welcomePage--popularMovies',
          'swiper-button-next__welcomePage--popularMovies',
        ]}
      />
    </Box>
  );
}

export default PopularMovies;
