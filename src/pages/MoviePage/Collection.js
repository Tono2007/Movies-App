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
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';

function Collection({ movie }) {
  return movie?.belongs_to_collection ? (
    <>
      <Divider textAlign="center" sx={{ my: 5 }}>
        <Typography variant="subtitle1" mb={0} fontWeight="400" my={0}>
          Saga
        </Typography>
      </Divider>
      <Grid container spacing={6} mb={10}>
        <Grid item xs={6}>
          <Banner movie={movie} />
        </Grid>
        <Grid item xs={6}>
          <>
            {' '}
            <Typography
              fontSize="3vw"
              fontWeight="800"
              lineHeight="4vw"
              sx={{
                textTransform: 'uppercase',
                textShadow: (theme) =>
                  `2px 2px 0px ${theme.palette.primary.light}`,
              }}
            >
              {
                //movie?.original_title
              }
              {movie?.belongs_to_collection?.name}{' '}
            </Typography>{' '}
            <Typography fontSize="15px" fontWeight="300" mb={2}>
              {movie?.overview}
            </Typography>
          </>
          {/*  <Cover
            imgPath={`${constants.api.site}/original${movie?.belongs_to_collection.poster_path}`}
          /> */}
        </Grid>
      </Grid>
      {/*  <Box
        component="img"
        alt="ddf"
        src={`${constants.api.site}/original${movie?.belongs_to_collection?.backdrop_path}`}
      /> */}
    </>
  ) : (
    <Alert severity="info">
      Esta <strong>Pelicula </strong> no pertenese a ninguna saga.
    </Alert>
  );
}

function Banner({ movie }) {
  return (
    <Box position="relative">
      <Box
        alt="banner"
        width="100%"
        height="auto"
        component="img"
        boxShadow={20}
        src={`${constants.api.site}/original${movie?.belongs_to_collection.backdrop_path}`}
        sx={{
          filter: 'brightness(0.99)',
          objectFit: 'cover',
        }}
      />
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
