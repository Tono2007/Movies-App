import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function Banner() {
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
          src="https://picsum.photos/900/900"
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
        width="50%"
        height="105vh"
        display="flex"
        alignItems="center"
        p="3%"
      >
        <Stack bgcolor="#21212100" p={5}>
          <Typography variant="caption" fontSize="10px" mb={1} width="auto">
            MoviesAPP-[Pelicula]
          </Typography>
          <Typography
            fontSize="6vw"
            fontWeight="800"
            sx={{
              textTransform: 'uppercase',
              textShadow: (theme) =>
                `2px 2px 0px ${theme.palette.primary.light}`,
            }}
          >
            Movie Title
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Rating
              name="size-medium"
              defaultValue={2.5}
              precision={0.5}
              sx={{ mr: '5px' }}
              size="large"
            />
            <Typography variant="caption" fontSize="15px" mb={0}>
              4.7 (Imdb)
            </Typography>
          </Stack>

          <Typography
            fontSize="15px"
            fontWeight="300"
            mb={1}
            color="textSecondary"
          >
            2017 • 2hrs:43mins • GP-13
          </Typography>
          <Typography fontSize="15px" fontWeight="300" mb={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quam rerum reiciendis est pariatur excepturi nihil
            obcaecati porro consequuntur, temporibus beatae totam perspiciatis
            distinctio corrupti itaque dolor provident libero quas.
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
            Acción, Aventura, Horror
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
          <Button
            size="large"
            variant="contained"
            sx={{ width: '200px' }}
            endIcon={<PlayCircleOutlineIcon />}
          >
            Ver Pelicula
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Banner;