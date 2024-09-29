import styled from 'styled-components';

export const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const CodeTitle = styled.h1`
  margin-top: 20px;
`;

export const CodeImage = styled.img`
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CodeDescription = styled.p`
  width: 80%;
  max-width: 600px;
  text-align: left;
  font-size: 18px;
  margin-top: 20px;
  padding: 0 20px;
`;

export const CodeDescriptionTitle = styled.h1`
    text-align: left;
    width: 80%;
    font-weight: bold;

    max-width: 600px;
    font-size: 18px;
    margin-top: 20px;
    padding: 0 20px;
`;

export const CodeLinkTitle = styled.h1`
    text-align: left;
    width: 80%;
    font-weight: bold;

    max-width: 600px;
    font-size: 18px;
    margin-top: 20px;
`;
