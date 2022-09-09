import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

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
import Button from '@mui/material/Button';

//import Badge from "@mui/material/Badge";

//Icons
//import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from '@mui/icons-material/Dashboard';
import InputIcon from '@mui/icons-material/Input';
import MailIcon from '@mui/icons-material/Mail';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import FeedIcon from '@mui/icons-material/Feed';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MenuIcon from '@mui/icons-material/Menu';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

function MenuListItem({ Icon, title, to, path }) {
  /* const match = Boolean(useRouteMatch({ path })); */
  return (
    <MenuItem
      component={RouterLink}
      to={path}
      /* selected={match} */
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </MenuItem>
  );
}
function RenderMobileMenu() {
  return (
    <>
      <MenuItem component={RouterLink} to="/account/">
        <Avatar
          loading="lazy"
          alt="Perfil"
          src={`https://picsum.photos/200/300?random=${Math.random()}`}
        />
        <Typography sx={{ marginLeft: '10px' }} variant="subtitle1">
          Nombre Usuario
        </Typography>
      </MenuItem>
      <Divider />
      <MenuListItem Icon={DashboardIcon} title="Inicio" path="/" />
      <MenuListItem Icon={GroupIcon} title="Peliculas" path="/movies" />
      <MenuListItem Icon={GroupsIcon} title="Series" path="/series" />
      <MenuListItem Icon={FeedIcon} title="Blog" path="/blog" />
      <MenuListItem Icon={MailIcon} title="Generos" path="/genres" />
      <MenuListItem Icon={AccountCircleIcon} title="Actores" path="/cast" />

      <Divider />
      <Button
        variant="contained"
        size="small"
        fullWidth
        disableElevation
        component={RouterLink}
        to="/login"
        sx={{ mb: 1 }}
      >
        Iniciar Sesión
      </Button>
      <Button
        variant="outlined"
        size="small"
        fullWidth
        component={RouterLink}
        to="/login"
      >
        Registrarse
      </Button>
    </>
  );
}
function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  //const [anchorEl, setAnchorEl] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  //const open = Boolean(anchorEl);

  const handleMobileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };
  const handleMobileMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  return (
    <Box
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        display: {
          xs: 'inline-flex',
          sm: 'inline-flex',
          md: 'inline-flex',
          lg: 'none',
        },
      }}
    >
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={menuOpen}
        onClose={handleMobileMenuClose}
        onClick={handleMobileMenuClose}
        PaperProps={{
          //elevation: 0,
          sx: {
            overflow: 'visible',
            //filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            borderTop: 4,
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: -2,
              left: 18,
              width: 15,
              height: 15,
              bgcolor: 'transparent',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <RenderMobileMenu />
      </Menu>
      <IconButton
        edge="end"
        color="primary"
        onClick={handleMobileMenuOpen}
        size="large"
      >
        <MenuIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
}

export default MobileMenu;
