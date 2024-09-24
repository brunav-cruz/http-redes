import React, { useState, ChangeEvent, FormEvent } from 'react';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { HeaderContainer, SearchContainer, Title } from './styles';

const HeaderWithSearch = () => {
  const [term, setTerm] = useState('');

  const handleTerm = (event) => {
    setTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Searching for:', term);
  };

  return (
    <HeaderContainer>
      <Title>HTTP Pets</Title>
    </HeaderContainer>
  );
};

export default HeaderWithSearch;
