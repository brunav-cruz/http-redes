import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledItemContainer,
  StyledItemImg,
  StyledItemTextual,
  StyledItemTextualTitle,
  StyledItemTextualDescription,
  StyledItemFooter,
} from './styles';

const HttpCodeCard = ({ httpCode }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/code/${httpCode.code}`);
  };

  const imageUrl = httpCode.image.startsWith('http') 
    ? httpCode.image 
    : `http://192.168.15.4:3122${httpCode.image}`;

  return (
    <StyledItemContainer onClick={handleClick}>
      <StyledItemImg src={imageUrl} alt={`HTTP ${httpCode.code}`} />
      <StyledItemTextual>
        <StyledItemTextualTitle>{httpCode.code}</StyledItemTextualTitle>
        <StyledItemFooter>
          <StyledItemTextualDescription>
            {httpCode.title}
          </StyledItemTextualDescription>
        </StyledItemFooter>
      </StyledItemTextual>
    </StyledItemContainer>
  );
};

export default HttpCodeCard;
