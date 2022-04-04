import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { convertMinsToHrsMins } from '../../utils/helpers/helpers';
import { constants } from '../../utils/constants';

import moment from 'moment';
import 'moment/locale/es';
//
import Box from '@mui/material/Box';
import Banner from '../../components/Banner';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function Companies({ movie }) {
  return (
    <>
      <Divider textAlign="center" sx={{ my: 0 }}>
        <Typography variant="caption" mb={0} fontWeight="400" my={0}>
          Compañias Productoras
        </Typography>
      </Divider>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        {movie?.production_companies
          // ?.filter((company) => company.logo_path !== null)
          .map((company) => (
            <Grid item xs={12} sm={3} md={3} lg={3} xl={2} key={company.id}>
              <ProductionCompany company={company} key={company.id} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
function ProductionCompany({ company }) {
  return (
    <>
      <Box
        alt="banner"
        width="100%"
        height="auto"
        component="img"
        src={`${constants.api.site}/original${company?.logo_path}`}
        sx={{
          objectFit: 'cover',
        }}
      />
      <Typography variant="caption" display="block" textAlign="center">
        {company.name}
      </Typography>
    </>
  );
}

export default Companies;
