import React from 'react'
import Routes from './routing/Routes'
import { store } from './index'
import { messaging } from './modules/messaging'
import { scrollToBottom } from './helpers/scrolling'

const App = () => {
  const handleNewMessage = (data) => {
    store.dispatch({ type: 'NEW_MESSAGE', data })
    scrollToBottom('displayed-messages')
  }

  messaging.init(handleNewMessage)
  return <Routes />
}

export default App;
