export const generateMessage = (from, text) => ({
  from,
  text,
  createAt: new Date()
})

export const generateLocationMessage = ({ from, latitude, longitude }) => {
  return {
    from,
    url: `https://www.google.com.au/maps?q=${latitude},${longitude}`,
    createAt: new Date()
  }
}
