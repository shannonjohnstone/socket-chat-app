import moment from 'moment';
import * as constants from '../../constants';

export const listenForMessages = ({ socket, cb }) => {
  socket.on(constants.NEW_MESSAGE, (data) => {
    const formatedData = { ...data, createAt: moment(data.createAt).format('h:mm:a') };
    cb(formatedData);
  });

  socket.on(constants.NEW_LOCATION_MESSAGE, (data) => {
    const formatedData = { ...data, createAt: moment(data.createAt).format('h:mm:a') };
    cb(formatedData);
  });
};
