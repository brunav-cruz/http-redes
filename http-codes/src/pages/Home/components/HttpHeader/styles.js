import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #d0383e;
  margin-left: 10px;
`;

export const SearchContainer = styled.div`
&& {
    padding: 1rem 10vw;
    witdth: 100%;
    align-items: center;
    justify-content: space-between;

    .MuiInputBase-root {
      padding: 8px;
      flex: 1;
      font-family: Work Sans;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.5rem;
      text-align: left;
      color: #707070;
    }
  }
`;

// export const SearchContainer = styled.div`
//   && {
//     padding: 2rem 10vw;
//     width: 100%; // Corrected typo from 'witdh' to 'width'
//     display: flex; // Ensure this container uses flexbox
//     align-items: center;
//     justify-content: space-between; // This will help in pushing the icon to the right

//     .MuiInputBase-root {
//       padding: 8px;
//       flex: 1; // This will allow the input to take the remaining space
//       font-family: Work Sans;
//       font-size: 1.125rem;
//       font-weight: 400;
//       line-height: 1.5rem;
//       text-align: left;
//       color: #707070;
//     }
//   }
// `;