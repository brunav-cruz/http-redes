import React, { useState, useEffect } from 'react';
import HttpCodeCard from './components/HttpCards';
import HeaderWithSearch from './components/HttpHeader/index';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledMain, StyledContainer } from './styles';
import { SearchContainer } from './components/HttpHeader/styles';
import { api } from '../../services/api';

const HttpCodeList = () => {
  const [httpCodes, setHttpCodes] = useState([]);
  const [term, setTerm] = useState('');

  const handleTerm = (event) => {
    setTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Searching for:', term);
  };

  useEffect(() => {
    const fetchHttpCodes = async () => {
      try {
        const response = await api.get('/');
        setHttpCodes(response.data);
      } catch (error) {
        console.error("Failed to fetch HTTP codes", error);
      }
    };

    fetchHttpCodes();
  }, []);

  return (
    <>
      <HeaderWithSearch />
      <StyledMain>
        <StyledContainer>
          {httpCodes.map((httpCode) => (
              <HttpCodeCard key={httpCode.code} httpCode={httpCode} />
          ))}
        </StyledContainer>
      </StyledMain>
    </>
  );
};

export default HttpCodeList;
