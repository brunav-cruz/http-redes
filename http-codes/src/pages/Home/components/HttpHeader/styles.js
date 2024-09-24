import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #d0383e;
  margin: 20px;
`;

export const SearchContainer = styled.div`
&& {
    padding: 2rem 10vw;
    witdh: 100%;
    display: flex;
    align-items: center;
    width: 800px;

    .MuiInputBase-root {
      margin-left: 1px;
      flex: 1;
      font-family: Work Sans;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.5rem;
      text-align: left;
      color: #707070;
      border: 0.125rem solid #ffffff;
      outline: 0.125rem solid #ffffff;
    }
  }
`;
