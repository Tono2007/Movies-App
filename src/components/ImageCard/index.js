import { constants } from '../../utils/constants';
//
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function ImageCard({ img }) {
  return (
    <Box
      border={2}
      borderColor="#eee1"
      boxShadow={15}
      alt="banner"
      width="100%"
      height="100%"
      component="img"
      src={img}
      sx={{
        transition: '0.5s',
        cursor: 'pointer',
        filter: 'brightness(0.99)',
        objectFit: 'cover',
        '&:hover': {
          border: 2,
          borderColor: 'primary.main',
          boxShadow: (theme) =>
            `0px 12px 12px -10px ${theme.palette.primary.dark}`,
        },
      }}
    />
  );
}

export default ImageCard;
