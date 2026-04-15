import { useEffect } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = process.env.REACT_APP_API_URL || 'https://trimtech-backend.onrender.com';

export function useSocket(event, callback) {
  useEffect(() => {
    const socket = io(SOCKET_URL);
    socket.on(event, callback);
    return () => socket.disconnect();
  }, [event, callback]);
}
