import React from 'react';
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

function MovieCard() {
  return (
    <Box
      position="relative"
      border={2}
      borderColor="transparent"
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
        overflow="hidden"
        position="relative"
        height="140px"
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
          src={`https://picsum.photos/300/300?random=${Math.random()}`}
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
      width="100%"
      direction="column"
      justifyContent="center"
      alignItems="space-between"
      sx={{ visibility: 'hidden' }}
      height="100%"
    >
      <Typography variant="h6" my={0.5}>
        Nombre Pelicula
      </Typography>

      <Typography fontSize="15px" fontWeight="300" mb={0} color="textSecondary">
        2017 • 2hrs:43mins
      </Typography>
      <Typography fontSize="15px" color="textSecondary" fontWeight="300" mb={1}>
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

      <Button
        size="small"
        variant="contained"
        fullWidth
        sx={{ m: 'auto', mt: 'auto' }}
        color="primary"
        endIcon={<PlayCircleOutlineIcon />}
      >
        Ver Pelicula
      </Button>
    </Stack>
  );
}

export default MovieCard;
