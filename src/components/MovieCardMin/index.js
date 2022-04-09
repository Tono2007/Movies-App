import React from 'react';
import { useNavigate } from 'react-router-dom';
import { constants } from '../../utils/constants';
import moment from 'moment';
import 'moment/locale/es';
//MUI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

//Icons
import StarIcon from '@mui/icons-material/Star';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function MovieCard({ movie, genres }) {
  return (
    <Box height="100%">
      <Box
        position="relative"
        border={2}
        height="100%"
        borderColor="transparent"
        sx={{
          transition: '0.5s',
          '&:hover': {
            borderColor: 'primary.light',
            '.carImg:after': {
              bgcolor: '#0009',
              boxShadow: 'none',
            },
            '.cardContent': {
              visibility: 'visible',
            },
          },
        }}
      >
        <Box
          className="carImg"
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
              boxShadow: (theme) =>
                `inset 0px 25px 10px -15px ${theme.palette.background.default},inset 0px -25px 10px -15px ${theme.palette.background.default}`,
            },
          }}
        >
          <Box
            alt="banner"
            width="100%"
            height="100%"
            component="img"
            src={`${constants.api.site}/original${movie?.backdrop_path}`}
            sx={{
              objectFit: 'cover',
            }}
          />
        </Box>
        <CardContent movie={movie} genres={genres} />
      </Box>
      <Typography variant="caption" my={0} lineHeight="1px">
        {movie?.title}
      </Typography>
    </Box>
  );
}
function CardContent({ movie, genres }) {
  const navigate = useNavigate();

  return (
    <Stack
      className="cardContent"
      position="absolute"
      top="0"
      width="100%"
      sx={{ visibility: 'hidden' }}
      height="100%"
    >
      <Stack
        p={1}
        height="100%"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Typography variant="h6" my={0.5} lineHeight="20px">
          {movie?.title}
        </Typography>

        <Typography
          fontSize="15px"
          fontWeight="300"
          mb={0}
          color="textSecondary"
          flexGrow={1}
        >
          {moment(movie?.release_date).format('YYYY')} |{'  '}
          {movie?.genre_ids?.map((genreId, index) => (
            <Typography
              key={index}
              variant="caption"
              color="textSecondary"
              fontWeight="300"
              component="span"
            >
              • {genres?.find((genre) => genre.id === genreId)?.name}{' '}
            </Typography>
          ))}
          <Typography
            variant="caption"
            fontWeight="300"
            mb={0}
            color="textSecondary"
          >
            {' '}
            Accion Aventura
          </Typography>
        </Typography>
        {/*  <Typography fontSize="15px" color="textSecondary" fontWeight="300" mb={1}>
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
      </Typography> */}

        <Button
          size="small"
          variant="contained"
          fullWidth
          color="primary"
          endIcon={<PlayCircleOutlineIcon />}
          onClick={() => navigate(`/movies/${movie?.id}`)}
        >
          Ver Pelicula
        </Button>
      </Stack>
    </Stack>
  );
}

export default MovieCard;
