
import React from 'react'
import { connect } from 'react-redux'
import Routes from './routing/Routes'
import { messaging } from './modules/messaging'
// import moment from 'moment'

function scrollToBottom() {
  const container = document.getElementById('displayed-messages')
  if (container) container.scrollTop = container.scrollHeight - container.clientHeight
}

const App = ({ dispatch }) => {
  const handleNewMessage = (data) => {
    dispatch({ type: 'NEW_MESSAGE', data })
    scrollToBottom()
  }
    
  messaging.init(handleNewMessage)
  return <Routes />
}

export default connect()(App);
