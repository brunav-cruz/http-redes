import axios from 'axios';

export function setupAPI(){
    const ipAddress = import.meta.env.VITE_IP_ADDRESS;
    const url = `http://${ipAddress}:3122/`

    const api = axios.create({
        baseURL: url,
        headers: {
            'Content-Type': 'application/json',
        }

    });
    return api;
};

export const api = setupAPI();
