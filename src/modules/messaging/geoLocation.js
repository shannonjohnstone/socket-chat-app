import * as constants from '../../constants';

export function geoLocation(socket) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) reject('Geolocation is not supported by your browser.');
    else {
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        socket.emit(constants.CREATE_LOCATION_MESSAGE, { from: 'User', latitude, longitude });
        return resolve('ok');
      }, () => reject('Unable to fetch location'));
    }
  });
}
