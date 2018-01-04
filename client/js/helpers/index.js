import loglevel from 'loglevel'

export const getElementById = (id) => document.getElementById(id)
export const createElement = (el) => document.createElement(el)
export const createTextNode = (content) => document.createTextNode(content)

export const createAtagElement = (config) => {
  const aTagNode = createElement('a')
  config.attributes.forEach(attObj => aTagNode.setAttribute(attObj.name, attObj.value))
  aTagNode.innerHTML = config.innerHTML
  return aTagNode
}

export const appendChildTextElementToIdElement = ({ id, newElement, newElementContent }) => {
  const node = createElement(newElement)
  node.appendChild(createTextNode(newElementContent))
  getElementById(id).appendChild(node)
}

export const appendChildElementsToIdElement = ({ id, newElement, newElementsArray }) => {
  const node = createElement(newElement)
  newElementsArray.forEach(element => node.appendChild(element))
  getElementById(id).appendChild(node)
}

export const log = loglevel
