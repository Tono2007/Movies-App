import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
//Components
import MovieCard from '../../components/MovieCard';
import Loader from '../../components/Loader';
//API
import { getRatedMovies } from '../../api/services/movies';
//Swiper
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Scrollbar } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

function TopRatedMovies({ genres }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await getRatedMovies();
        console.log(response);
        setPopularMovies(response.data.results);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    })();
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
      {isLoading ? (
        <Loader my="20vh" />
      ) : (
        <>
          <Box
            mx="auto"
            pb={5}
            width={{
              xs: 'calc(100% - 75px)',
              sm: 'calc(100% - 100px)',
              xl: 'calc(100% - 200px)',
            }}
            height={{ xs: '500px', md: '550px', lg: '400px' }}
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
              600: {
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
        </>
      )}
    </Box>
  );
}

export default TopRatedMovies;
