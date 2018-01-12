
import React from 'react'
import { connect } from 'react-redux'
import Routes from './routing/Routes'
import { messaging } from './modules/messaging'
// import moment from 'moment'

const App = ({ dispatch }) => {
  messaging.init(dispatch)
  return <Routes />
}

export default connect()(App);
