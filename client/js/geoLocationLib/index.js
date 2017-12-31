const socket = io()
import * as constants from '../../../config/constants'
import { getElementById } from '../helpers'
import { setPageReferral } from '../referrals'

const locationBtn = getElementById('send-location')
if (locationBtn !== null) {
  locationBtn.addEventListener('click', () => {
    if (!navigator.geolocation) return setPageReferral('Geolocation is not supported by your browser.')

    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) =>
    socket.emit(constants.CREATE_LOCATION_MESSAGE, { latitude, longitude }),
    () => setPageReferral('Unable to fetch location'))
  })
}
