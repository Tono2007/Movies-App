import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
//MUI
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
//Icons
import CloseIcon from '@mui/icons-material/Close';
//Components
import Logo from '../Logo';

function Modal(props) {
  const theme = useTheme();
  // opciones : xs sm md lg xl  fullScreen
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { openModal, fnCloseModal, title, maxWidth, type, children } = props;

  return (
    <Dialog
      fullScreen={maxWidth === 'fullScreen' ? true : fullScreen}
      maxWidth={maxWidth === 'fullScreen' ? false : maxWidth}
      open={openModal}
      scroll="paper"
      onClose={fnCloseModal}
      PaperProps={{
        sx: {
          width: '100%',
          bgcolor: (themme) => themme.palette.secondary.dark,
        },
      }}
    >
      <Box position="relative">
        {type ? (
          <Box
            top="0"
            position="sticky"
            zIndex="9999"
            p="2px"
            bgcolor="secondary.dark"
            color="white"
            fontSize="h6.fontSize"
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              alignContent="center"
              fontWeight="300"
            >
              <Logo
                height="35px"
                mr={-10}
                display={{ xs: 'none', sm: 'flex' }}
              />
              {title}
              <IconButton
                aria-label="close"
                onClick={fnCloseModal}
                size="large"
              >
                <CloseIcon sx={{ color: '#fafafa' }} />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <Box top="0" zIndex="9999" position="sticky" width="100%">
            <Stack
              direction="row"
              m="5px 20px"
              pb="4px"
              alignItems="center"
              justifyContent="space-between"
              alignContent="center"
              fontWeight="300"
              sx={{
                borderBottom: `2px solid  ${theme.palette.primary.main}`,
              }}
            >
              <Logo height="35px" display={{ xs: 'none', sm: 'flex' }} />
              <Typography variant="h6" fontWeight="300">
                {title}
              </Typography>
              <IconButton
                aria-label="close"
                onClick={fnCloseModal}
                size="small"
              >
                <CloseIcon />
              </IconButton>
            </Stack>
          </Box>
        )}

        <Box /*  px="20px" py="10px" */>{children}</Box>
      </Box>
    </Dialog>
  );
}

export default Modal;
