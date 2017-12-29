const socket = io()
import * as constants from '../../../config/constants'
import { getElementById } from '../helpers'

console.log('geoLocationLib log');
const log = (item) => console.log(item, 'geoLocationLib log');

function setPageReferral(referral) {
  const el = document.getElementById('c-page-referral__content')
  const node = document.createElement('p')
  node.appendChild(document.createTextNode(referral))
  el.appendChild(node)
}

const locationBtn = getElementById('send-location')
locationBtn.addEventListener('click', () => {
  if (!navigator.geolocation) return setPageReferral('Geolocation is not supported by your browser.')

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit(constants.CREATE_LOCATION_MESSAGE, {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
  }, () => {
    return setPageReferral('Unable to fetch location')
  })
})
