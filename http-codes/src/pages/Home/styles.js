import { Box, Link } from '@mui/material';
import styled from 'styled-components';

export const StyledMain = styled(Box)`
  && {
    display: flex;
    witdh: 100%;
    height: auto;
    box-sizing: border-box;
  }
`;

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 0 auto;
    
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
