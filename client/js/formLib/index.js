import { getElementById, clearInputValue, getInputValue, validation } from './helpers'

export const messageFormSubmitEventListener = (socket, cb) => {
  getElementById('message-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const message = getInputValue('message')
    if (!validation.required(message)) return
    cb(socket, { from: 'User', message })
    clearInputValue('message')
  })
}
