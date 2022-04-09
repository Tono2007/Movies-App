import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//mui
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
//com
import MovieCard from '../../components/MovieCard';
//api
import { getRatedMovies } from '../../api/services/movies';
//
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Pagination, Scrollbar } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

function TopRatedMovies({ genres }) {
  const navigate = useNavigate();
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getRatedMovies();
        console.log(response);
        setPopularMovies(response.data.results);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    };
    getMovies();
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
          Peliculas Mejor Calificadas
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
              search: `?sort_by=vote_average.desc`,
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
          nextEl: '.swiper-button-next__welcomePage--RatedMovies',
          prevEl: '.swiper-button-prev__welcomePage--RatedMovies',
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
        {popularMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} genres={genres} />
          </SwiperSlide>
        ))}
      </Box>
      <SwiperNavigation
        classBtns={[
          'swiper-button-prev__welcomePage--RatedMovies',
          'swiper-button-next__welcomePage--RatedMovies',
        ]}
      />
    </Box>
  );
}

export default TopRatedMovies;
