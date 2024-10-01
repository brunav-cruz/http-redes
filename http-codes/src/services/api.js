import axios from 'axios';

const ipAddress = import.meta.env.VITE_IP_ADDRESS;

const url = `http://${ipAddress}:3122/`

export function setupAPI(){
    const api = axios.create({
        baseURL: url,
        headers: {
            'Content-Type': 'application/json',
        }

    });
    return api;
};

export const api = setupAPI();
