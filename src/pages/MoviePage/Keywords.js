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

function Keywords({ keywords }) {
  return (
    <>
      <Divider textAlign="center" sx={{ my: 0 }}>
        <Typography variant="subtitle1" mb={0} fontWeight="400" my={0}>
          Palabras Clave
        </Typography>
      </Divider>
      <Stack
        my={3}
        direction="row"
        spacing={2}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        bgcolor="gray.dark"
        p={3}
        flexWrap="wrap"
      >
        {keywords.map((keyword) => (
          <KeywordChip text={keyword.name} key={keyword.id} />
        ))}
      </Stack>
    </>
  );
}
function KeywordChip({ text }) {
  return (
    <Typography
      component="span"
      display="inline-block"
      borderRadius="15px"
      fontSize="13px"
      lineHeight="13px"
      my={1}
      width="auto"
      p="3px 16px"
      bgcolor="#eee4"
    >
      {text}
    </Typography>
  );
}

export default Keywords;
