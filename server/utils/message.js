export const generateMessage = (from, text) => ({
  from,
  text,
  createAt: new Date()
})
