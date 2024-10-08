import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  box-sizing: border-box;
  width: 100%;
`;

export const CodeTitle = styled.h1`
  margin-top: 20px;
  text-align: center;
  max-width: 600px;
  width: 100%;
  font-size: 2rem;
  color: #333;
`;

export const CodeImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const CodeDescriptionTitle = styled.h2`
  text-align: left;
  width: 100%;
  max-width: 600px;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 20px;
  padding: 0 20px;
  color: #555;
`;

export const CodeDescription = styled.p`
  width: 100%;
  max-width: 600px;
  text-align: left;
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 10px;
  padding: 0 20px;
  color: #555;
`;

export const ExamplesList = styled.ul`
  list-style-type: disc;
  margin-top: 10px;
  margin-left: 40px;  /* Indentação para criar um leve recuo */
  color: #666;
  font-size: 1rem;
  padding: 0;
  text-align: left;
  max-width: 600px;
`;

export const SimilarCodeLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  display: inline-block; /* Garante que o link respeite o alinhamento da lista */
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const SimilarCodesList = styled.ul`
  list-style-type: disc;
  margin-top: 10px;
  text-align: left;
  margin-left: 0;  /* Indentação para criar um leve recuo */
  font-size: 1rem;
  padding: 0;
  text-align: left;
  max-width: 600px;

  li {
    margin-bottom: 8px; /* Adiciona um espaçamento entre os itens da lista */
  }
`;

export const ExamplesSection = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  padding: 0 20px;
`;

export const SimilarCodesSection = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  padding: 0 20px;
`;