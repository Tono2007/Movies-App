import { useEffect, useState } from 'react';
import { constants } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';
//mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
//Icons
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import EventIcon from '@mui/icons-material/Event';
import GTranslateIcon from '@mui/icons-material/GTranslate';

//Swiper
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Pagination } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
//api
import { getPlayingTvShows } from '../../api/services/tvShows';
//components
import Loader from '../../components/Loader';

function TvShowsOnAir() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [playingTvShows, setPlayingTvShows] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const response = await getPlayingTvShows();
        console.log(response);
        setPlayingTvShows(response.data.results);
        /*  setTimeout(async () => {
          const responseTV = await getPlayingTvShows();
          console.log(responseTV);
          setPlayingTvShows(responseTV.data.results);
        }, 2000); */
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
    <Box m="auto" mx="4%" my={5} position="relative">
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h5" mb={0}>
          Series en Emisión
          <Divider
            variant="middle"
            sx={{ bgcolor: (theme) => theme.palette.primary.dark }}
          />
        </Typography>
        <Button size="medium" variant="contained">
          Ver todas
        </Button>
      </Stack>
      {isLoading ? (
        <Loader my="20vh" />
      ) : (
        <>
          <Box
            mx="auto"
            pr={{ xs: 3, md: 6 }}
            height="500px"
            maxHeight="600px"
            width={{
              xs: 'calc(100% - 75px)',
              sm: 'calc(100% - 100px)',
            }}
            component={Swiper}
            direction="vertical"
            grabCursor
            spaceBetween={10}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next__welcomePage--tvShows',
              prevEl: '.swiper-button-prev__welcomePage--tvShows',
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
            {playingTvShows.map((movie) => (
              <SwiperSlide key={movie.id}>
                <>
                  <Stack
                    direction="row"
                    width="100%"
                    bgcolor="#d3d3d3"
                    height="90%"
                    position="relative"
                  >
                    <Banner movie={movie} />
                    <Stack
                      display={{ xs: 'none', md: 'flex' }}
                      bgcolor="#0009"
                      position="absolute"
                      top="20%"
                      right="1%"
                      left={{ xs: 0, md: '50%' }}
                      width={{ xs: '80%', md: '40%' }}
                      p={2}
                    >
                      <Typography
                        fontSize={{ xs: '5vw', sm: '3vw' }}
                        fontWeight="800"
                        lineHeight="3vw"
                        my={1}
                        sx={{
                          textTransform: 'uppercase',
                          textShadow: (theme) =>
                            `2px 2px 0px ${theme.palette.primary.light}`,
                        }}
                      >
                        {movie?.name}
                      </Typography>
                      <Typography fontSize="15px" fontWeight="300" mb={1}>
                        {movie?.overview?.substring(0, 200)}...
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        {movie?.vote_average !== undefined && (
                          <Rating
                            name="size-medium"
                            value={movie.vote_average}
                            precision={0.5}
                            sx={{ mr: '5px' }}
                            max={10}
                            size="small"
                          />
                        )}
                        <Typography
                          variant="caption"
                          fontSize="17px"
                          mb={0}
                          mr={1}
                        >
                          {movie?.vote_average}
                        </Typography>
                      </Stack>
                      <Typography variant="caption" fontSize="12px" mb={0}>
                        ({movie?.popularity} Votos totales)
                      </Typography>
                      <Typography
                        fontSize="15px"
                        fontWeight="300"
                        mb={0}
                        color="textSecondary"
                      >
                        <EventIcon fontSize="5px" sx={{ mb: '-3px' }} />{' '}
                        {moment(movie?.first_air_date).format('LL')} •{' '}
                        <GTranslateIcon
                          fontSize="5px"
                          sx={{ mb: '-3px', mr: 0.5 }}
                        />
                        {movie?.original_language}
                      </Typography>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{ width: '200px' }}
                        endIcon={<PlayCircleOutlineIcon />}
                        onClick={() => navigate(`/series/${movie?.id}`)}
                      >
                        Ver Serie
                      </Button>
                    </Stack>
                  </Stack>
                  <Typography> {movie?.name}</Typography>
                </>
              </SwiperSlide>
            ))}
          </Box>
          <SwiperNavigation
            classBtns={[
              'swiper-button-prev__welcomePage--tvShows',
              'swiper-button-next__welcomePage--tvShows',
            ]}
          />
        </>
      )}
    </Box>
  );
}

function ShowCard() {
  return (
    <Box
      position="relative"
      border={2}
      borderColor="transparent"
      borderRadius="3px"
      sx={{
        transition: '0.5s',
        '&:hover': {
          cursor: 'pointer',
          borderColor: 'primary.light',
          '.carImg:after': {
            bgcolor: '#0009',
          },
          '.cardContent': {
            visibility: 'visible',
          },
        },
      }}
    >
      <Box
        className="carImg"
        borderRadius="3px"
        overflow="hidden"
        position="relative"
        height="100%"
        sx={{
          '&:after': {
            transition: '0.5s',
            content: '""',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            boxShadow:
              'inset 0px 50px 20px -15px #12141D,inset 0px -30px 10px -15px #12141D',
          },
        }}
      >
        <Box
          alt="banner"
          width="100%"
          height="100%"
          component="img"
          src={`https://picsum.photos/300/300?random=${Math.random()}`}
          sx={{
            filter: 'brightness(0.99)',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Stack
        className="cardContent"
        p={0}
        position="absolute"
        top="0"
        width="100%"
        direction="column"
        sx={{ visibility: 'hidden' }}
        height="100%"
      >
        <Typography variant="h6" textAlign="center" my={3}>
          Nombre Pelicula
        </Typography>
      </Stack>
    </Box>
  );
}
function Banner({ movie }) {
  return (
    <Box
      position="relative"
      overflow="hidden"
      width="100%"
      height="100%"
      boxShadow={20}
      borderColor="primary.dark"
      sx={{
        background: `url(${constants.api.site}/w1280${movie?.backdrop_path}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: (theme) =>
          `inset 0px 20px 10px -15px ${theme.palette.background.default},inset 0px -20px 10px -15px ${theme.palette.background.default}`,
      }}
    >
      {/*  <Box
          alt="banner"
          width="100%"
          height="auto"
          component="img"
          boxShadow={20}
          borderBottom={4}
          borderColor="primary.main"
          src={`${constants.api.site}/original${movie?.belongs_to_collection.backdrop_path}`}
          sx={{
            objectFit: 'cover',
          }}
        /> */}
      <Cover
        imgPath={`${constants.api.site}/w500${movie?.poster_path}`}
        alt={`${movie?.name || 'serie'} poster`}
      />
    </Box>
  );
}

function Cover({ id, imgPath, alt = 'serie poster' }) {
  return (
    <Box
      top="10%"
      left="10%"
      position="absolute"
      width="auto"
      maxWidth="80%"
      height="80%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        loading="lazy"
        alt={alt}
        border={3}
        borderColor="#eee4"
        width="100%"
        height="100%"
        component="img"
        src={imgPath}
        sx={{
          objectFit: 'cover',
        }}
      />
    </Box>
  );
}
function CardContent() {
  return (
    <Stack
      className="cardContent"
      p={2}
      position="absolute"
      top="0"
      right="0"
      width="100%"
      direction="column"
      sx={{ visibility: 'hidden' }}
      height="100%"
    >
      <Typography
        variant="h5"
        textAlign="center"
        my={3}
        height="100%"
        fontWeight="300"
      >
        Nombre Pelicula
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center" spacing={1} my={0}>
          <Rating
            name="size-medium"
            defaultValue={2.5}
            precision={0.5}
            sx={{ mr: '5px' }}
            size="small"
          />
          <Typography variant="caption" fontSize="15px" mb={0}>
            4.7 (Imdb)
          </Typography>
          <Typography
            fontSize="15px"
            fontWeight="300"
            mb={1}
            color="textSecondary"
          >
            2017 • 2hrs:43mins
          </Typography>{' '}
          <Typography fontSize="15px" color="textSecondary" fontWeight="300">
            <Typography
              fontSize="15px"
              color="primary.light"
              fontWeight="600"
              component="span"
              mr={2}
            >
              Genero
            </Typography>
            Acción
          </Typography>
        </Stack>
        <Button
          size="large"
          variant="contained"
          sx={{ m: 'auto', mt: 'auto' }}
          color="primary"
          endIcon={<PlayCircleOutlineIcon />}
        >
          Ver Serie
        </Button>
      </Stack>
    </Stack>
  );
}

export default TvShowsOnAir;
