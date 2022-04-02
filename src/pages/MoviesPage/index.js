import React from 'react';
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

//Icons
import SearchIcon from '@mui/icons-material/Search';
//gh
import MovieCard from '../../components/MovieCard';

//assets
import wallpaper from '../../assets/images/wallpaper.jpg';

function peliculas() {
  return (
    <Box>
      <Box
        width="100%"
        height="60vh"
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
          src={wallpaper}
          sx={{
            filter: 'brightness(0.9)',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Stack m="auto" px="4%" my={2}>
        <Typography
          fontSize="4vw"
          fontWeight="800"
          sx={{
            textTransform: 'uppercase',
            textShadow: (theme) => `3px 3px 0px ${theme.palette.primary.dark}`,
          }}
        >
          Peliculas
        </Typography>
        <Stack direction="row" spacing={3} mt={3} alignItems="center">
          <TextField
            fullWidth
            size="small"
            margin="dense"
            InputProps={{
              name: 'jobName',
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            placeholder="Buscar Pelicula"
            variant="outlined"
          />
          <TextField
            select
            name="hearAboutUs"
            /*    value={formValues.hearAboutUs}
            error={error.error}
            onChange={handleChange} */
            size="small"
            label="Año"
            SelectProps={{
              native: true,
            }}
          >
            <option value=" " disabled>
              Selecciona una opción
            </option>
            <option value=" ">Selecciona una opción</option>{' '}
            <option value=" ">Selecciona una opción</option>
          </TextField>
          <TextField
            select
            name="hearAboutUs"
            /*    value={formValues.hearAboutUs}
            error={error.error}
            onChange={handleChange} */
            size="small"
            label="Genero"
            SelectProps={{
              native: true,
            }}
          >
            <option value=" " disabled>
              Selecciona una opción
            </option>
            <option value=" ">Selecciona una opción</option>{' '}
            <option value=" ">Selecciona una opción</option>
          </TextField>
          <Button
            size="medium"
            variant="contained"
            endIcon={<SearchIcon />}
            sx={{ minWidth: '130px' }}
          >
            Buscar
          </Button>
        </Stack>
        <Typography variant="suntitle" mb={3} mt={2}>
          Filtros:
          <Stack direction="row" spacing={1}>
            <Chip label="Sin Filtros" size="small" />
            <Chip label="nombre" size="small" />
            <Chip label="Accion" size="small" />
            <Chip label="2017" size="small" />
          </Stack>
        </Typography>
        <Typography variant="h6" mb={3} mt={2}>
          Todas las Peliculas
        </Typography>
        <Divider
          variant="middle"
          sx={{ bgcolor: (theme) => theme.palette.primary.dark }}
        />
        <Grid container spacing={4} my={2}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <MovieCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <MovieCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <MovieCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <MovieCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <MovieCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <MovieCard />
          </Grid>
        </Grid>
        <Stack height="500px"> sdf</Stack>{' '}
      </Stack>
    </Box>
  );
}

export default peliculas;
