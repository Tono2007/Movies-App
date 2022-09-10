import { constants } from '../../utils/constants';
//MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
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
            <Grid item xs={6} sm={3} md={3} lg={3} xl={2} key={company.id}>
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
        loading="lazy"
        alt={`${company?.name || 'company'} logo`}
        width="100%"
        height="auto"
        component="img"
        src={`${constants.api.site}/w300${company?.logo_path}`}
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
