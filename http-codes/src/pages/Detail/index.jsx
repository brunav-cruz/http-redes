import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import Header from '../../components/HttpHeader/index';
import { CodeContainer, CodeTitle, CodeImage, CodeDescription, CodeDescriptionTitle } from './styles.js';

const CodeDetail = () => {
  const { code } = useParams();
  const [details, setDetails] = useState({});

  const ipAddress = import.meta.env.VITE_IP_ADDRESS;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await api.get(`/${code}`);
        setDetails(response.data);
      } catch (error) {
        console.error('Failed to fetch details', error);
      }
    };

    fetchDetails();
  }, [code]);

  const mozilaURL = `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${details.code}`;

  return (
    <>
        <Header />
        <CodeContainer>
            <CodeTitle>{details.code} {details.title}</CodeTitle>
            <CodeImage src={`http://${ipAddress}:3122/images/${code}.png`} alt={`HTTP Status Code ${code}`} />
            <CodeDescriptionTitle>Descrição:</CodeDescriptionTitle>
            <CodeDescription>{details.description || 'No description available.'}</CodeDescription>
            <CodeDescriptionTitle>Veja mais em: <a href={mozilaURL}>{mozilaURL}</a></CodeDescriptionTitle>
        </CodeContainer>
    </>

  );
};

export default CodeDetail;
