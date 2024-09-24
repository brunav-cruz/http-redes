import axios from 'axios';

export function setupAPI(){
    const api = axios.create({
        baseURL: 'https://http-codes-api-64nb.onrender.com/',
        headers: {
            'Content-Type': 'application/json',
        }

    });
    return api;
};

export const api = setupAPI();
