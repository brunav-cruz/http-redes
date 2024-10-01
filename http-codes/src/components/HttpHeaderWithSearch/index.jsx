import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Box, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchContainer } from './styles';
import Header from '../HttpHeader/index';

const HeaderWithSearch = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  
  const handleTerm = (event) => {
    setTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(term);
  };

  return (
    <>
      <Header />
      <SearchContainer>
      <form onSubmit={handleSearch} style={{ backgroundColor: '#f0f0f0', borderRadius: '4px'}}>
        <Box display="flex" justifyContent="space-between" mt={2} mb={2}>
          <InputBase
            placeholder="Buscar por HTTP code..."
            value={term}
            onChange={handleTerm}
          />
          <IconButton 
            type="submit"
            style={{ marginLeft: 'auto !important', textAlign: 'right'}}
          >
            <SearchIcon />
          </IconButton>
        </Box>
    </form>
    </SearchContainer>
  </>
  );
};

export default HeaderWithSearch;
