import { Link, useNavigate } from 'react-router-dom';
import { constants } from '../../utils/constants';
import { useGlobalContext } from '../../context/GlobalContext';

// MUI Stuff
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

//ICONS
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

function Account() {
  const { userData, deleteUserData } = useGlobalContext();
  const navigator = useNavigate();
  console.log('navbar account', userData);

  const logout = async () => {
    deleteUserData();
    navigator('/login');
  };
  return (
    <Box
      position="relative"
      sx={{
        '&:hover #DDAccount': {
          display: 'block',
          opacity: 1,
        },
      }}
    >
      <Avatar
        sx={{
          bgcolor: 'primary.main',
        }}
      >
        <PersonOutlineIcon fontSize="medium" sx={{ color: '#fff' }} />
      </Avatar>
      <Stack
        spacing={2}
        id="DDAccount"
        bgcolor="background.paper"
        boxShadow={4}
        position="absolute"
        top="40px"
        left="-50px"
        border={0}
        borderTop={3}
        borderColor="primary.main"
        visibility="visible"
        opacity="1"
        display="none"
        width="240px"
        p={2}
        sx={{
          transform: 'translate(-50%, 0)',
          '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: -1,
            left: 6,
            width: 9,
            height: 9,
            bgcolor: 'transparent',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        }}
      >
        {userData ? (
          <>
            <Stack direction="row" spacing={0} alignItems="center" mb={1}>
              <Avatar
                loading="lazy"
                alt="User"
                src={`${constants.api.site}/w500${userData?.avatar?.tmdb?.avatar_path}`}
                sx={{ mr: 2 }}
              />
              <div>
                <Typography> {userData?.username}</Typography>
                <Typography variant="subtitle2">{userData?.name}</Typography>
              </div>
            </Stack>
            <Typography variant="caption">
              {userData?.iso_639_1} {userData?.iso_3166_1}
            </Typography>
            <Divider />
            <MenuList dense>
              <MenuItem component={Link} to="/favorites">
                <ListItemText>Favoritos</ListItemText>
                <FavoriteIcon />
              </MenuItem>
              <MenuItem component={Link} to="/rates">
                <ListItemText>Calificaciones</ListItemText>
                <StarIcon />
              </MenuItem>
              <MenuItem component={Link} to="/watchlist">
                <ListItemText>WatchList</ListItemText>
                <PlaylistAddCheckIcon />
              </MenuItem>
            </MenuList>
            <Divider />
            <Button
              title="Iniciar Sesión"
              variant="contained"
              size="small"
              fullWidth
              disableElevation
              onClick={logout}
            >
              Cerrar Sesión
            </Button>
          </>
        ) : (
          <>
            <Button
              title="Iniciar Sesión"
              variant="contained"
              size="small"
              fullWidth
              disableElevation
              component={Link}
              to="/login"
            >
              Iniciar Sesión
            </Button>
            <Button
              title="Registrarse"
              variant="outlined"
              size="small"
              fullWidth
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.themoviedb.org/signup"
            >
              Registrarse
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
}

export default Account;
