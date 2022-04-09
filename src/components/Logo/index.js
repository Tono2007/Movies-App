import React from 'react';
import { Link } from 'react-router-dom';
// MUI Stuff
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
//ICONS
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

function Logo({ ...rest }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      component={Link}
      to="/"
      sx={{ textDecoration: 'none' }}
      bgcolor="#fafafa10"
      p={1}
      borderRadius="20px"
      {...rest}
    >
      <Avatar sx={{ bgcolor: 'primary.dark', width: 30, height: 30 }}>
        <LocalMoviesIcon fontSize="small" />
      </Avatar>{' '}
      <Typography
        color="#fff"
        fontWeight="400"
        fontSize="15px"
        sx={{
          textShadow: (theme) => `1px 1px 0px ${theme.palette.primary.light}`,
        }}
      >
        Movies
        <Typography
          component="span"
          color="#fff"
          fontWeight="400"
          fontSize="15px"
        >
          APP
        </Typography>
      </Typography>
    </Stack>
  );
}

export default Logo;
