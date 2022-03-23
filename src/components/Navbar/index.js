import React from 'react';
import { useNavigate, NavLink, useMatch, Outlet } from 'react-router-dom';
// MUI Stuff
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
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
//ICONS
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function NavButton(NavButtonProps) {
  const { path, children, to, addSX, ...rest } = NavButtonProps;
  const match = useMatch({ path });
  return (
    <Link
      underline="none"
      height="100%"
      fontSize="17px"
      variant="subtitle1"
      color={match ? 'textPrimary' : 'textPrimary'}
      fontWeight={match ? '400' : '300'}
      align="center"
      px="25px"
      pt="5px"
      letterSpacing="0.1px"
      borderBottom={(theme) =>
        match
          ? `3px solid ${theme.palette.primary.dark}`
          : `3px solid transparent`
      }
      sx={{
        transition: '.4s',
        transitionProperty: 'background,color ',
        textTransform: 'uppercase',
        '&:hover': {
          fontWeight: '400',
          color: 'textPrimary',
          bgcolor: (theme) => '#eee3',
        },
        ...addSX,
      }}
      component={NavLink}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
}

function navbar() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          /*  background: (theme) => theme.palette.background.paper, */
          background:
            'linear-gradient(90deg, rgba(18,20,19,0.9) 15%, rgba(20,20,20,0.20) 100%)',
          backdropFilter: 'blur(0.625em)',
          boxShadow: '0px 1px 8px 0px rgba(20,20,20,.5)',
          px: 3,
        }}
      >
        <Toolbar
          sx={{
            height: '80px',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            m: 'auto',
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            component={NavLink}
            to="/"
            sx={{ textDecoration: 'none' }}
          >
            <Avatar sx={{ bgcolor: 'primary.dark', width: 30, height: 30 }}>
              <LocalMoviesIcon fontSize="small" />
            </Avatar>{' '}
            <Typography color="primary.dark" fontWeight="500" fontSize="20px">
              Movies
              <Typography
                component="span"
                color="primary.dark"
                fontWeight="500"
                fontSize="20px"
                sx={{
                  textShadow: (theme) => `2px 2px 0px rgba(0,0,0,0.5)`,
                }}
              >
                APP
              </Typography>
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <NavButton path="/" to="/">
              Inicio
            </NavButton>
            <NavButton path="/movies" to="/movies">
              Peliculas
            </NavButton>
            <NavButton path="/dashboard" to="/dashboard">
              Series
            </NavButton>
            <NavButton path="/dashboard" to="/dashboard">
              Blog
            </NavButton>
            <NavButton path="/dashboard" to="/dashboard">
              Buscar
            </NavButton>
          </Stack>

          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <PersonOutlineIcon fontSize="medium" sx={{ color: '#fff' }} />
          </Avatar>
        </Toolbar>
      </AppBar>
      <Outlet />
      <div>
        <Avatar src="/broken-image.jpg" />
        navbar
      </div>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
    </>
  );
}

export default navbar;
