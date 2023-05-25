import React from 'react';
import { styled } from '@mui/material/styles';
import { InputBase, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: 400,
  margin: 10, 
  padding: theme.spacing(1),
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(1),
}));

function SearchBar() {
  return (
    <Paper component={SearchContainer}>
      <SearchInput
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
      />
      <SearchButton aria-label="search">
        <SearchIcon />
      </SearchButton>
    </Paper>
  );
}

export default SearchBar;
