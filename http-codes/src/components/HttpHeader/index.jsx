import React from 'react';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import { HeaderContainer, Title } from './styles';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <HeaderContainer onClick={handleClick}>
        <PetsOutlinedIcon fontSize='large' sx={{ fill: '#d0383e !important', marginBottom: '5px', marginLeft: '20px' }}/>
        <Title>HTTP Pets</Title>
    </HeaderContainer>
  );
};

export default Header;
