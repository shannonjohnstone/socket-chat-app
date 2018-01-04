import moment from 'moment'

export const generateMessage = (from, text) => ({
  from,
  text,
  createAt: moment.valueOf()
})

export const generateLocationMessage = ({ from, latitude, longitude }) => {
  return {
    from,
    url: `https://www.google.com.au/maps?q=${latitude},${longitude}`,
    createAt: moment.valueOf()
  }
}
