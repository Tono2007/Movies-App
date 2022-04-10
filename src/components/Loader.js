//MUI
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
//Components
import Logo from './Logo';

function Loader({ addSx, ...rest }) {
  return (
    <Stack
      mx={{ xs: 1, sm: 'auto' }}
      borderRadius="5px"
      sx={{ ...addSx }}
      {...rest}
      bgcolor="gray.dark"
      p={2}
      width={{ xs: '100%', sm: '370px' }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        justifyContent="center"
      >
        <Logo />
        <Typography variant="h6">Cargando Pagina...</Typography>
      </Stack>
      <CircularProgress sx={{ m: 'auto' }} />
      <Typography my={1} textAlign="center">
        Cargando Contenido, favor de esperar.
      </Typography>
    </Stack>
  );
}

export default Loader;
