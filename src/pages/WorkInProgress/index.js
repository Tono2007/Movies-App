import { constants } from '../../utils/constants';

//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

//Icons
import CodeIcon from '@mui/icons-material/Code';

function WorkInProgress() {
  return (
    <Box
      p="10%"
      sx={{
        backgroundColor: ' #e5e5f7',
        opacity: 0.8,
        background: (theme) =>
          `repeating-linear-gradient( -45deg, ${theme.palette.primary.main}, ${theme.palette.primary.main} 5px, transparent 5px, transparent 25px )`,
      }}
    >
      <Box
        mt="0%"
        bgcolor="secondary.dark"
        textAlign="center"
        p="4%"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          //py: '5%',
          //px: '20%',
        }}
      >
        <CodeIcon sx={{ fontSize: 130 }} />
        {/*  <Box p={5}>
            <Stack
              direction="column"
              p={1}
              borderRadius="5px"
              bgcolor="secondary.dark"
              justifyContent="center"
              alignItems="center"
            >
              <CodeIcon sx={{ fontSize: 150 }} />
              <Typography variant="h1" paragraph>
                Work In Progress
              </Typography>
              <Typography variant="h3" paragraph textTransform="uppercase">
                coming soon
              </Typography>
            </Stack>
          </Box> */}
        <Typography variant="h1" paragraph>
          Work In Progress
        </Typography>
        <Typography variant="h3" paragraph textTransform="uppercase">
          coming soon
        </Typography>
        <Typography variant="h6" paragraph align="center" color="textSecondary">
          If you want to check in the development process, you are welcome to
          take a peek on{' '}
          <Link
            underline="hover"
            color="primary.light"
            sx={{ cursor: 'pointer' }}
            href={constants.siteData.siteRepo}
            target="_blank"
            rel="noreferrer noopener"
            fontWeight="medium"
          >
            GitHub
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default WorkInProgress;
