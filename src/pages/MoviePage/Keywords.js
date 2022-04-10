//Components
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

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
        p={{ xs: 1, md: 3 }}
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
      p={{ xs: '1px 8px', sm: '3px 16px' }}
      bgcolor="#eee4"
    >
      {text}
    </Typography>
  );
}

export default Keywords;
