//
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import Chip from '@mui/material/Chip';

function ModalVideo({ video, title }) {
  return (
    <>
      <iframe
        style={{
          height: 'calc(100vh - 200px)',
          maxHeight: '800px',
          width: '100%',
        }}
        id="video"
        title="video"
        src={`https://www.youtube.com/embed/${video?.key}?modestbranding=1&rel=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Stack direction="row" spacing={1} my={0} flexWrap="wrap" ml={1} mb={1}>
        <Typography variant="caption">{video?.name}</Typography>
        {/* {video.official ? 'Oficial' : 'No Oficial'} */}
        <Chip
          variant="filled"
          size="small"
          color="primary"
          label={video?.official ? 'Oficial' : 'No Oficial'}
        />
        <Chip variant="outlined" size="small" label={video?.type} />
        <Chip variant="outlined" size="small" label={video?.site} />
      </Stack>
    </>
  );
}

export default ModalVideo;
