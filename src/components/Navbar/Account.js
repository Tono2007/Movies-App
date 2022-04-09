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
import Button from '@mui/material/Button';

//ICONS
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';

function Account() {
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
        spacing={1}
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
        <Stack direction="row" spacing={2} alignItems="center" mb={1}>
          <Avatar
            alt="User"
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Typography> Nombre Usuario</Typography>
        </Stack>
        <Divider />
        <Button variant="contained" size="small" fullWidth disableElevation>
          Iniciar Sesión
        </Button>
        <Button variant="outlined" size="small" fullWidth>
          Registrarse
        </Button>
      </Stack>
    </Box>
  );
}

export default Account;
