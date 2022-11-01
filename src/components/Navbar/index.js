import React from 'react';
import { NavLink, useMatch, Outlet } from 'react-router-dom';
// MUI Stuff
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
//ICONS

import Footer from '../Footer';
import Logo from '../Logo';
import Search from './Search';
import Account from './Account';
import MobileMenu from './MobileMenu';

function NavButton(NavButtonProps) {
  const { path, children, to, addSX, ...rest } = NavButtonProps;
  const match = useMatch({ path });
  return (
    <Link
      title={path}
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
          bgcolor: (theme) => '#eee4',
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
    <Box display="flex" minHeight="100vh" flexDirection="column">
      <AppBar
        position="fixed"
        sx={{
          /*  background: (theme) => theme.palette.background.paper, */
          background:
            'linear-gradient(90deg, #12141D90 10%, rgba(20,20,20,0.20) 35%)',
          backdropFilter: 'blur(0.625em)',
          boxShadow: '0px 1px 10px 0px rgba(20,20,20,0.8)',
          px: { xs: 0, md: '3%' },
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
          <Stack direction="row" spacing={2}>
            <MobileMenu />
            <Logo />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            display={{
              xs: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
            }}
          >
            <NavButton path="/" to="/">
              Inicio
            </NavButton>
            <NavButton path="/movies" to="/movies">
              Peliculas
            </NavButton>
            <NavButton path="/series" to="/series">
              Series
            </NavButton>
            <NavButton path="/blog" to="/blog">
              Blog
            </NavButton>
            <NavButton path="/genres" to="/genres">
              Generos
            </NavButton>
            <NavButton path="/cast" to="/cast">
              Actores
            </NavButton>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>Es</Typography>
            <Search />
            <Account />
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flex: '1 0 auto',
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default navbar;
