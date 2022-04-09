import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
//Icons
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
//Swiper
import { Pagination } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

function TvShows() {
  return (
    <Box m="auto" mx="4%" my={5}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h5" mb={0}>
          Series
          <Divider
            variant="middle"
            sx={{ bgcolor: (theme) => theme.palette.primary.dark }}
          />
        </Typography>
        <Button size="medium" variant="contained">
          Ver todas
        </Button>
      </Stack>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
          <Box
            mx="auto"
            pr={4}
            height="auto"
            maxHeight="500px"
            width="calc(100% - 0px)"
            component={Swiper}
            direction="vertical"
            grabCursor
            spaceBetween={10}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            modules={[Pagination]}
            slidesPerView={5}
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
            {/* {latestMovies.slice(10, 20).map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))} */}
            <SwiperSlide>
              <ShowCard />
            </SwiperSlide>
            <SwiperSlide>
              <ShowCard />
            </SwiperSlide>
            <SwiperSlide>
              <ShowCard />
            </SwiperSlide>
            <SwiperSlide>
              <ShowCard />
            </SwiperSlide>
            <SwiperSlide>
              <ShowCard />
            </SwiperSlide>
            <SwiperSlide>
              <ShowCard />
            </SwiperSlide>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={10} xl={2}>
          <Banner />
        </Grid>
      </Grid>
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
function Banner() {
  return (
    <Box
      position="relative"
      border={2}
      borderColor="transparent"
      borderRadius="3px"
      sx={{
        transition: '0.5s',
        '&:hover': {
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
        height="550px"
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
              'inset 0px 20px 10px -15px #12141D,inset 0px -20px 10px -15px #12141D',
          },
        }}
      >
        <Box
          alt="banner"
          width="100%"
          height="100%"
          component="img"
          src={`https://picsum.photos/600/800?random=${Math.random()}`}
          sx={{
            filter: 'brightness(0.99)',
            objectFit: 'cover',
          }}
        />
      </Box>
      <CardContent />
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

export default TvShows;
