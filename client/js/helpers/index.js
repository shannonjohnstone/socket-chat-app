export const getElementById = (id) => document.getElementById(id)

export const appendChildToIdElement = ({ id, newElement, newElementContent }) => {
  const el = document.getElementById(id)
  const node = document.createElement(newElement)
  node.appendChild(document.createTextNode(newElementContent))
  el.appendChild(node)
}
