import { useState } from 'react';
//MUI
import Box from '@mui/material/Box';
//Components
import Modal from '../Modal';

function ImageCard({ img, alt }) {
  const [openImageModal, setOpenImageModal] = useState(false);

  return (
    <>
      <Modal
        openModal={openImageModal}
        fnCloseModal={() => setOpenImageModal(false)}
        title="Imagenes"
        maxWidth="fullScreen"
        type
      >
        <Box
          mb={-1}
          loading="lazy"
          alt={alt}
          width="100%"
          height="100%"
          component="img"
          maxHeight="calc(100vh - 52px)"
          src={img}
          onClick={() => setOpenImageModal(true)}
          sx={{
            objectFit: 'contain',
          }}
        />
      </Modal>
      <Box
        border={2}
        borderColor="#eee1"
        boxShadow={15}
        alt="banner"
        width="100%"
        height="100%"
        component="img"
        src={img}
        onClick={() => setOpenImageModal(true)}
        sx={{
          transition: '0.5s',
          cursor: 'pointer',
          objectFit: 'cover',
          '&:hover': {
            transform: 'scale(1.01)',
            filter: 'brightness(0.89)',
            border: 2,
            borderColor: 'primary.main',
            boxShadow: (theme) =>
              `0px 12px 12px -10px ${theme.palette.primary.dark}`,
          },
        }}
      />
    </>
  );
}

export default ImageCard;
