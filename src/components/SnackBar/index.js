import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MUISnackbar from '@mui/material/Snackbar';
//Icons
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

function SnackBar(props) {
  const { openSnackbar, fnCloseSnackbar, data, type = 'success' } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    fnCloseSnackbar();
  };
  return (
    <MUISnackbar
      open={openSnackbar}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Box
        px={3}
        py={2}
        display="flex"
        flexDirection="row"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        bgcolor="background.paper"
        boxShadow={3}
        borderLeft={5}
        /* borderRadius="45px" */
        borderRadius="3px"
        borderColor={`${type}.main`}
      >
        {type === 'success' && (
          <CheckCircleOutlineRoundedIcon fontSize="large" color="success" />
        )}
        {type === 'error' && (
          <ErrorOutlineIcon fontSize="large" color="error" />
        )}
        {type === 'warning' && (
          <PriorityHighIcon fontSize="large" color="warning" />
        )}

        <Typography mx={1} fontSize="1rem" fontWeight="500">
          {data.text}
        </Typography>
        <IconButton
          size="small"
          aria-label="close"
          onClick={handleClose}
          color="inherit"
        >
          <CloseIcon fontSize="small" color="action" />
        </IconButton>
      </Box>
    </MUISnackbar>
  );
}

export default SnackBar;
