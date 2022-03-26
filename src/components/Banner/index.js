import React, { useState } from 'react';
import { constants } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

import moment from 'moment';
import 'moment/locale/es';
//mi
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

//icon
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function GenreChip() {
  return (
    <Typography
      mr={1}
      borderRadius="15px"
      variant="caption"
      fontSize="15px"
      mb={0}
      display="inline"
      width="auto"
      p="2px 16px"
      bgcolor="#eee4"
    >
      Aventura
    </Typography>
  );
}
function Cover() {
  return (
    <Box
      width="50%"
      height="100%"
      p={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        border={3}
        borderColor="#eee4"
        boxShadow={15}
        alt="banner"
        width="50%"
        height="auto"
        maxHeight="70%"
        component="img"
        src="https://picsum.photos/300/900"
        sx={{
          filter: 'brightness(0.99)',
          objectFit: 'cover',
        }}
      />
      <Button
        size="small"
        variant="contained"
        sx={{ width: '200px', mt: '-18px' }}
        endIcon={<PlayCircleOutlineIcon />}
      >
        Ver Trailer
      </Button>
    </Box>
  );
}
function Banner(props) {
  const navigate = useNavigate();
  const { showCover, caption, movieBtn, movie, genres } = props;
  const [movies, setMovies] = useState([]);
  //console.log(`${constants.api.site}/original${movie?.backdrop_path}`);
  return (
    <Box position="relative">
      <Box
        width="100%"
        minHeight="105vh"
        position="absolute"
        sx={{
          '&:after': {
            content: '""',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            background:
              'linear-gradient(90deg, rgba(18,20,19,1) 0%, transparent 60%)',
            boxShadow: 'inset 0px -90px 30px -35px #12141D',
          },
        }}
      >
        <Box
          position="absolute"
          alt="banner"
          width="100%"
          height="100%"
          component="img"
          src={`${constants.api.site}/original${movie?.backdrop_path}`}
          sx={{
            filter: 'brightness(0.99)',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box
        position="relative"
        left="0"
        top="0"
        width="100%"
        height="105vh"
        display="flex"
        alignItems="center"
        p="3%"
      >
        <Stack
          mt="-5%"
          bgcolor="#21212100"
          p={5}
          width="50%"
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Typography
            variant="caption"
            fontSize="9px"
            mb={0}
            display="inline"
            width="auto"
            p={0.6}
            bgcolor="#eee2"
          >
            {caption}
          </Typography>
          <Typography
            fontSize="6vw"
            fontWeight="800"
            lineHeight="6vw"
            sx={{
              textTransform: 'uppercase',
              textShadow: (theme) =>
                `2px 2px 0px ${theme.palette.primary.light}`,
            }}
          >
            {movie?.original_title}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            {movie?.vote_average !== undefined && (
              <Rating
                name="size-medium"
                value={movie.vote_average}
                precision={0.5}
                sx={{ mr: '5px' }}
                max={10}
                size="medium"
              />
            )}
            <Typography variant="caption" fontSize="17px" mb={0} mr={1}>
              {movie?.vote_average}
            </Typography>
            <Typography variant="caption" fontSize="12px" mb={0}>
              ({movie?.popularity})
            </Typography>
          </Stack>
          <Typography
            fontSize="15px"
            fontWeight="300"
            mb={1}
            color="textSecondary"
          >
            {moment(movie?.release_date).format('LL')} • 2hrs 43mins • GP-13 •
            {movie?.original_language}
          </Typography>
          <Typography fontSize="15px" fontWeight="300" mb={2}>
            {movie?.overview.substring(0, 270)}...
          </Typography>
          <Typography fontSize="19px" color="textSecondary" fontWeight="300">
            <Typography
              fontSize="20px"
              color="primary.main"
              fontWeight="600"
              component="span"
              mr={2}
            >
              Genero
            </Typography>
            Acción
          </Typography>
          <Typography fontSize="19px" color="textSecondary" fontWeight="300">
            <Typography
              fontSize="20px"
              color="primary.main"
              fontWeight="600"
              component="span"
              mr={2}
            >
              Etiquetas
            </Typography>
            <GenreChip />
            <GenreChip />
            <GenreChip />
          </Typography>
          <Typography
            fontSize="19px"
            color="textSecondary"
            fontWeight="300"
            mb={3}
          >
            <Typography
              fontSize="20px"
              color="primary.main"
              fontWeight="600"
              component="span"
              mr={2}
            >
              Actores
            </Typography>
            Acción, Aventura, Horror
          </Typography>
          {movieBtn && (
            <Button
              size="large"
              variant="contained"
              sx={{ width: '200px' }}
              endIcon={<PlayCircleOutlineIcon />}
              onClick={() => navigate(`/movies/${movie?.id}`)}
            >
              Ver Pelicula
            </Button>
          )}
        </Stack>
        {showCover && <Cover />}
      </Box>
    </Box>
  );
}

export default Banner;
