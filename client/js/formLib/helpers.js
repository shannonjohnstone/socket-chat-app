export const getInputValue = (inputName) => document.getElementsByName(inputName)[0].value
export const clearInputValue = (inputName) => document.getElementsByName(inputName)[0].value = ''
export const getElementById = (id) => document.getElementById('message-form')

function required(value) {
  return value !== '' ? true : false
}

export const validation = {
  required
}
