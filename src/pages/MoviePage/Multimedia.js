import { useState, lazy, Suspense } from 'react';
//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//Icons
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DnsIcon from '@mui/icons-material/Dns';
import PersonIcon from '@mui/icons-material/Person';
import Loader from '../../components/Loader';
//Components
const VideosTab = lazy(() => import('./Videos'));
const PostersTab = lazy(() => import('./Posters'));
const Companies = lazy(() => import('./Companies'));
const BackDropsTab = lazy(() => import('./BackDrops'));

function Multimedia({ imgs, movie, videos }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack direction="column" my={6}>
      <Stack
        my={0}
        borderRadius="5px"
        border={1}
        borderColor="gray.main"
        p={1}
        direction={{ xs: 'column', md: 'row', lg: 'row' }}
      >
        <Typography variant="h5" mr="auto" ml={1} mt={2}>
          Multimedia
          <Divider
            variant="middle"
            sx={{ bgcolor: (theme) => theme.palette.primary.dark }}
          />
        </Typography>
        <Tabs
          value={value}
          variant="scrollable"
          scrollButtons
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          allowScrollButtonsMobile
        >
          <Tab
            iconPosition="start"
            icon={<GroupIcon />}
            label={`Videos (${videos?.length})`}
          />
          <Tab
            iconPosition="start"
            icon={<PersonIcon />}
            label={`Posters (${imgs?.posters?.length})`}
          />
          <Tab
            iconPosition="start"
            icon={<DnsIcon />}
            label={`Fondos (${imgs?.backdrops?.length})`}
          />
          <Tab
            iconPosition="start"
            icon={<BusinessCenterIcon />}
            label={`Productoras (${movie?.production_companies?.length})`}
          />
        </Tabs>
      </Stack>
      <Box
        mt={2}
        bgcolor="gray.dark"
        px={{ xs: '5px', md: '2%' }}
        p={2}
        borderRadius="5px"
      >
        <Suspense fallback={<Loader />}>
          {value === 0 && <VideosTab imgs={imgs} videos={videos} />}
          {value === 1 && <PostersTab imgs={imgs} />}
          {value === 2 && <BackDropsTab imgs={imgs} />}
          {value === 3 && <Companies movie={movie} />}
        </Suspense>
      </Box>
    </Stack>
  );
}

export default Multimedia;
