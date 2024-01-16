import {io} from 'socket.io-client';

const { VITE_SERVER_URL } = import.meta.env;

export const socket = io(VITE_SERVER_URL);

