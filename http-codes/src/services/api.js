import axios from 'axios';

export function setupAPI(){
    const api = axios.create({
        baseURL: 'http://192.168.15.4:3122/',
        headers: {
            'Content-Type': 'application/json',
        }

    });
    return api;
};

export const api = setupAPI();
