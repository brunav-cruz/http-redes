import React, { useState, useEffect } from 'react';
import HttpCodeCard from '../../components/HttpCards';
import HeaderWithSearch from '../../components/HttpHeaderWithSearch/index';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledMain, StyledContainer } from './styles';
import { SearchContainer } from '../../components/HttpHeaderWithSearch/styles';
import { api } from '../../services/api';

const HttpCodeList = () => {
  const [allHttpCodes, setAllHttpCodes] = useState([]);
  const [displayedHttpCodes, setDisplayedHttpCodes] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const fetchHttpCodes = async () => {
      try {
        const response = await api.get('/');
        setAllHttpCodes(response.data);
        setDisplayedHttpCodes(response.data);
      } catch (error) {
        console.error("Failed to fetch HTTP codes", error);
      }
    };

    fetchHttpCodes();
  }, []);

  useEffect(() => {
    const filteredCodes = term !== '' ? allHttpCodes.filter(httpCode =>
      httpCode.code.toString().includes(term)
    ) : allHttpCodes;
    setDisplayedHttpCodes(filteredCodes);
  }, [term, allHttpCodes]);

  const handleSearch = (searchTerm) => {
    setTerm(searchTerm);
  };

  return (
    <>
      <HeaderWithSearch onSearch={handleSearch} />
      <StyledMain>
        <StyledContainer>
          {displayedHttpCodes.map(httpCode => (
            <HttpCodeCard key={httpCode.code} httpCode={httpCode} />
          ))}
        </StyledContainer>
      </StyledMain>
    </>
  );
};

export default HttpCodeList;


