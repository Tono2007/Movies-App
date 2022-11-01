import { Link } from 'react-router-dom';
// MUI Stuff
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//ICONS
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

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
        <Stack direction="row" spacing={2} alignItems="center" mb={1}>
          <Avatar
            loading="lazy"
            alt="User"
            src={`https://picsum.photos/200/300?random=${Math.random()}`}
          />
          <Typography> Nombre Usuario</Typography>
        </Stack>
        <Divider />
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
          component={Link}
          to="/login"
        >
          Registrarse
        </Button>
      </Stack>
    </Box>
  );
}

export default Account;
