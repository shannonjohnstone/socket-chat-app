import moment from 'moment'

export const generateMessage = (from, text) => {
  const object = {
    from,
    text,
    createAt: moment().valueOf()
  }
  console.log(object, 'generateMessage');
  return object
}

export const generateLocationMessage = ({ from, latitude, longitude }) => {
  return {
    from,
    url: `https://www.google.com.au/maps?q=${latitude},${longitude}`,
    createAt: moment.valueOf()
  }
}
