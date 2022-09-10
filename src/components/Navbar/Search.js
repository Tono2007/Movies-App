import { useState, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
//ICONS
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
//ico
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const values = Object.fromEntries(data.entries());
      navigate({
        pathname: '/movies',
        search: `?with_text_query=${values?.movie}`,
      });
      setAnchorEl(null);
    },
    [navigate],
  );
  return (
    <>
      <IconButton aria-label="Search Movie" onClick={handleClick}>
        <SearchIcon fontSize="small" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'search-input',
        }}
      >
        <Stack
          mx={2}
          direction="row"
          spacing={0}
          alignItems="center"
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField
            name="movie"
            fullWidth
            size="small"
            margin="dense"
            placeholder="Buscar Pelicula"
            variant="outlined"
          />
          <IconButton aria-label="Search Movie" color="primary" type="submit">
            <SearchIcon color="primary" />
          </IconButton>
        </Stack>
      </Menu>
    </>
  );
}

export default memo(Search);
