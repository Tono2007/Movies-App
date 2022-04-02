import { useEffect, useState } from 'react';

//mi
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SvgIcon from '@mui/material/SvgIcon';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
//
import MovieIcon from '@mui/icons-material/Movie';
//
import { getAllMovieGenres, getAllTvGenres } from '../../api/services/catalog';
import { IndeterminateCheckBoxOutlined } from '@mui/icons-material';

function GenresPage() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await getAllMovieGenres();
        console.log(response);
        setGenres(response.data.genres);
      } catch (error) {
        console.log(error);
        console.log(error.response);
      }
    };
    getGenres();
  }, []);
  return (
    <>
      <Box
        width="100%"
        height="20vh"
        position="relative"
        sx={{
          '&:after': {
            content: '""',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            boxShadow: (theme) =>
              `inset 0px -90px 30px -35px ${theme.palette.background.default}`,
          },
        }}
      >
        <Box
          position="absolute"
          alt="banner"
          width="100%"
          height="100%"
          component="img"
          src="https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_960_720.jpg"
          sx={{
            filter: 'brightness(0.9)',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Stack m="auto" px="4%" my={2}>
        <Typography
          fontSize="3vw"
          fontWeight="800"
          sx={{
            textTransform: 'uppercase',
            textShadow: (theme) => `3px 3px 0px ${theme.palette.primary.dark}`,
          }}
        >
          Generos de Peliculas
        </Typography>
        <Grid
          container
          spacing={3}
          my={3}
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          columns={10}
        >
          {genres.map((genre, index) => (
            <Grid item xs={2} key={index}>
              <GenreCard genre={genre} index={index} />
            </Grid>
          ))}
        </Grid>
        <Typography
          fontSize="3vw"
          fontWeight="800"
          sx={{
            textTransform: 'uppercase',
            textShadow: (theme) => `3px 3px 0px ${theme.palette.primary.dark}`,
          }}
        >
          Generos de Series
        </Typography>
        <Grid
          container
          spacing={3}
          my={3}
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          columns={10}
        >
          {genres.map((genre, index) => (
            <Grid item xs={2} key={index}>
              <GenreCard genre={genre} index={index} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
}

function GenreCard({ genre, index }) {
  return (
    <Box
      p={2}
      border={3}
      borderColor="transparent"
      bgcolor="gray.dark"
      position="relative"
      sx={{
        transition: '0.3s',
        borderRadius: '6px',
        '&:hover': {
          borderColor: 'secondary.main',
          cursor: 'pointer',
          bgcolor: 'gray.main',
          transform: 'scale(1.05)',
          boxShadow: 10,
          '& p span': {
            width: '100%',
            bgcolor: 'primary.dark',
          },
        },
      }}
    >
      <Box
        position="absolute"
        p={0}
        lineHeight="20px"
        textAlign="center"
        fontSize="10px"
        borderRadius="50%"
        top="-10px"
        right="-10px"
        height="20px"
        width="20px"
        bgcolor="primary.light"
        boxShadow={3}
      >
        {index}
      </Box>
      <Stack direction="row" spacing={2} alignItems="center">
        <MovieIcon color="secondary" fontSize="small" />
        <Typography color="textSecondary">
          {genre.name}
          <Box
            component="span"
            bgcolor="gray.dark"
            ml={0}
            display="block"
            borderRadius="25px"
            height="3px"
            width="0%"
            sx={{
              transition: '.4s',
            }}
          />
        </Typography>
      </Stack>
    </Box>
  );
}

export default GenresPage;
