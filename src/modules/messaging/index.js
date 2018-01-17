import io from 'socket.io-client';
import { createMessage } from './createMessage';
import { geoLocation } from './geoLocation';
import { listenForMessages } from './listenForMessages';

let socket;

const init = (cb) => {
  socket = io('http://localhost:3001', { path: '/chatty/socket.io' });
  socket.on('connect', () => console.log('Connected to server'));
  listenForMessages({ socket, cb });
};

export const messaging = {
  init,
  createMessage: ({ from, message }) => createMessage({ socket, from, message }),
  geoLocation: () => geoLocation(socket)
};
