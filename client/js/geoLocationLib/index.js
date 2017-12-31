const socket = io()
import * as constants from '../../../config/constants'
import { getElementById } from '../helpers'
import { setPageReferral } from '../referrals'

const locationBtn = getElementById('send-location')
if (locationBtn !== null) {
  locationBtn.addEventListener('click', () => {
    if (!navigator.geolocation) return setPageReferral('Geolocation is not supported by your browser.')

    locationBtn.setAttribute('disabled', 'disabled')
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) =>{
      socket.emit(constants.CREATE_LOCATION_MESSAGE, { latitude, longitude })
      locationBtn.removeAttribute('disabled')
    }, () => {
      locationBtn.removeAttribute('disabled')
      setPageReferral('Unable to fetch location')
    })
  })
}
