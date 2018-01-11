/* global io */

import React, { Component } from 'react'
import { Button, Header, SideMenu, FormInputAddonBtn, ReferralBanner } from './components'

class Chat extends Component {
  componentDidMount() {
    this.socket = io();
    this.socket.on('connect', () => console.log('Connected to server'))
    this.socket.on('disconnect', () => console.log('Disconnect from server'))
  }
  render() {
    return [
      <SideMenu />,
      <main className="l-main">
        <Header
          size="small"
          position="fixed"
          container={false}
          navType="chat"
        />
        <ReferralBanner />
        <section className="c-chat">
          <div className="list c-chat__list" id="displayed-messages">
            <div className="c-chat__buttons">
              <FormInputAddonBtn />
              <Button btnText='Location' />
            </div>
          </div>
        </section>
      </main>
    ]
  }
}

export default Chat;
