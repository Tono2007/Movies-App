import { useState, lazy, Suspense } from 'react';
import { constants } from '../../utils/constants';
//MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//Icons
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
//Components
import Modal from '../Modal';

const ModalVideo = lazy(() => import('../ModalVideo'));

function Cover({ imgPath, video, alt = 'poster' }) {
  const [openVideoModal, setOpenVideoModal] = useState(false);

  return (
    <Box
      ml="auto"
      mx="auto"
      maxWidth="50%"
      width="auto"
      height="100%"
      p={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Modal
        openModal={openVideoModal}
        fnCloseModal={() => setOpenVideoModal(false)}
        title={video?.name ?? 'Sin Trailer'}
        maxWidth="md"
        type
      >
        <Suspense fallback={null}>
          <ModalVideo video={video} />
        </Suspense>
      </Modal>
      <Box
        loading="lazy"
        border={3}
        borderColor="#eee4"
        boxShadow={15}
        alt={alt}
        width="100%"
        height="auto"
        maxHeight="70%"
        component="img"
        src={`${constants.api.site}/w500${imgPath}`}
        sx={{
          objectFit: 'contain',
        }}
      />
      <Button
        size="small"
        variant="contained"
        sx={{ width: '200px' /* mt: '-18px'  */, mt: 1 }}
        endIcon={<PlayCircleOutlineIcon />}
        onClick={() => setOpenVideoModal(true)}
      >
        Ver Trailer
      </Button>
    </Box>
  );
}

export default Cover;
