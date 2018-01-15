import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Header, SideMenu, FieldSet, FormGroup, FormInputAddonBtn, ReferralBanner } from './components'
import { messaging } from './modules'
import { clearInputValue } from './helpers/form'
import { capitalizeFirstLetter } from './helpers/strings'

class Chat extends Component {
  handleSubmit = (e) => {
    const inputName = 'message'
    e.preventDefault()
    messaging.createMessage({ from: 'admin test', message: e.target[inputName].value })
    clearInputValue(inputName)
  }
  renderMessages = () => {
    return this.props.messages.map(message => (
      <div className="c-chat__content">
        <p><span className="c-chat__name">{capitalizeFirstLetter(message.from)}</span> <span className="c-chat__time">{message.createAt}</span></p>
        <p>{message.text}</p>
      </div>
    ))
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
            <div className="c-chat__content">
              <h1 className="c-chat__room-name">Technical Chat</h1>
            </div>
            {this.renderMessages()}
          </div>
          <div className="c-chat__buttons">
            <form onSubmit={this.handleSubmit}>
              <FieldSet>
                <FormGroup
                  formInput={FormInputAddonBtn}
                  name="message"
                  labelText="Message text"
                  labelHidden
                />
              </FieldSet>
            </form>
            <Button btnText='Location' />
          </div>
        </section>
      </main>
    ]
  }
}

const mapStateToProps = (store) => ({
  messages: store.app.messages
})

export default connect(mapStateToProps)(Chat);
