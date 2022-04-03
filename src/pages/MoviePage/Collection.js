import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { convertMinsToHrsMins } from '../../utils/helpers/helpers';
import { constants } from '../../utils/constants';

import moment from 'moment';
import 'moment/locale/es';
//
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
//
import SwiperNavigation from '../../components/SwiperNavigation';
import { Navigation, Pagination, Scrollbar } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

//
import { getCollection } from '../../api/services/collections';
import MovieCard from '../../components/MovieCardMin';

function Collection({ movie }) {
  const [collection, setCollection] = useState({});
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await getCollection(movie.belongs_to_collection?.id);
        console.log(response);
        setCollection(response.data);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    };
    movie.belongs_to_collection?.id && getDetails();
  }, [movie]);

  return movie?.belongs_to_collection ? (
    <>
      <Divider textAlign="center" sx={{ my: 5 }}>
        <Typography variant="subtitle1" mb={0} fontWeight="400" my={0}>
          Saga
        </Typography>
      </Divider>
      <Grid container spacing={6} mb={10} alignItems="center">
        <Grid item xs={6}>
          <Banner movie={movie} />
        </Grid>
        <Grid item xs={6}>
          <>
            <Typography variant="caption" fontWeight="300" mb={0}>
              Total: {collection?.parts?.length} partes
            </Typography>
            <Typography
              fontSize="3vw"
              fontWeight="800"
              lineHeight="3vw"
              mb={2}
              sx={{
                textTransform: 'uppercase',
                textShadow: (theme) =>
                  `2px 2px 0px ${theme.palette.primary.light}`,
              }}
            >
              {movie?.belongs_to_collection?.name}
            </Typography>
            <Typography fontSize="15px" fontWeight="300" mb={2}>
              {collection?.overview}
            </Typography>
          </>
          {/*  <Cover
            imgPath={`${constants.api.site}/original${movie?.belongs_to_collection.poster_path}`}
          /> */}
        </Grid>
      </Grid>
      <Box
        mx="auto"
        pb={9}
        width="calc(100% - 0px)"
        height="230px"
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
          nextEl: '.swiper-button-next__moviePage--collectionMovies',
          prevEl: '.swiper-button-prev__moviePage--collectionMovies',
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
        {collection?.parts?.map((movieData) => (
          <SwiperSlide key={movieData.id}>
            <MovieCard movie={movieData} />
          </SwiperSlide>
        ))}
        <SwiperNavigation
          classBtns={[
            'swiper-button-prev__moviePage--collectionMovies',
            'swiper-button-next__moviePage--collectionMovies',
          ]}
          mx={1}
          top="30%"
        />
      </Box>
    </>
  ) : (
    <Alert severity="info">
      Esta <strong>Pelicula </strong> no pertenese a ninguna saga.
    </Alert>
  );
}

function Banner({ movie }) {
  return (
    <Box
      position="relative"
      overflow="hidden"
      width="100%"
      height="350px"
      boxShadow={20}
      borderColor="primary.dark"
      sx={{
        background: `url(${constants.api.site}/original${movie?.belongs_to_collection.backdrop_path}) no-repeat`,
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
        imgPath={`${constants.api.site}/original${movie?.belongs_to_collection.poster_path}`}
      />
    </Box>
  );
}
function Cover({ id, imgPath }) {
  return (
    <Box
      top="10%"
      left="10%"
      position="absolute"
      width="30%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        border={3}
        borderColor="#eee4"
        alt="banner"
        width="100%"
        height="auto"
        component="img"
        src={`${constants.api.site}/original${imgPath}`}
        sx={{
          objectFit: 'cover',
        }}
      />
    </Box>
  );
}

export default Collection;
