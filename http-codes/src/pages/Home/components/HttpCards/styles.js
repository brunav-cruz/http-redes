import styled from 'styled-components';

export const StyledItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 10px;
    width: 400px;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.05);
    }
`;

export const StyledItemImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const StyledItemTextual = styled.div`
    padding: 15px;
    background-color: #d0383e;
    color: white;
    font-family: "Work Sans";
    font-weight: 400;
`;

export const StyledItemTextualTitle = styled.h2`
    margin: 0;
    font-size: 25px;
`;

export const StyledItemFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledItemTextualDescription = styled.p`
    margin: 5px 0 0;
    font-size: 16px;
`;
