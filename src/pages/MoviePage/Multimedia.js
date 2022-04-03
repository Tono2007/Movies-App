import { useEffect, useState } from 'react';

//
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

//Icons
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import DnsIcon from '@mui/icons-material/Dns';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import VideosTab from './Videos';
import PostersTab from './Posters';
import Companies from './Companies';
import BackDropsTab from './BackDrops';

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
        px={{ xs: '5px', md: '2%' }}
        mt={2}
        bgcolor="gray.dark"
        p={2}
        borderRadius="5px"
      >
        {value === 0 && <VideosTab imgs={imgs} videos={videos} />}
        {value === 1 && <PostersTab imgs={imgs} />}
        {value === 2 && <BackDropsTab imgs={imgs} />}
        {value === 3 && <Companies movie={movie} />}
        {value === 4 && 'Search />'}
        {value === 5 && <Companies movie={movie} />}
      </Box>
    </Stack>
  );
}

export default Multimedia;
