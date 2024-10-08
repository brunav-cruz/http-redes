// src/pages/CodeDetail/index.jsx

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../../services/api';
import Header from '../../components/HttpHeader';
import {
  CodeContainer,
  CodeTitle,
  CodeImage,
  CodeDescriptionTitle,
  CodeDescription,
  ExamplesList,
  SimilarCodeLink,
  ExamplesSection,
  SimilarCodesSection
} from './styles.js';
import { ClipLoader } from 'react-spinners'; 

const CodeDetail = () => {
  const { code } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ipAddress = import.meta.env.VITE_IP_ADDRESS;

  const ipAddress = import.meta.env.VITE_IP_ADDRESS;

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get(`/${code}`);
        setDetails(response.data);
      } catch (error) {
        console.error('Falha ao buscar detalhes', error);
        setError('Falha ao buscar detalhes do código. Por favor, tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [code]);

  const mozilaURL = `https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/${details.code}`;

  if (loading) {
    return (
      <>
        <Header />
        <CodeContainer>
          <ClipLoader size={50} color="#123abc" loading={loading} />
          <p>Carregando detalhes...</p>
        </CodeContainer>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <CodeContainer>
          <p>{error}</p>
        </CodeContainer>
      </>
    );
  }

  return (
    <>
      <Header />
      <CodeContainer>
          <CodeTitle>
            {details.code} {details.title}
          </CodeTitle>
          <CodeImage
            src={`http://${ipAddress}:3122/images/${code}.png`}
            alt={`HTTP Status Code ${code}`}
          />
          <CodeDescriptionTitle>Descrição:</CodeDescriptionTitle>
          <CodeDescription>
            {details.description || 'Nenhuma descrição disponível.'}
          </CodeDescription>

        {/* Seção de Exemplos de Uso */}
        {details.useExamples && details.useExamples.length > 0 && (
          <ExamplesSection>
            <CodeDescriptionTitle>Exemplos de Uso:</CodeDescriptionTitle>
            <ExamplesList>
              {details.useExamples.map((example, index) => (
                <li key={index}>{example}</li>
              ))}
            </ExamplesList>
          </ExamplesSection>
        )}

        {/* Seção de Códigos Similares */}
        {details.similarCodes && details.similarCodes.length > 0 && (
          <SimilarCodesSection>
            <CodeDescriptionTitle>Códigos Similares:</CodeDescriptionTitle>
            <ExamplesList>
              {details.similarCodes.map((similarCode) => (
                <li key={similarCode}>
                  <SimilarCodeLink to={`/code/${similarCode}`}>
                    {similarCode}
                  </SimilarCodeLink>
                </li>
              ))}
            </ExamplesList>
          </SimilarCodesSection>
        )}

        <div>
          <CodeDescriptionTitle>
            Veja mais em:{' '}
            <a
              href={mozilaURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 'normal', fontSize: '1rem' }}
            >
              {mozilaURL}
            </a>
          </CodeDescriptionTitle>
        </div>
      </CodeContainer>
    </>
  );
};

export default CodeDetail;
