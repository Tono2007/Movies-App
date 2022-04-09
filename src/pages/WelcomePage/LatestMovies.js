import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

//Components
import MovieCard from '../../components/MovieCardMin';
import Loader from '../../components/Loader';
//Swiper
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Pagination } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
//API
import { getUpcomingMovies } from '../../api/services/movies';

function LatestMovies({ genres }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const response = await getUpcomingMovies();
        console.log(response);
        setLatestMovies(response.data.results);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h5" mb={0}>
          Ultimas Peliculas
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
              search: `?sort_by=primary_release_date.desc`,
            })
          }
        >
          Ver Mas
        </Button>
      </Stack>
      {isLoading ? (
        <Loader my="20vh" />
      ) : (
        <>
          <Box position="relative" px={0} mt="5%" height="250px">
            {/*  <SwiperNavigation
    classBtns={[
      'swiper-button-prev__welcomePage--latestMovies',
      'swiper-button-next__welcomePage--latestMovies',
    ]}
    top="25%"
  /> */}
            <Box
              mx="auto"
              pb={9}
              width="calc(100% - 0px)"
              height="100%"
              component={Swiper}
              grabCursor
              spaceBetween={30}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Pagination]}
              slidesPerView={3}
              navigation={{
                nextEl: '.swiper-button-next__welcomePage--latestMovies',
                prevEl: '.swiper-button-prev__welcomePage--latestMovies',
              }}
              pagination={{ clickable: true }}
              sx={{
                '& span.swiper-pagination-bullet': {
                  bgcolor: 'primary.light',
                },
                '& .swiper-pagination': {
                  mb: 0,
                },
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
              {latestMovies.slice(0, 10).map((movie) => (
                <SwiperSlide key={movie.id}>
                  <MovieCard movie={movie} genres={genres} />
                </SwiperSlide>
              ))}
              <SwiperNavigation
                classBtns={[
                  'swiper-button-prev__welcomePage--latestMovies',
                  'swiper-button-next__welcomePage--latestMovies',
                ]}
                zIndex={1}
                mx={1}
                top="25%"
              />
            </Box>
          </Box>
          <Box position="relative" px={0} height="250px">
            <Box
              mx="auto"
              pb={9}
              height="100%"
              width="calc(100% - 0px)"
              component={Swiper}
              grabCursor
              spaceBetween={30}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Pagination]}
              slidesPerView={3}
              navigation={{
                nextEl: '.swiper-button-next__welcomePage--latestMovies2',
                prevEl: '.swiper-button-prev__welcomePage--latestMovies2',
              }}
              pagination={{ clickable: true }}
              sx={{
                '& span.swiper-pagination-bullet': {
                  bgcolor: 'primary.light',
                },
                '& .swiper-pagination': {
                  mb: 0,
                },
              }}
            >
              {latestMovies.slice(10, 20).map((movie) => (
                <SwiperSlide key={movie.id}>
                  <MovieCard movie={movie} genres={genres} />
                </SwiperSlide>
              ))}
              <SwiperNavigation
                classBtns={[
                  'swiper-button-prev__welcomePage--latestMovies2',
                  'swiper-button-next__welcomePage--latestMovies2',
                ]}
                zIndex={1}
                mx={1}
                top="30%"
              />
            </Box>
          </Box>
        </>
      )}

      {/*  <Grid container spacing={2}>
        {latestMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={2} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
}

export default LatestMovies;
