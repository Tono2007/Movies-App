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
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

function Footer() {
  return (
    <Box
      width="100%"
      height="300px"
      bgcolor={(theme) => theme.palette.gray.dark}
      p="5%"
    >
      <Divider
        variant="middle"
        sx={{ bgcolor: (theme) => theme.palette.primary.dark }}
      />
      <Grid container spacing={0} m="auto" px="4%" my={5}>
        <Grid item xs={9}>
          <Stack direction="row" spacing={3}>
            <Typography>Terminos de Uso</Typography>
            <Typography>Privacidad</Typography>
            <Typography>Blog</Typography>
            <Typography>FAQ</Typography>
            <Typography>Peliculas</Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          Follow
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
